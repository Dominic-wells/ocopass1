import React from 'react'
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-6.svg'


import { ServicesContainer,
ServicesWrapper,
ServicesCard,
ServicesIcon,
ServicesH1,
ServicesH2,
ServicesP,
 } from './servicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Reduce Expeenses</ServicesH2>
                <ServicesP>We help Reduce your fees</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Virtual Offices</ServicesH2>
                <ServicesP>offices assces</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Premium Benfits</ServicesH2>
                <ServicesP>Unlock our cashbackcard</ServicesP>
            </ServicesCard>
        </ServicesWrapper>

    </ServicesContainer>
  )
}

export default Services