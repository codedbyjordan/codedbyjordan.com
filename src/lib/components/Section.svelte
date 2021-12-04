<script lang="ts">
	export let title: string;
	export let id: string;
</script>

<div
	{id}
	class="bg-[#45061F] w-11/12 lg:w-2/3 text-white py-8 px-6 md:px-12 my-4 rounded-xl shadow-md flex flex-col"
>
	<h1 class="text-3xl font-bold pb-4">{title}</h1>
	<slot />
</div>
