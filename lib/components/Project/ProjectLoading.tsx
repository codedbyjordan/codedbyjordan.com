import React from 'react'

const ProjectLoading: React.FC = () => {
  return (
    <div className="text-center py-14 flex flex-col items-center justify-center">
      <div className="w-48 h-5 rounded-lg my-2 bg-gray-100 animate-pulseFast"></div>
      <div className="w-full h-3 rounded-lg my-2 bg-gray-100 animate-pulseFast"></div>
      <div className="w-full h-64 rounded-lg my-2 bg-gray-100 animate-pulseFast"></div>
    </div>
  )
}

export default ProjectLoading
