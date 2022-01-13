<script context="module">
	const allPosts = import.meta.glob('./posts/*.svx');
	let postsPromises = [];
	for (const path in allPosts) {
		postsPromises.push(
			allPosts[path]().then(({ metadata }) => ({
				path: `/blog/${path.replace('.svx', '')}`,
				...metadata
			}))
		);
	}

	export const load = async () => {
		const posts = await Promise.all(postsPromises);

		return {
			props: {
				posts
			}
		};
	};
</script>

<script>
	import Section from '$lib/components/Section.svelte';
	export let posts;
</script>

<div class="mt-12">
	<h1 class="italic text-[#7a7a7a] text-2xl">"my thoughts, dreams, plots, and my schemes"</h1>
	<p class="text-right mb-12">- Thebe Kgositsile</p>
	<h2 class="text-4xl font-bold pb-2">posts</h2>
	<ul class="pt-4 text-lg">
		{#each posts as post}
			<li class="pl-4">
				<a href={post.path}>- {post.title} ({post.date})</a>
				<p class="italic text-sm pl-4 text-[#2e2e2e]">{post.subtitle}</p>
			</li>
		{/each}
	</ul>
</div>
