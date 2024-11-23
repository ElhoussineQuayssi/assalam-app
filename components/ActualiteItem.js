import Image from 'next/image'
import React from 'react'

const ActualiteItem = ({title, description, image}) => {
  return (
    <div className='bg-slate-200 gap-3 rounded-lg p-4 shadow-md flex flex-col justify-center items-center hover:transition-all duration-700 hover:-translate-y-2'>
      <div className='flex-1'>
        <Image src={image} alt='image' width={400} height={400}/>
      </div>
      <div className='flex-1 w-full flex flex-col justify-around items-center gap-2'>
        <h1 className='text-2xl font-bold w-full text-center'>{title}</h1>
        <p className='text-xl w-full text-center m-2'>{description}</p>
        <button className=' hover:bg-blue-700 border hover:text-white transition-all duration-700 border-blue-700 text-blue-600 font-bold py-2 px-4 rounded w-full'>En savoir plus</button>
      </div>
    </div>
  )
}

export default ActualiteItem
