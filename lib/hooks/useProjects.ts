import { useEffect, useState } from 'react'
import client from '../sanityClient'

export type Project = {
  name: string
  description: string
  code_url: string
  preview_url: string
  image: any
}

export default function useProjects() {
  const [projects, setProjects] = useState<[] | Project[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchProjects = async () => {
    const fetchedProjects = await client.fetch(
      '*[_type == "project"] | order(_createdAt desc)'
    )
    console.log(fetchedProjects)
    setProjects(fetchedProjects)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return { projects, isLoading }
}
