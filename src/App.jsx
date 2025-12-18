import './App.css'

function App() {

  return (
    <>
      

        <div className='h-[50px] w-full bg-pinkish'></div>

        <div className='flex flex-col grow justify-center items-center h-full w-full'>
          
          <div className='mt-10 flex flex-col w-[1000px] h-[250px] rounded-3xl  bg-white shadow-lg'>
            <h1 className='mt-10 ml-10 font-bold text-4xl'>Mubashir Hussain</h1>
            <p className='mt-2 ml-10 font-semibold text-2xl'>Full Stack Developer</p>
            <p className='mt-2 ml-10 font-semibold text-2xl'>Passionate about Cyber Security</p>
          </div>

          <h1 className='text-center w-full max-w-[1040px] mt-11 mb-2 text-3xl font-bold px-4 md:text-left md:ml-12 md:px-0'>Projects</h1>

          <div className='flex flex-row flex-wrap gap-5 justify-center'>
            <div className='bg-white shadow-lg ml-4 w-[325px] h-[400px] rounded-3xl'></div>
            <div className='bg-white shadow-lg w-[325px] h-[400px] rounded-3xl'></div>
            <div className='bg-white shadow-lg w-[325px] h-[400px] rounded-3xl'></div>
          </div>

          <div className='mt-6 h-[50px] w-full bg-pinkish'></div>

        </div>
        

    </>
  )
}

export default App