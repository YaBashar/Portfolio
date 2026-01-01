import React from 'react'
import Free2MeetImage from './assets/Free2Meet.png'

const Free2Meet = () => {
  return (
    <div className='flex flex-col items-center '>
        <div className='flex justify-center w-full bg-pinkish'>
            <img src={Free2MeetImage} className='w-100  my-3 rounded-2xl'/>
        </div>

        <div className='w-[90vw]'>
            <h1 className='text-3xl font-bold my-5'>Free2Meet - Currently In Progress</h1>
        </div>
      </div>
  )
}

export default Free2Meet