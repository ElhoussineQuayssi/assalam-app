import { ProjectsEx } from '@/Constants'
import React from 'react'
import Card from '@/components/HomeComponents/Card'
import { AiFillAccountBook } from 'react-icons/ai'

function Projects()  {
  return (
    <div className='w-full h-fit justify-center items-center flex flex-col gap-4 p-4 md:p-28 relative top-[-150px]'>
      <h3 className='text-xl'>Nos Projets</h3>
      <h1 className='text-3xl text-center'>Les Grands projets de notre fondation</h1>
      <div className='grid grid-cols-3 gap-4'>
        {
          ProjectsEx.map(
            (projet,index) => {
              return (
                <Card icon={projet.image} description={projet.description} key={index}/>
              )
            }
          )
        }
      </div>
    </div>
  )
}

export default Projects
