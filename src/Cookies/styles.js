import styled from "@emotion/styled";
import { breakpoints as bp } from "../Styles/breakpoints";

const Container = styled.div `
  width: 100%;
  height: auto;
  padding: 12px 20px;
  position: absolute;
  bottom: 0;
  background-color: var(--white);

  ${bp.desktop} {
    height: 80px;
    padding: 20px;
    display: flex;
    justify-content: center;
  }
`

const Warning = styled.p `
  text-align: center;
  font-size: 1.2rem;
  color: var(--black);
`

const ButtonsContainer = styled.div `
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;

  ${bp.desktop} {
    margin: 0 12px;
    width: auto;
  }
`

const AcceptButton = styled.button `
  width: 150px;
  height: 40px;
  margin: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  border-radius: 4px;
  background-color: var(--blue);
  border: none;
  color: var(--light-white);

  ${bp.desktop} {
    margin: 0 12px;
  }
`

const KnowMoreButton = styled(AcceptButton) `
  background-color: var(--white);
  border: 1px solid var(--blue);
  color: var(--blue);
`

const PolicyAdvice = styled.span `
  text-align: center;
  display: block;
  font-size: 1.2rem;
  color: var(--black);
`
export { Container, Warning, ButtonsContainer,AcceptButton, KnowMoreButton, PolicyAdvice}