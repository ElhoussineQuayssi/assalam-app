import Image from 'next/image'
import React from 'react'

const ActualiteItem = ({title, description, image}) => {
  return (
    <div className='bg-slate-300 rounded-lg p-4 shadow-md flex flex-col justify-center items-center'>
      <div className='flex-1'>
        <Image src={image} alt='image' width={400} height={400}/>
      </div>
      <div className='flex-1 w-full flex flex-col justify-around items-center'>
        <h1 className='text-2xl font-bold w-full text-center'>{title}</h1>
        <p className='text-xl w-full text-center m-2'>{description}</p>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>En savoir plus</button>
      </div>
    </div>
  )
}

export default ActualiteItem
