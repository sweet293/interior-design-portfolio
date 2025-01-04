import React, {useEffect} from 'react'
import AOS from "aos"
import "aos/dist/aos.css";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';


const App = () => {
  useEffect(() => {
    AOS.init(
      {
        offset: 100,
        duration: 700,
        easing: "ease-in",
        delay: 100,
      }
    )
  })

  return <div className='kkk'>
    <Navbar />
    <Home />
    <Services/>
    < Footer />

    {/*<Menu/>
    <Contact/> */}

  </div>
  
}

export default App
