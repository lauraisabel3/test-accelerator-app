import styled from "@emotion/styled";
import { breakpoints as bp } from "../../Styles/breakpoints";
import incubatorIcon from '../../images/incubator.png'
import startupIcon from '../../images/startup.png'
import corporationIcon from '../../images/coporations.png'
import challengeIcon from '../../images/challenge.png'
import investorIcon from '../../images/investor.png'
import checkIcon from '../../images/check-icon.png'

const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20px;
  padding: 20px 20px 780px 20px;
  background-color: var(--light-white);

  ${bp.desktop} {
    padding: 20px 80px 780px 80px;
  }
`

const IconsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;

  ${bp.desktop} {
    margin-top: 60px;
  }
`

const IncubatorIcon = styled.span`
  width: 60px;
  height: 60px;
  margin: 60px 12px 0 0;
  border-radius: 4px;
  background-image: url(${incubatorIcon});
  background-size: 34px;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 5.64686px 16.9406px rgba(0, 0, 0, 0.18);

  ${bp.desktop} {
    width: 160px;
    height: 160px;
    margin: 110px 40px 0 0;
    background-size: 104px;
    border-radius: 32px;
  }

`

const StartupIcon = styled(IncubatorIcon)`
  margin-top: 30px;
  background-image: url(${startupIcon});
  background-size: 56px;

  ${bp.desktop} {
    margin-top: 80px;
    background-size: 160px;
  }
`

const CorporationIcon = styled(IncubatorIcon)`
  margin-top: 0;
  background-image: url(${corporationIcon});

  ${bp.desktop} {
    margin-top: 0;
  }
`

const ChallengeIcon = styled(IncubatorIcon)`
  margin-top: 30px;
  background-image: url(${challengeIcon});
  background-size: 32px;

  ${bp.desktop} {
    margin-top: 80px;
    background-size: 100px;
  }
`

const InvestorIcon = styled(IncubatorIcon)`
  background-image: url(${investorIcon});
  background-size: 56px;

  ${bp.desktop} {
    background-size: 160px;
  }
`

const Title = styled.h1`
  margin: 40px 0 80px 0;
  font-size: 4rem;
  font-weight: 600;
  color: var(--black);

  ::before {
    content:'Community';
    display: block;
    font-size: 1.4rem;
    color: var(--blue);
  }

  span {
    display: block;
    font-size: 1.4rem;
    color: var(--light-grey);
  }
`

const ContainerCart = styled.div`
  width: 400px;
  height: 660px;
  position: relative;
  margin: 40px auto;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0px 8.73248px 26.1974px 8.73248px rgba(0, 0, 0, 0.08);

  ${bp.desktop} {
    width: 360px;
    height: 610px;
    margin: 20px;
    display: inline-flex;
    flex-direction: column;
  }
`

const TitleCart = styled.h3`
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  line-height: 2rem;
  color: var(--very-dark-blue);

  span {
    width: 34px;
    height: 34px;
    margin-right: 12px;
    border-radius: 8px;
    background-color: var(--blue);
    background-position: center;
    background-size: 18px;
    background-repeat: no-repeat;
  }
`

const DescriptionCart = styled.p`
  padding: 20px 0 32px 0;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--dark-blue);
  border-bottom: 1px solid var(--very-light-grey);
`

const TitleFeatures = styled.h5`
  margin: 32px 0 20px 0;
  font-size: 1.6rem;
  font-weight: 600;
`

const Features = styled.p`
  margin: 14px 0;
  display: flex;
  font-size: 1.4rem;

  ::before {
    content: '';
    width: 18px;
    height: 18px;
    margin-right: 8px;
    background-image: url(${checkIcon});
    background-size: cover;
    background-position: center;
  }
`

const ButtonCart = styled.button`
  width: 300px;
  height: 52px;
  margin: 120px auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  background-color: var(--blue);
  color: var(--light-white);
  font-size: 1.6rem;
  font-family: inherit;
  font-weight: 600;

  ${bp.desktop} {
    margin-top: 30px;
  }
`

export { Container, IconsContainer, IncubatorIcon, StartupIcon, CorporationIcon, ChallengeIcon, InvestorIcon, Title, ContainerCart, TitleCart, DescriptionCart, TitleFeatures, Features, ButtonCart }