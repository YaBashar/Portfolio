import ProjectCard from './ProjectCard.jsx'


const ProjectGallery = () => {
  return (
   <>
    
    <div className='flex flex-col items-center'>

        <div className='w-[90vw] mt-9 mb-2 top-10'>
            <h1 className='text-3xl font-bold'>Projects</h1>
        </div>

        <div className='w-[90vw] flex flex-wrap justify-start content-start items-start gap-10 mb-10'>
            <ProjectCard 
                title="Retire Well"
                description="An application aimed at reducing social isolation for individuals aged 50+ transitioning into retirement"
                image="src/assets/RetireWell.png"
            />
            <ProjectCard 
                title="Free2Meet"
                description="Smart event scheduling platform that helps with planning and organising personal meetups"
            />
            <ProjectCard 
                title="Lectrify"
                description="Application that uses voice to text input to improve lecture engagement through real time interactive questions answered anonymously"
            />
        </div>

    </div>
  </>
  )
}

export default ProjectGallery