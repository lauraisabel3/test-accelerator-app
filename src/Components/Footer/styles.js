import styled from "@emotion/styled";
import { breakpoints as bp } from "../../Styles/breakpoints";
import { Link } from "gatsby";
import arrow from '../../images/arrow.png'
import linkedin from'../../images/linkedin.png'
import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'
import twitter from '../../images/twitter.png'
import worldIcon from '../../images/world.png'

const Container = styled.div `
  width: 100%;
  height: auto;
  padding: 40px 0 12px 12px;
  position: absolute;
  bottom: 0;
  background: var(--black);

  ${bp.desktop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const Title = styled.h1 `
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: var(--white);

  span {
    font-size: 1.2rem;
    font-weight: 300;
  }

  ${bp.desktop} {
    font-size: 2.4rem;

    span {
      margin-top: 40px;
    }
  }
`

const Email = styled.input `
  width: 240px;
  height: 32px;
  margin: 12px auto;
  padding: 4px;
  display: flex;
  background-color: var(--black);
  border: none;
  border-bottom: 1px solid var(--grey);
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 16px;

  :focus {
    outline: 1px solid var(--grey);
  }

  ${bp.desktop} {
    width: 442px;
    padding-bottom: 40px;
  }
`

const ContainerItems = styled.div `
  width: 100%;
  height: auto;
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  ${bp.desktop} {
    width: auto;
    max-width: 1132px;
    margin: 40px auto 60px auto;
    padding-bottom: 40px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--grey);
  }
`

const ContainerItem = styled.div`
  width: 150px;
  height: auto;
  display: inline-flex;
  flex-direction: column;

  ${bp.desktop} {
    margin: 0 20px;
  }
`

const TitleItem = styled.h3 ` 
  width: 100%;
  margin-bottom: 20px;
  padding-bottom: 4px;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--white);
  border-bottom: 1px solid var(--grey);
`

const Item = styled(Link) `
  margin: 4px 0;
  font-size: 1.2rem;
  color: var(--grey);
`

const ContainerIcons = styled.div `
  width: 150px;
  height: auto;

  ${bp.desktop} {
    display: flex;
    flex-direction: column;
  }
`

const LikedinIcon = styled.span `
  width: 26px;
  height: 26px;
  margin: 0 10px 0 0;
  display: inline-flex;
  border: 1px solid var(--grey);
  border-radius: 2px;
  background-image: url(${linkedin});
  background-position: center;
  background-size: 14px;
  background-repeat: no-repeat;

  ${bp.desktop} {
    margin: 0 0 12px 0;
  }
`

const FacebookIcon = styled(LikedinIcon) `
  background-size: 8px;
  background-image: url(${facebook});
`

const InstagramIcon = styled(LikedinIcon) `
  background-image: url(${instagram});
`

const TwitterIcon = styled(LikedinIcon) `
  background-image: url(${twitter});
`

const OtherLinkContainer = styled.div `
  width: 300px;
  margin: ${props => props.second ? '8px auto 70px auto' : '8px auto'};
  display: flex;
  justify-content: center;

  ${bp.desktop}
  {
    display: none;
  }
`
const OtherLinksContainerDesktop = styled.div `
  display: none;  
${bp.desktop} {
    width: 400px;
    height: auto;
    position: absolute;
    bottom: 20px;
    left: 80px;
    display: inline-flex;
  }
`

const OtherLink = styled(Link) `
  margin: 0 16px;
  font-size: 1rem;
  color: var(--grey);
`

const Divider = styled.div `
  width: 262px;
  height: 1px;
  margin: 0 auto;
  display: block;
  background: rgba(255, 255, 255, 0.2);

  ${bp.desktop} {
    display: none;
  }
`

const Copyright = styled.div `
  width: 100%;
  height: 24px;
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    width: auto;
    padding-right: 20px;
    border-right: 2px solid var(--grey);
    font-size: 1rem;
    font-weight: 400;
    color: var(--white);
  }

  span {
    width: 20px;
    height: 20px;
    margin-left: 20px;
    background-image: url(${worldIcon});
    background-size: cover;
    bakcground-position: center;
  }

  ${bp.desktop} {
    width: 400px;
    right: 80px;
  }
`
export { Container, Title, Email, ContainerItems,ContainerItem, TitleItem, Item, ContainerIcons, LikedinIcon, FacebookIcon, InstagramIcon, TwitterIcon, OtherLinkContainer, OtherLinksContainerDesktop, OtherLink, Divider,Copyright }