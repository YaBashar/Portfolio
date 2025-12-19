import './App.css'
import ProjectGallery from './ProjectGallery'
import About from './About'

function App() {

  return (
    <>
        <div className='flex flex-col grow justify-center items-center h-full w-full'>    
          <About />
          <ProjectGallery />
        </div>
    </>
  )
}

export default App