import React from "react";
import Cookies from "../../Cookies";
import { Container, Looper, Title, Description, ButtonSchedule, StaticsContainer,StaticsImageHeader, StaticsImage1, StaticsImage2, StaticsImage3, StaticsImage4, ButtonVideo} from './styles'

const Join = () => {
  return (
    <Container>
      <Looper/>
      <Title>To faster your innovation potential</Title>
      <Description>AcceleratorApp Innovation Community — Tools and community to facilitate innovation between all members of our community</Description>
      <ButtonSchedule>Schedule a Demo</ButtonSchedule>
      <StaticsContainer>
        <div/>
        <StaticsImageHeader/>
        <StaticsImage1/>
        <StaticsImage2/>
        <StaticsImage3/>
        <StaticsImage4/>
        <ButtonVideo><span/>Watch video</ButtonVideo>
      </StaticsContainer>
      <Cookies/>
    </Container>
  )
}

export default Join