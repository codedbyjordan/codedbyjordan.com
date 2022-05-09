import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'vmr0uhcd',
  dataset: 'production',
  apiVersion: '2022-05-08',
  useCdn: false, // `false` if you want to ensure fresh data
})

export default client
