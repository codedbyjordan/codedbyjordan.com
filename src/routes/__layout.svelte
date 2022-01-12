<script>
	import Seo from '$lib/components/Seo.svelte';
	import Nav from '$lib/components/layout/Nav.svelte';
	import '../app.css';
	import Footer from '$lib/components/layout/Footer.svelte';
</script>

<Seo title="Jordan Baron | 18 year old web developer out of Virginia" />
<div class="font-poppins w-full min-h-screen flex justify-center bg-[#010101] text-white">
	<div class="w-4/5 md:w-2/5 pt-12 md:pt-24 animate-fadeIn">
		<div class="pb-6">
			<div class="flex">
				<img
					src="https://pbs.twimg.com/profile_images/1478109827683528704/WT1Vl1cx_400x400.jpg"
					alt="Jordan Baron"
					class="rounded-full border-4 md:border-[6px] border-white w-4/5 h-4/5 md:w-5/12"
				/>
				<Nav />
			</div>
			<div class="pt-8">
				<h1 class="font-bold text-3xl pb-2">hey, i'm jordan ☕️</h1>
				<p class="">18 year-old web developer from Virginia</p>
				<div class="text-xl pt-4">
					<a href="https://twitter.com/codedbyjordan" class="px-2"
						><i class="fab fa-twitter fa-2x" /></a
					>
					<a href="https://github.com/codedbyjordan" class="px-2"
						><i class="fab fa-github fa-2x" /></a
					>
					<a href="https://linkedin.com/in/jordanmbaron" class="px-2"
						><i class="fab fa-linkedin-in fa-2x" /></a
					>
				</div>
			</div>
		</div>
		<slot />
	</div>
</div>
