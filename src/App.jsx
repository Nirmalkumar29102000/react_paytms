import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import Navbar from './header/Navbar'
import Sectionmain from './section/Sectionmain'
import Footer from './footer/footer'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Sectionrecharge from './section/Sectionrecharge'
import Sectiondthrecharge from './section/Sectiondthrecharge'
import Sectionfastag from './section/Sectionfastag'
import Sectionelectricity from './section/Sectionelectricity'
import Sectionloan from './section/Sectionloan'
import Sectionsignin from './section/Sectionsignin'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path = "/" element = {<Sectionmain/>}/>
       <Route path = "recharge" element = {<Sectionrecharge/>}/>
       <Route path = "dth" element = {<Sectiondthrecharge/>}/>
       <Route path = "fastag" element = {<Sectionfastag/>}/>
       <Route path = "electricity" element = {<Sectionelectricity/>}/>
       <Route path = "loan" element = {<Sectionloan/>}/>
       <Route path = "signin" element = {<Sectionsignin/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
