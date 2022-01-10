<script>
	import Project from '$lib/components/Project.svelte';
	import Section from '$lib/components/Section.svelte';
	import { init as initEmail, sendForm } from 'emailjs-com';
	import { onMount } from 'svelte';
	onMount(() => {
		initEmail('user_Lumjlp1rDiX9Hj94e3JiW');
	});
	const sendEmail = (e) => {
		sendForm('service_uy1i3zr', 'template_km0123h', e.target, 'user_Lumjlp1rDiX9Hj94e3JiW').then(
			(result) => {
				document.querySelector('#successText').classList.remove('hidden');
				document.querySelector('button').setAttribute('disabled', '');
			},
			(error) => {
				document.querySelector('#errorText').classList.remove('hidden');
			}
		);
	};
</script>

<!-- landing -->
<div id="home" class="h-[75vh] text-white flex flex-col items-center justify-center">
	<div class="w-full md:w-1/2 flex flex-col md:flex-row items-center justify-center animate-fadeIn">
		<img
			src="img/me.webp"
			alt="Jordan Baron"
			class="rounded-full border-4 md:border-7 border-white w-1/2 md:w-4/12"
		/>
		<div class="text-center md:text-left md:pl-8 pt-4">
			<h1 class="text-3xl md:text-4xl font-bold">hi, I'm Jordan</h1>
			<p class="md:text-xl">an 18 year-old web developer from Virginia</p>
			<div class="text-xl pt-2">
				<a href="https://twitter.com/codedbyjordan" class="px-2"
					><i class="fab fa-twitter fa-2x" /></a
				>
				<a href="https://github.com/codedbyjordan" class="px-2"><i class="fab fa-github fa-2x" /></a
				>
				<a href="https://linkedin.com/in/jordanmbaron" class="px-2"
					><i class="fab fa-linkedin-in fa-2x" /></a
				>
			</div>
		</div>
	</div>
</div>

<div class="flex flex-col bg-[#07050C] min-h-auto items-center flex-1 py-8">
	<Section id="about" title="What I Do">
		<p class="text-sm md:text-lg pb-4">
			I use numerous frameworks to develop fast, responsive, feature-rich web and mobile apps. Below
			are some of my skills, feel free to check out my resume to see them all.
		</p>
		<div class="fa-3x">
			<i class="fab fa-js-square px-2" />
			<i class="fab fa-node-js px-2" />
			<i class="fab fa-html5 px-2" />
			<i class="fab fa-css3-alt px-2" />
			<i class="fab fa-react px-2" />
			<i class="fas fa-terminal px-2" />
		</div>
	</Section>
	<Section title="Projects" id="projects">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<Project
				img="img/projects/camp.webp"
				name="Camp"
				description="Camp is a PDF reader built with Electron, Svelte, Tailwind, and Vite."
				codeUrl="https://github.com/codedbyjordan/camp"
				previewUrl="https://github.com/codedbyjordan/camp"
			/>
			<Project
				img="img/projects/mdref.webp"
				name="Markdown Reference"
				description="An extension for Raycast built using React, Raycast's own API, and data from MarkdownGuide's API"
				codeUrl="https://github.com/codedbyjordan/camp"
				previewUrl="https://github.com/codedbyjordan/camp"
			/>
			<Project
				img="img/projects/ctrlv.webp"
				name="ctrl+v"
				description="Built with SvelteKit, ctrl+v is a site to quickly and easily paste code snippets to share with anyone."
				codeUrl="https://github.com/codedbyjordan/ctrlv"
				previewUrl="https://ctrlv-nine.vercel.app"
			/>
			<Project
				img="img/projects/file_uploader.webp"
				name="File Uploader"
				description="A simple file uploader built using React and Firebase. Started out as an image uploader via a tutorial from The Net Ninja"
				codeUrl="https://github.com/codedbyjordan/file-uploader"
				previewUrl="https://jmb.codes/file-uploader"
			/>
			<Project
				img="img/projects/etherexplore.webp"
				name="ether.explore (read description)"
				description="A small Ethereum blockchain explorer made using Svelte with Tailwind and SvelteKit NOTE: This project is hosted on Heroku, so it may take a bit to load."
				codeUrl="https://github.com/codedbyjordan/ether-explore"
				previewUrl="https://ether-explore.herokuapp.com/"
			/>
			<Project
				img="img/projects/aos.webp"
				name="AOS"
				description="AOS is JavaScript library to easily animate elements when scrolled to. I made it with JavaScript using the IntersectionObserver API, using animations from Animate.css"
				codeUrl="https://github.com/codedbyjordan/aos"
				previewUrl="https://github.com/codedbyjordan/aos"
			/>
			<Project
				img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/199px-Svelte_Logo.svg.png"
				name="Svelte for React Devs"
				description="Notes I'm taking as I learn Svelte, coming from React"
				codeUrl="https://github.com/codedbyjordan/svelte-for-the-react-dev"
				previewUrl="https://github.com/codedbyjordan/svelte-for-the-react-dev/blob/main/README.md"
			/>
			<Project
				img="img/projects/hw_gaming.webp"
				name="HW.tf"
				description="A website made for a friend's Team Fortress server. Built entirely by me using
                React with Gatsby.js"
				codeUrl="https://github.com/codedbyjordan/hwgaming.tf"
				previewUrl="https://hwgaming.vercel.app"
			/>
		</div>
	</Section>
	<Section id="contact" title="Get In Touch">
		<p class="text-sm md:text-lg pb-4">
			Interested in my work? Shoot me a message, I'll get back to you ASAP.
		</p>
		<!-- contact form -->
		<form
			action="#"
			on:submit|preventDefault={sendEmail}
			class="lg:w-3/4 flex flex-col self-center"
		>
			<input type="text" class="input-field text-black" name="name" placeholder="Name" required />
			<input
				type="email"
				class="input-field text-black"
				placeholder="Email"
				required
				name="email"
			/>
			<select class="input-field text-white bg-[#4d0919]" name="reason">
				<option value="default" disabled selected>Reason For Contacting</option>
				<option>General Inquiry</option>
			</select>
			<textarea
				required
				class="input-field h-32 md:h-60 outline-none resize-none text-normal text-black"
				placeholder="Message"
				name="msg"
			/>
			<div class="flex justify-between items-center mx-3">
				<p
					id="successText"
					class="
            text-green-500
            font-bold
            animate-fadeIn
            items-center
            hidden
          "
				>
					Success! I will get back to you ASAP.
				</p>
				<p
					id="errorText"
					class="
            text-red-500
            font-bold
            animate-fadeIn
            items-center
            hidden
          "
				>
					Error! Please try again.
				</p>

				<button
					type="submit"
					class="
            rounded-full
            bg-transparent
						border-4
						border-[#A01232]
            text-[#A01232]
            px-8
            py-2
						ml-auto
            text-darker-gray
            font-semibold
            transition
            ease-in-out
            duration-300
            hover:bg-[#A01232]
          "
				>
					send
				</button>
			</div>
		</form>
		<!-- end contact form -->
	</Section>
</div>

<style>
	#home {
		background: #c31432; /* fallback for old browsers */
		background: -webkit-linear-gradient(
			to bottom,
			#240b36,
			#c31432
		); /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(
			to bottom,
			#240b36,
			#c31432
		); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}
</style>
