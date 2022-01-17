<script>
	import Nav from '$lib/components/layout/Nav.svelte';
	import Project from '$lib/components/Project.svelte';
	import Section from '$lib/components/Section.svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo title="Jordan Baron | Fullstack web developer out of Virginia" />
<div>
	<Section title="about me" id="about">
		<div class="bg-[#0D0D0D] py-4 px-6 my-4 rounded-xl shadow-md flex flex-col">
			<p class="text-sm md:text-lg">
				I use numerous frameworks to develop fast, responsive, feature-rich web and mobile apps.
				Below are some of my skills, feel free to check out my resume to see them all.
			</p>
			<div class="fa-2x pt-6">
				<i class="fab fa-js-square px-2" />
				<i class="fab fa-node-js px-2" />
				<i class="fab fa-html5 px-2" />
				<i class="fab fa-css3-alt px-2" />
				<i class="fab fa-react px-2" />
				<i class="fas fa-terminal px-2" />
			</div>
		</div>
	</Section>

	<Section title="projects" id="projects">
		<Project
			name="Camp"
			description="Camp is a PDF reader built with Electron, Svelte, Tailwind, Vite, and TypeScript (although only with Svelte, not Electron)."
			codeUrl="https://github.com/codedbyjordan/camp"
			previewUrl="https://github.com/codedbyjordan/camp"
		/>
		<Project
			name="Markdown Reference"
			description="Forgot how to use Markdown? I do, more than I'd like to admit. That's why I made Markdown Reference, an extension for Raycast built using React, Raycast's own API, and data from MarkdownGuide's API."
			codeUrl="https://github.com/codedbyjordan/camp"
			previewUrl="https://github.com/codedbyjordan/camp"
		/>
		<Project
			name="ctrl+v"
			description="Similar to HasteBin, ctrl+v is a site to quickly and easily paste code snippets to share with anyone. Built with SvelteKit, MongoDB, and Tailwind"
			codeUrl="https://github.com/codedbyjordan/ctrlv"
			previewUrl="https://ctrlv-nine.vercel.app"
		/>
		<Project
			name="File Uploader"
			description="React and Firebase-based project built off of a tutorial by The Net Ninja"
			codeUrl="https://github.com/codedbyjordan/file-uploader"
			previewUrl="https://jmb.codes/file-uploader"
		/>
		<Project
			name="ether.explore (read desc)"
			description="A small Ethereum blockchain explorer made using SvelteKit and Tailwind NOTE: This project is hosted on Heroku, so it may take a bit to load."
			codeUrl="https://github.com/codedbyjordan/ether-explore"
			previewUrl="https://ether-explore.herokuapp.com/"
		/>
		<Project
			name="AOS"
			description="Inspired by Michal Snik's library and made using modern JavaScript using the IntersectionObserver API, AOS is JavaScript library to easily animate elements when scrolled to."
			codeUrl="https://github.com/codedbyjordan/aos"
			previewUrl="https://github.com/codedbyjordan/aos"
		/>
		<Project
			name="HW.tf"
			description="A website made for a friend's Team Fortress 2 server. Built using
                React with Gatsby.js, it also features a ban lookup sysem (queries a MySQL database)"
			codeUrl="https://github.com/codedbyjordan/hwgaming.tf"
			previewUrl="https://hwgaming.vercel.app"
		/>
	</Section>
</div>
