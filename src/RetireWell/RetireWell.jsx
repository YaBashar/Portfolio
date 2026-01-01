import React from 'react'
import HeroSection from './HeroSection'
import ProjectOverview from './ProjectOverview'
import Problem from './Problem'
import Research from './Research'
import Solution from './Solution'
import RetireWellImage from '../assets/RetireWell.png'
import DesignDecisions from './DesignDecisions'
import DesignProcess from './DesignProcess'
import Impact from './Impact'

const RetireWell = () => {
  return (
    <>
      <div className='flex flex-col items-center '>
        <div className='flex justify-center w-full bg-pinkish'>
            <img src={RetireWellImage} className='w-100  my-3 rounded-2xl'/>
        </div>

        <div className='w-[90vw]'>
         <HeroSection/>
         <ProjectOverview/>
         <Problem/>
         <Research/>
         <Solution/>
         <DesignDecisions/>
         <DesignProcess/>
         <Impact/>
        </div>
      </div>
    </>
  )
}

export default RetireWell