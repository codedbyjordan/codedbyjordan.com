import React from 'react'
import useProjects from '../../hooks/useProjects'
import Project from './Project'
import ProjectLoading from './ProjectLoading'

const ProjectList: React.FC = () => {
  const { projects, isLoading } = useProjects()

  return (
    <div className="pt-24">
      <h1 className="font-semibold text-4xl pb-2">Projects</h1>
      <p>A few things I've built</p>
      <div className="pt-4">
        {isLoading ? (
          <ProjectLoading></ProjectLoading>
        ) : (
          projects.map((project, i) => (
            <div className="animate-fade">
              <Project
                key={i}
                name={project.name}
                description={project.description}
                previewUrl={project.preview_url}
                codeUrl={project.code_url}
                image={project.image?.asset?._ref}
              ></Project>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ProjectList
