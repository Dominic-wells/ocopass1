import React,{useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import LearnSection from '../components/LearnSection'

import { 
  home0bjOne,
  home0bjTwo,
  home0bjThree,
  home0bjFour,
   } from '../components/LearnSection/Data'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
       setIsOpen(!isOpen)
    };
//Add data points below via sections for eg
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <HeroSection />
    <LearnSection {...home0bjOne} />
    <LearnSection {...home0bjTwo} />
    <Services />
    {/* <SignUp /> */}
    
    <LearnSection {...home0bjThree} />
    <LearnSection {...home0bjFour} />
    <Footer />

    </>
  )
}

export default Home