<script lang="ts">
	export let codeUrl: string;
	export let previewUrl: string;
	export let name: string;
	export let description: string;
	export let img: string;
</script>

<div class="project bg-black rounded-xl overflow-hidden my-2">
	<img src={img} alt="project thumbnail" />
	<div class="p-4">
		<h1 class="text-2xl lg:text-xl font-semibold">{name}</h1>
		<p class="text-sm lg:text-xs my-3">{description}</p>
		<div class="pt-2 lg:text-sm">
			<a href={codeUrl} class="font-semibold underline pr-2">Code</a>
			<a href={previewUrl} class="font-semibold underline">Preview</a>
		</div>
	</div>
</div>
