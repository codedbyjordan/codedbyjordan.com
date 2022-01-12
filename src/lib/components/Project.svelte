<script lang="ts">
	export let codeUrl: string;
	export let previewUrl: string;
	export let name: string;
	export let description: string;
</script>

<div
	class="bg-[#0D0D0D] py-4 px-6 mt-4 mb-12 rounded-xl shadow-md flex flex-col h-42 md:h-[15.625rem] relative"
>
	<h1 class="font-bold text-xl md:text-2xl">{name}</h1>
	<p class="my-2 text-xs md:text-base">{description}</p>

	<div
		class="font-bold text-right text-sm md:text-base flex self-end md:absolute md:bottom-0 md:pb-6"
	>
		<a href={codeUrl} class="underline mx-2">code</a>
		<a href={previewUrl} class="underline">preview</a>
	</div>
</div>
