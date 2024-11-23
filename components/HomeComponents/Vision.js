import { CardsDescription } from '@/Constants'
import React from 'react'
import Card from '../Card'

const Vision = () => {
  return (
    <div className=' w-full h-1/3 justify-center items-center flex flex-col gap-6 p-4 relative top-[-150px]'>
      <h1 className='text-4xl font-bold text-neutral-content'>Notre Vision</h1>
      <div className="w-5/6 h-1/2 p-3 rounded-md gap-2 flex md:flex-row flex-col justify-center items-center bg-slate-300">
        {
          CardsDescription.map((card, index) => {
            return(
              <Card key={index} icon={card.icon} description={card.description}/>
            )
        })
        }
      </div>
    </div>
  )
}

export default Vision
