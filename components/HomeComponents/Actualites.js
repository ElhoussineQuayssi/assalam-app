import React from 'react'
import ActualiteItem from '../ActualiteItem'
import { ActualitesData } from '@/Constants'

const Actualites = () => {
  return (
    <div className='relative flex gap-6 flex-col items-center justify-center h-fit top-[-150px] mt-3 w-5/6 mx-auto'>
      <h1>Titre</h1>
      <h3>Description</h3>
      <div className='grid grid-cols-3 gap-4'>
        {ActualitesData.slice(0,6).map(
          (item,index) => {
            return (
              <ActualiteItem key={index} title={item.title} description={item.description} image={item.image}/>
            )
          }
          
        )}
      </div>
      <button className='bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Voir plus</button>
    </div>
  )
}

export default Actualites
