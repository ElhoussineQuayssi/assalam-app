import React from 'react'

const Card = ({icon, description}) => {
  return (
    <div className='p-2 flex-1 h-64 hover:-translate-y-4 transition-transform duration-500 bg-slate-200 rounded-md flex flex-col justify-evenly items-center shadow-lg'>
      <div className='text-2xl flex-1 flex justify-center items-center'>{icon}</div>
      <h1 className='text-center text-sm flex-1'>{description}</h1>
    </div>
  )
}

export default Card
