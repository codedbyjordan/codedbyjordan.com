import React from 'react'
import { FaGithub, FaLink } from 'react-icons/fa'

type ProjectType = {
  name: string
  description: string
  previewUrl: string
  codeUrl: string
  image: string
}

const Project: React.FC<ProjectType> = ({
  name,
  description,
  previewUrl,
  codeUrl,
  image,
}) => {
  const urlFor = (source: string) => {
    const baseUrl = 'https://cdn.sanity.io/images/vmr0uhcd/production/'
    const image = source.split('image-')[1].replace('-webp', '.webp')
    return baseUrl + image
  }

  return (
    <div className="text-center pt-7 pb-16">
      <h1 className="underline font-semibold text-3xl">{name}</h1>
      <p className="py-2 text-lg">{description}</p>
      <img src={urlFor(image)} alt="Project Image" className="rounded-xl" />
      <div className="flex justify-center w-full pt-4">
        <a href={codeUrl} target="_blank" className="px-2">
          <FaGithub size={36}></FaGithub>
        </a>
        <a href={previewUrl} target="_blank" className="px-2">
          <FaLink size={36}></FaLink>
        </a>
      </div>
    </div>
  )
}

export default Project
