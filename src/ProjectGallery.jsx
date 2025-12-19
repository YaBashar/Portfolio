import ProjectCard from './ProjectCard.jsx'


const ProjectGallery = () => {
  return (
   <>
    <h1 className='text-center w-full max-w-260 mt-11 mb-2 text-3xl font-bold px-4 md:text-left md:ml-12 md:px-0'>Projects</h1>
    <div className='flex flex-row flex-wrap gap-5 justify-center'>
        <ProjectCard 
            title="Retire Well"
            description="An application aimed at reducing social isolation for individuals aged 50+ transitioning into retirement"
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
  </>
  )
}

export default ProjectGallery