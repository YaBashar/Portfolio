import React from 'react'
import Feature1 from '../assets/Feature1.svg'
import Feature2 from '../assets/Feature2.svg'
import Feature3 from '../assets/Feature3.svg'
import Feature4 from '../assets/Feature4.svg'

const Solution = () => {
  return (
    <div className="mt-10 bg-gray-50 p-4 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-2">The Solution</h2>
        
        <p className="text-xl mb-6">
            RetireWell is a person-centered app that helps users aged 55+ transition into retirement by discovering community activities.
        </p>

        <img src={Feature1} className='rounded-2xl w-[80vw]'/>
        <img src={Feature2} className='rounded-2xl w-[80vw]'/>
        <img src={Feature3} className='rounded-2xl w-[80vw]'/>
        <img src={Feature4} className='rounded-2xl w-[80vw]'/>
    
    </div>
  )
}

export default Solution