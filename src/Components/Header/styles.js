import styled from "@emotion/styled";
import logo from '../../images/logo.png'
import iconMenu from '../../images/menu.png'

const Container = styled.div `
  width: 100%;
  height: auto;
  padding: 8px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(110.96deg, #206ECF 0.72%, #71B0FF 100%);
`

const Logo = styled.span `
  width: 54px;
  height: 54px;
  display: flex;
  background-image: url(${logo});
  background-position: center;
  background-size: cover;
`

const IconMenu = styled.span `
  width: 24px;
  height: 24px;
  display: flex;
  background-image: url(${iconMenu});
  background-position: center;
  background-size: cover;
`

export { Container, Logo, IconMenu}