import React from "react";
import { Container, Title, Email, ContainerItems,ContainerItem, TitleItem, Item, ContainerIcons, LikedinIcon, FacebookIcon, InstagramIcon, TwitterIcon, OtherLinkContainer,OtherLink, Divider,Copyright, OtherLinksContainerDesktop } from './styles'

const info = [
  {
    title: 'Community',
    items: ['Incubator/Accelerator', 'Corporations', 'Startups', 'Investor', 'Open Challenges']
  },
  {
    title: 'Modules',
    items: ['Coaching Module', 'Data Module', 'ecosystem Module', 'LMS Module', 'Events', 'Application Proccessing']
  },
  {
    title: 'Company',
    items: ['About Us', 'Carrers', 'Blog', 'Pricing', 'Contact Us']
  },
  {
    title: 'Documentation',
    items: ['Documentation', 'Release Log', 'FAQ', 'Legal']
  }
]


const Footer = () => {
  return(
    <Container>
      <Title>Join our growing communty<br/><span>Sign up for news and updates about Accelerator App</span></Title>
      <Email placeholder="Your email" />
      <ContainerItems>
      {
        info.map(item => (
          <ContainerItem>
            <TitleItem>{item.title}</TitleItem>
            {item.items.map(el => (
              <Item>{el}</Item>
            ))}
          </ContainerItem>
        ))
      }
      <ContainerIcons>
        <TitleItem>Follow</TitleItem>
        <LikedinIcon/>
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </ContainerIcons>
      </ContainerItems>
      <OtherLinkContainer>
        <OtherLink>Privacy</OtherLink>
        <OtherLink>Cookies</OtherLink>
      </OtherLinkContainer>
      <Divider/>
      <OtherLinkContainer second={true}>
        <OtherLink>Terms Of Use</OtherLink>
        <OtherLink>DPA</OtherLink>
        <OtherLink>Subproccesors</OtherLink>
      </OtherLinkContainer>
      <OtherLinksContainerDesktop>
        <OtherLink>Privacy</OtherLink>
        <OtherLink>Cookies</OtherLink>
        <OtherLink>Terms Of Use</OtherLink>
        <OtherLink>DPA</OtherLink>
        <OtherLink>Subproccesors</OtherLink>
      </OtherLinksContainerDesktop>
      <Copyright>
        <h3>Copyright © 2022 AcceleratorApp All Rights Reserved</h3>
        <span/>
      </Copyright>
    </Container>
  )
}

export default Footer