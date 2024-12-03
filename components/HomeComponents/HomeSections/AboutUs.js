import { ListAboutUs } from '@/Constants'
import React from 'react'
import ListItem from '../ListItem'

const AboutUs = () => {
  return (
    <div className=" bg-[url('/bg1.jpg')] border-black bg-red-600 w-full h-fit justify-center items-center flex flex-col-reverse md:flex-row gap-8 p-5 md:p-28 relative top-[-150px]">
      <div className='flex-1 gap-4 flex flex-col'>
        <div className='text-3xl font-bold'>
          ABOUT US
        </div>
        <div>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quia. Quaerat, voluptas, doloremque, quos, temporibus, doloribus. Quidem, consequuntur, velit, fugiat, voluptatem, molestiae, labore, quibusdam, ipsa, error, asperiores, quod, odit, et, accusantium, eaque, delectus, nihil, fugit, sint, rerum, omnis, molestias, sed, quis, aspernatur, beatae, magnam, quam, cupiditate, veniam, repellat, sunt, aut, in, harum, corporis, nemo, excepturi, sint, ratione, quae, voluptate, laboriosam, deleniti, ea, minus, itaque, aliquid, dolores, molestias.
        </div>
        <div className='flex flex-col gap-2'>
          {
            ListAboutUs.map((item, index) => {
              return (
                <ListItem text={item} key={index} />
              )
            }
            )
          }
        </div>
      </div>
      <div className='flex-1 w-full h-80 flex justify-center items-center'>
        <iframe  className='aspect-square w-full h-full rounded-tl-3xl rounded-br-3xl' src='https://www.youtube.com/embed/KrWPaJ-VjFo' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen></iframe>
      </div>
    </div >
  )
}

export default AboutUs
