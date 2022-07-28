import React from "react";
import { Container, Warning, ButtonsContainer,AcceptButton, KnowMoreButton, PolicyAdvice} from './styles'

const Cookies = () => {
  return (
    <Container>
      <Warning>By using this site on the AcceleratorApp network, you agree with our use of cookies.</Warning>
      <ButtonsContainer>
        <AcceptButton>Accept cookies</AcceptButton>
        <KnowMoreButton>Want to know more?</KnowMoreButton>
      </ButtonsContainer>
      <PolicyAdvice>Read our Cookie Policy</PolicyAdvice>
    </Container>
  )
}

export default Cookies