<script>
	import { onMount } from 'svelte';
	import hljs from 'highlight.js';
	import SocialMediaIcons from './components/SocialMediaIcons.svelte';

	export let title;
	export let subtitle;
	export let date;

	onMount(() => {
		hljs.highlightAll();
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="/themes/github-dark.css" />
</svelte:head>

<div class="mt-12">
	<p>{date}</p>
	<div class="text-xl mt-4 prose prose-sm prose-invert">
		<slot />
	</div>
	<div class="text-center">
		<p class="mt-8 italic">
			Thanks for reading! Check me out on social media by clicking below :&#41;
		</p>
		<SocialMediaIcons />
	</div>
</div>
