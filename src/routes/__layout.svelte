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
					src="https://www.notion.so/image/https%3A%2F%2Fi.ibb.co%2F2k96f11%2F1-E17-C5-D4-2-ECF-498-F-8240-8-F4776-B11-B78.png?table=block&id=ff91f478-c4ae-40ee-addc-fe7ab08d4d1f&spaceId=0e6ef2b7-1003-4b95-b051-8aeca7603c28&width=250&userId=d8703091-39cc-40bb-92af-37e4f9910d49&cache=v2"
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
