<script>
	import Nav from '$lib/components/layout/Nav.svelte';
	import Project from '$lib/components/Project.svelte';
	import Section from '$lib/components/Section.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import client from '$lib/sanityClient';
</script>

<div>
	<Section title="about me" id="about">
		<div class="bg-[#0D0D0D] py-4 px-6 my-4 rounded-xl shadow-md flex flex-col">
			<p class="text-sm md:text-lg">
				I use numerous frameworks to develop fast, responsive, feature-rich web and mobile apps.
				Below are some of my skills, feel free to check out <a
					href="/resume.pdf"
					download
					class="font-bold underline"
				>
					my resume</a
				> to see them all.
			</p>

			<div class="bx-lg pt-6">
				<i class="bx bxl-javascript" />
				<i class="bx bxl-nodejs" />
				<i class="bx bxl-html5" />
				<i class="bx bxl-css3" />
				<i class="bx bxl-react" />
				<i class="bx bx-terminal" />
			</div>
		</div>
	</Section>

	<Section title="projects" id="projects">
		{#await client.fetch('*[_type == "project"] | order(_createdAt desc)')}
			Loading projects...
		{:then projects}
			{#each projects as project}
				<Project
					name={project.name}
					description={project.description}
					codeUrl={project.code_url}
					image={project.image?.asset?._ref}
					previewUrl={project.preview_url}
				/>
			{/each}
		{:catch error}
			Error fetching projects! Refresh to try again.
		{/await}
	</Section>
</div>
