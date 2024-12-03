import { ProjectsEx } from '@/Constants'
import React from 'react'
import ProjectCard from '../ProjectCard'

const Projects = () => {
  return (
    <div className='w-full h-fit justify-center items-center flex flex-col gap-4 p-4 md:p-28 relative top-[-150px]'>
      <h3 className='text-xl'>Nos Projets</h3>
      <h1 className='text-3xl text-center'>Les Grands projets de notre fondation</h1>
      <div className='flex flex-col md:flex-row gap-4'>
        {
          ProjectsEx.map(
            (projet,index) => {
              return (
                <ProjectCard data={projet} key={index}/>
              )
            }
          )
        }
      </div>
    </div>
  )
}

export default Projects
