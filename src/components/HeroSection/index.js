import React, {useState} from 'react'
import Video from '../../vidoes/video.mp4'
import {Button} from'../ButtonElement'
import { HeroContainer,
   HeroBg,
   VideoBg,
   HeroContent,
   HeroH1,
   HeroP,
   HeroP1,
   HeroBtnWrapper,
   ArrowForward,
   ArrowRight } from './HeroElements'
//Firstpage main backgroup with video
const HeroSection = () => {
  const {hover, setHover} = useState(false);

  const onHover = () =>{
    setHover(!hover)
  }
  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Learning one step at a time.</HeroH1>
          <HeroP>The most important part of education is proper training in the nursery. - Plato</HeroP>
          <HeroP1>this is a text config</HeroP1>
          <HeroBtnWrapper>
            <Button to="signup" 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true} 
            duration={500} 
            spy={true} 
            exact='true' 
            offset={-80}>
              Get started {hover ? <ArrowForward /> : <ArrowRight/>}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>

    
  )
}

export default HeroSection
