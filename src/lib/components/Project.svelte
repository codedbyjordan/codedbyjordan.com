<script lang="ts">
	export let codeUrl: string;
	export let previewUrl: string;
	export let name: string;
	export let description: string;
	export let image: string;

	const urlFor = (source: string) => {
		const baseUrl = 'https://cdn.sanity.io/images/vmr0uhcd/production/';
		const image = source.split('image-')[1].replace('-webp', '.webp');
		return baseUrl + image;
	};
</script>

<div class="bg-[#0D0D0D] py-4 px-6 mt-4 mb-12 rounded-xl shadow-md flex flex-col h-42  relative">
	<h1 class="font-bold text-xl md:text-2xl">{name}</h1>
	<p class="my-2 text-sm md:text-base">{description}</p>

	<img src={urlFor(image)} alt="Project" class="my-2" />
	<div class="font-bold text-right md:text-base flex self-end my-2 md:pt-0">
		<a href={codeUrl} class="underline mx-2">code</a>
		<a href={previewUrl} class="underline">preview</a>
	</div>
</div>
