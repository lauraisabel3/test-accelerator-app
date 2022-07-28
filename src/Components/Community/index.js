import { css } from "@emotion/react"
import React from "react";
import { Container, IconsContainer, IncubatorIcon, StartupIcon, CorporationIcon, ChallengeIcon, InvestorIcon, Title, ContainerCart, TitleCart, DescriptionCart, TitleFeatures, Features, ButtonCart} from './styles'
import incubatorIcon from '../../images/incubator-2.png'
import corporationsIcon from '../../images/corporations-2.png'
import investorIcon from '../../images/investor-2.png'
import startupIcon from '../../images/startup-2.png'
import challengeIcon from '../../images/challenge-2.png'

const Community = () => {
  return(
    <Container>
      <IconsContainer>
        <IncubatorIcon/>
        <StartupIcon/>
        <CorporationIcon/>
        <ChallengeIcon/>
        <InvestorIcon/>
      </IconsContainer>
      <Title>Lorem ipsum dolor sit amet<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></Title>
      <ContainerCart>
        <TitleCart>
          <span css={css`background-image:url(${incubatorIcon});`}/>
          Incubator/Accelerator
        </TitleCart>
        <DescriptionCart>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. <br/><br/>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</DescriptionCart>
        <TitleFeatures>Popular Features</TitleFeatures>
        <Features>Lorem ipsum dolor sit </Features>
        <Features>Lorem ipsum dolor sit </Features>
        <Features>Lorem ipsum dolor sit </Features>
        <ButtonCart>Get Started</ButtonCart>
      </ContainerCart>
      <ContainerCart>
        <TitleCart>
          <span css={css`background-image:url(${corporationsIcon});`}/>
          Corporations
        </TitleCart>
        <DescriptionCart>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. <br/><br/>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</DescriptionCart>
        <TitleFeatures>Popular Features</TitleFeatures>
        <Features>Lorem ipsum dolor sit </Features>
        <Features>Lorem ipsum dolor sit </Features>
        <Features>Lorem ipsum dolor sit </Features>
        <ButtonCart>Get Started</ButtonCart>
      </ContainerCart>
      <ContainerCart>
        <TitleCart>
          <span css={css`background-image:url(${investorIcon});`}/>
          Investor
        </TitleCart>
        <DescriptionCart>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. <br/><br/>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</DescriptionCart>
        <TitleFeatures>Popular Features</TitleFeatures>
        <Features>Lorem ipsum dolor sit </Features>
        <Features>Lorem ipsum dolor sit </Features>
        <Features>Lorem ipsum dolor sit </Features>
        <ButtonCart>Get Started</ButtonCart>
      </ContainerCart>
      <ContainerCart>
        <TitleCart>
          <span css={css`background-image:url(${startupIcon});`}/>
          Startup
        </TitleCart>
        <DescriptionCart>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. <br/><br/>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</DescriptionCart>
        <TitleFeatures>Popular Features</TitleFeatures>
        <Features>Lorem ipsum dolor sit </Features>
        <Features>Lorem ipsum dolor sit </Features>
        <Features>Lorem ipsum dolor sit </Features>
        <ButtonCart>Get Started</ButtonCart>
      </ContainerCart>
      <ContainerCart>
        <TitleCart>
          <span css={css`background-image:url(${challengeIcon});`}/>
          Open Challenge
        </TitleCart>
        <DescriptionCart>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. <br/><br/>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</DescriptionCart>
        <TitleFeatures>Popular Features</TitleFeatures>
        <Features>Lorem ipsum dolor sit </Features>
        <Features>Lorem ipsum dolor sit </Features>
        <Features>Lorem ipsum dolor sit </Features>
        <ButtonCart>Get Started</ButtonCart>
      </ContainerCart>
    </Container>
  )
}

export default Community