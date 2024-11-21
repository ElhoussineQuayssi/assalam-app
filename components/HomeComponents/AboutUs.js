import { ListAboutUs } from '@/Constants'
import React from 'react'
import ListItem from '../ListItem'

const AboutUs = () => {
  return (
    <div className='w-full h-screen justify-center items-center flex flex-row gap-4 p-28 relative top-[-150px]'>
      <div className='flex-1 gap-4 flex flex-col'>
        <div className='text-3xl font-bold'>
          ABOUT US
        </div>
        <div>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quia. Quaerat, voluptas, doloremque, quos, temporibus, doloribus. Quidem, consequuntur, velit, fugiat, voluptatem, molestiae, labore, quibusdam, ipsa, error, asperiores, quod, odit, et, accusantium, eaque, delectus, nihil, fugit, sint, rerum, omnis, molestias, sed, quis, aspernatur, beatae, magnam, quam, cupiditate, veniam, repellat, sunt, aut, in, harum, corporis, nemo, excepturi, sint, ratione, quae, voluptate, laboriosam, deleniti, ea, minus, itaque, aliquid, dolores, molestias.
        </div>
        <div className='flex flex-col gap-2'>
          {
            ListAboutUs.map((item,index) => {
              return(
                <ListItem text={item} key={index}/>
              )
            }
            )
          }
        </div>
      </div>
      <div className='flex-1 bg-green-500'></div>
    </div>
  )
}

export default AboutUs
