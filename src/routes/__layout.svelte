<script>
	import Seo from '$lib/components/Seo.svelte';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import '../app.css';
	import Footer from '$lib/components/layout/Footer.svelte';
</script>

<Seo title="Jordan Baron | 18 year old web developer out of Virginia" />
<div class="font-poppins w-full min-h-screen">
	<Navbar />
	<slot />
	<Footer />
</div>
