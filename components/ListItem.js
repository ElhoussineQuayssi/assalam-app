import React from 'react'

const ListItem = ({text}) => {
  return (
    <div className='p-2 text-xl font-bold border border-1 hover:border-b-2 hover:border-b-black cursor-pointer hover:-translate-x-2 duration-700'>
      {text}
    </div>
  )
}

export default ListItem
