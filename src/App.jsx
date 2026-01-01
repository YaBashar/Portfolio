import './App.css'
import LandingPage from './LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RetireWell from './RetireWell/RetireWell'
import Free2Meet from './Free2Meet'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/Portfolio/" element={<LandingPage/>}></Route>
        <Route path = "/Portfolio/RetireWell" element={<RetireWell/>}></Route>
        <Route path = "/Portfolio/Free2Meet" element={<Free2Meet/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App