<script>
	import Seo from '$lib/components/Seo.svelte';
	import Nav from '$lib/components/layout/Nav.svelte';
	import '../app.css';
	import Footer from '$lib/components/layout/Footer.svelte';
	import SocialMediaIcons from '$lib/components/SocialMediaIcons.svelte';
</script>

<div class="font-poppins w-full min-h-screen flex justify-center bg-[#010101] text-white">
	<div class="w-4/5 md:w-1/2 2xl:w-2/5 pt-12 md:pt-24 animate-fadeIn">
		<div class="pb-6">
			<div class="flex">
				<img
					src="https://pbs.twimg.com/profile_images/1478109827683528704/WT1Vl1cx_400x400.jpg"
					alt="Jordan Baron"
					class="rounded-full border-4 md:border-[6px] border-white w-2/5 h-2/5 md:w-5/12"
				/>
				<Nav />
			</div>
			<div class="pt-8">
				<h1 class="font-bold text-3xl pb-2">hey, i'm jordan ☕️</h1>
				<p class="">18 year-old web developer from Virginia</p>
				<SocialMediaIcons />
			</div>
		</div>
		<slot />
	</div>
</div>
