import React, {useEffect} from 'react'
import AOS from "aos"
import "aos/dist/aos.css";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import About from './components/About/About';


const App = () => {
  useEffect(() => {
    AOS.init(
      {
        offset: 100,
        duration: 700,
        easing: "ease-in",
        delay: 50,
      }
    )
  })

  return <div className='bg-brandDark text-white'>
    <Navbar />
    <Home />
    <Services/>
    <About />
    <Footer />
    
    {/*<Menu/>
    <Contact/> */}

  </div>
  
}

export default App
