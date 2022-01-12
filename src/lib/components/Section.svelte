<script lang="ts">
	export let title: string;
	export let id: string;
</script>

<div {id} class="my-24">
	<h1 class="text-2xl md:text-3xl font-bold pb-2">{title}</h1>
	<slot />
</div>
