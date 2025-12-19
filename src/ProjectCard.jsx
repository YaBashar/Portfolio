import React from 'react'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'


const ProjectCard = ({ title, description }) => {
  return (
    <div className='bg-white shadow-lg ml-4 mb-10 w-[325px] h-90 rounded-3xl cursor-pointer hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.0] active:scale-[0.98] duration-300 ease-out'>
        <h1 className='ml-4 mt-4 w-fit text-2xl '>{title} 

          <span className='cursor-pointer'>
            <ArrowTopRightOnSquareIcon className='inline w-5 h-5 ml-2'/>
          </span>

        </h1>
        <p className='ml-4 mt-2 w-fit text-lg text-wrap'>{description}</p>

    </div>
  )
}

export default ProjectCard