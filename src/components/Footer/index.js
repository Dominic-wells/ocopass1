import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';

import { FooterContainer,
 FooterWrap,
 FooterLinksContainer,
 FooterLinksWrapper,
 FooterLinkItems,
 FooterLinkTitle,
 FooterLink,
 SocialMedia,
 SocialMediaWrap,
 SocialLogo,
 WebisteRights,
 SocialIcons,
 SocialIconLink
 } from './FooterElements'

const Footer = () => {
  const toggleHome = () =>{
    scroll.scrollToTop()
};


  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
              <FooterLinksWrapper>
               <FooterLinkItems>
                <FooterLinkTitle>About US </FooterLinkTitle>
                <FooterLink to="/SiginIn">How it works</FooterLink>
                <FooterLink to="/SiginIn">Testimonials</FooterLink>
                <FooterLink to="/SiginIn">Careers</FooterLink>
                <FooterLink to="/SiginIn">Investors</FooterLink>
                <FooterLink to="/SiginIn">Terms of service</FooterLink>
               </FooterLinkItems>  
               <FooterLinkItems>
                <FooterLinkTitle>About US </FooterLinkTitle>
                <FooterLink to="/SiginIn">How it works</FooterLink>
                <FooterLink to="/SiginIn">Testimonials</FooterLink>
                <FooterLink to="/SiginIn">Careers</FooterLink>
                <FooterLink to="/SiginIn">Investors</FooterLink>
                <FooterLink to="/SiginIn">Terms of service</FooterLink>
               </FooterLinkItems>  
             </FooterLinksWrapper> 
             <FooterLinksWrapper>
               <FooterLinkItems>
                <FooterLinkTitle>About US </FooterLinkTitle>
                <FooterLink to="/SiginIn">How it works</FooterLink>
                <FooterLink to="/SiginIn">Testimonials</FooterLink>
                <FooterLink to="/SiginIn">Careers</FooterLink>
                <FooterLink to="/SiginIn">Investors</FooterLink>
                <FooterLink to="/SiginIn">Terms of service</FooterLink>
               </FooterLinkItems>  
               <FooterLinkItems>
                <FooterLinkTitle>Social Media </FooterLinkTitle> 
                <FooterLink to="/SiginIn">Instagram</FooterLink>
                <FooterLink to="/SiginIn">Facebook</FooterLink>
                <FooterLink to="/SiginIn">Youtube</FooterLink>
                <FooterLink to="/SiginIn">Twiter</FooterLink>
                <FooterLink to="/SiginIn">Ticktok</FooterLink>
               </FooterLinkItems>  
             </FooterLinksWrapper> 
         </FooterLinksContainer>
           <SocialMedia>
               <SocialMediaWrap>
               <SocialLogo to='/' onClick={toggleHome}>Ocopass</SocialLogo>
               <WebisteRights>
                 Ocopass © {new Date().getFullYear()} All rights reserved
                 </WebisteRights>
                 <SocialIcons>
                 <SocialIconLink herf="/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                 <SocialIconLink herf="/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                 <SocialIconLink
              href={
                '//www.youtube.com/'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
                  <SocialIconLink herf="/" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
                  <SocialIconLink herf="/" target="_blank" aria-label="Tiktok"><FaTiktok /></SocialIconLink>
                 </SocialIcons>
               </SocialMediaWrap>
           </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer