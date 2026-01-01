import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router'



const ProjectCard = ({ title, description, image, backgroundColor, onClickLink, externalLink }) => {

  const navigate = useNavigate();  

  const handleClick = () => {
    if (externalLink) {
      window.open(externalLink, '_blank', 'noopener,noreferrer')
    } else if (onClickLink) {
      navigate(onClickLink)
    }
  }

  return (
    <div onClick={handleClick} className='bg-white shadow-lg w-[90vw] h-115 p-2 rounded-3xl cursor-pointer hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.0] active:scale-[0.98] duration-300 ease-in-out'>
       
       <div className='h-fit w-full flex justify-center rounded-2xl'
        style={{backgroundColor: backgroundColor}}>
        <img src={image} alt={title} className='w-100 my-2 rounded-2xl'/>
       </div>
       
        <h1 className='ml-4 mt-4 w-fit text-2xl font-bold '>{title} 

          <span className='cursor-pointer'>
            <ArrowTopRightOnSquareIcon className='inline w-5 h-5 ml-2'/>
          </span>

        </h1>
        <p className='ml-4 mt-2 w-fit text-lg text-wrap'>{description}</p>
        <div className='ml-4 mt-2 text-lg w-fit px-3 py-0.5 text-center rounded-2xl' style ={{backgroundColor: backgroundColor}}>UI / UX</div>

    </div>
  )
}

export default ProjectCard