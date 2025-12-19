import React from 'react'
import External from './External'

const About = () => {
  return (

    <>
    <div className='mt-10 flex flex-col w-250 h-100 max-[639px]:h-auto max-[639px]:w-[350px] rounded-3xl bg-white shadow-xl' >

      <div>
        <div>
            <h1 className='mt-5 ml-10 font-extrabold text-4xl'>Mubashir Hussain</h1>
            <p className='mt-2 ml-10 font-semibold text-2xl'>Full Stack Developer</p>
            <p className='mt-2 ml-10 font-semibold text-2xl'>Passionate about Cyber Security</p>
            <External />
        </div>
      </div>

      <hr className='mt-5'/>

      <div className='mx-10 mt-5 mb-10'>
        <h1 className='mb-2 font-bold text-3xl'>About Me</h1>
        <p className='text-wrap font-medium text-lg'>I'm a Full Stack Developer with a strong passion for cybersecurity. 
          I love building secure, scalable applications that solve real-world problems. 
          My experience spans across modern web technologies, and 
          I'm always exploring the intersection of development and security best practices.</p>
      </div>
    </div>
    </>
  )
}

export default About