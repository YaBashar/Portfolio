import React from 'react'

const External = () => {
  return (
    <div className='flex flex-row gap-5 ml-10'>
          <a 
            href="https://www.linkedin.com/in/mubashir-muhammad-hussain/ "
            target="_blank"
            rel = "noopener noreferrer" 
            className='text-center btn btn-hover'
          >
            <p className='mt-1'>LinkedIn</p>
          
          </a>

          <a 
            href="https://github.com/YaBashar "
            target="_blank"
            rel = "noopener noreferrer" 
            className='text-center btn btn-hover'
          >
            <p className='mt-1'>Github</p>
          
          </a>
    </div>
  )
}

export default External 