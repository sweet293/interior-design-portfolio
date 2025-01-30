import React, {useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from "aos"
import "aos/dist/aos.css";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Testimonials from './components/Testimonials/Testimonials';
import ProjectDetailPage from './components/Services/ProjectDetailPage';
import BlogDetailPage from './components/Blog/BlogDetailPage';



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


  return (
    <Router>
      <div className="bg-brandDark text-white">
        <Navbar />

        <Routes>
          {/* Main Page with all sections */}
          <Route 
            path="/" 
            element={
              <>
                <Home />
                <Services />
                <Blog />
                <Testimonials />
                <Footer />
              </>
            } 
          />

          {/* Dynamic Project Detail Page */}
          <Route path="/products/:id" element={<ProjectDetailPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App
