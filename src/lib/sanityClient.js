import sanityClient from '@sanity/client';
const client = sanityClient({
	projectId: 'vmr0uhcd',
	dataset: 'production',
	apiVersion: '2022-02-28',
	useCdn: true // `false` if you want to ensure fresh data
});

export default client;
