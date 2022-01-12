<script>
	import Nav from '$lib/components/layout/Nav.svelte';
	import Project from '$lib/components/Project.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

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
			description="Camp is a PDF reader built with Electron, Svelte, Tailwind, and Vite."
			codeUrl="https://github.com/codedbyjordan/camp"
			previewUrl="https://github.com/codedbyjordan/camp"
		/>
		<Project
			name="Markdown Reference"
			description="An extension for Raycast built using React, Raycast's own API, and data from MarkdownGuide's API"
			codeUrl="https://github.com/codedbyjordan/camp"
			previewUrl="https://github.com/codedbyjordan/camp"
		/>
		<Project
			name="ctrl+v"
			description="Built with SvelteKit, ctrl+v is a site to quickly and easily paste code snippets to share with anyone."
			codeUrl="https://github.com/codedbyjordan/ctrlv"
			previewUrl="https://ctrlv-nine.vercel.app"
		/>
		<Project
			name="File Uploader"
			description="A simple file uploader built using React and Firebase. Started out as an image uploader via a tutorial from The Net Ninja"
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
			description="AOS is JavaScript library to easily animate elements when scrolled to. I made it with JavaScript using the IntersectionObserver API, using animations from Animate.css"
			codeUrl="https://github.com/codedbyjordan/aos"
			previewUrl="https://github.com/codedbyjordan/aos"
		/>
		<Project
			name="Svelte for React Devs"
			description="Notes I'm taking as I learn Svelte, coming from React"
			codeUrl="https://github.com/codedbyjordan/svelte-for-the-react-dev"
			previewUrl="https://github.com/codedbyjordan/svelte-for-the-react-dev/blob/main/README.md"
		/>
		<Project
			name="HW.tf"
			description="A website made for a friend's Team Fortress server. Built entirely by me using
                React with Gatsby.js"
			codeUrl="https://github.com/codedbyjordan/hwgaming.tf"
			previewUrl="https://hwgaming.vercel.app"
		/>
	</Section>
</div>
