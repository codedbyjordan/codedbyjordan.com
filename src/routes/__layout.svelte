<script>
	import Nav from '$lib/components/layout/Nav.svelte';
	import '../app.css';
	import SocialMediaIcons from '$lib/components/SocialMediaIcons.svelte';
</script>

<div class="font-poppins w-full min-h-screen flex justify-center bg-[#010101] text-white">
	<div class="w-4/5 md:w-1/2 2xl:w-2/5 pt-12 md:pt-24 animate-fadeIn">
		<div class="pb-6">
			<div class="flex">
				<img
					src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/46ee62f9-45fd-4760-a109-93929a7f436d/me_.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220228T230503Z&X-Amz-Expires=86400&X-Amz-Signature=887677452f867b694726f972f3bf417d7c500bca813b9fa007ac54a9d3b3d0a3&X-Amz-SignedHeaders=host&x-id=GetObject"
					alt="Jordan Baron"
					class="rounded-full border-4 md:border-[6px] border-white w-2/5 h-2/5 md:w-5/12"
				/>
				<Nav />
			</div>
			<div class="pt-8">
				<h1 class="font-bold text-3xl pb-2">hey, i'm jordan ☕️</h1>
				<p class="">a tenacious web developer from Virginia</p>
				<SocialMediaIcons />
			</div>
		</div>
		<slot />
	</div>
</div>
