import styled from "@emotion/styled";
import { breakpoints as bp } from "../../Styles/breakpoints";
import looper from '../../images/looper.png'
import staticsImage from '../../images/statistics.png'
import staticsHeader from '../../images/statics-header.png'
import statics1 from '../../images/statics-1.png'
import statics2 from '../../images/statics-2.png'
import statics3 from '../../images/statics-3.png'
import statics4 from '../../images/statics-4.png'
import playIcon from '../../images/play-icon.png'

const Container = styled.div `

  height: 780px;
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(110.96deg, #206ECF 0.72%, #71B0FF 100%);
  overflow: hidden;

  ${bp.desktop} {
    height: 915px;
  }
`

const Looper = styled.span `
  width: 774px;
  height: 777px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  background-image: url(${looper});
  background-size: cover;
  background-position: bottom right;
  background-repeat: no-repeat;
`

const Title = styled.h1 `
  text-align: center;
  font-size: 3rem;
  color: var(--white);

  ::before {
    content:'Join in and connect';
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
    display: block;
  }

  ${bp.desktop} {
    font-size: 7rem;

    ::before {
      font-size: 2 rem;
    }
  }
`

const Description = styled.p `
  text-align: center;
  font-size: 1.4rem;
  color: var(--white);

  ${bp.desktop} {
    font-size: 2rem;
  }
`

const ButtonSchedule = styled.button `
  width: 250px;
  height: 40px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-weight: 700;
  background-color: var(--white);
  border: none;
  border-radius: 4px;
  color: var(--black);

  ${bp.desktop} {
    width: 160px;
  }
`

const StaticsContainer = styled.div `
  width: 356px;
  height: 203px;
  position: relative;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #EDF1F7;
  
  div {
    width: 324px;
    height: 186px;
    position: absolute;
    left: 20px;
    background-image: url(${staticsImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  ${bp.desktop} {
    width: 830px;
    height: 470px;

    div {
      width: 760px;
      height: 440px;
      top: 30px;
      left: 40px;
    }
  }
`
const StaticsImageHeader = styled.span `
  width: 100%;
  height: 12px;
  position: absolute;
  top: 0;
  display: flex;
  background-image: url(${staticsHeader});
  background-size: cover;
  background-position: center;

  ${bp.desktop} {
    height: 25px;
  }
`
const StaticsImage1 = styled.span `
  width: 160px;
  height: 50px;
  position: absolute;
  top: 80px;
  left: -40px;
  display: flex;
  background-image: url(${statics1});
  background-size: cover;
  background-position: center;

  ${bp.desktop} {
    width: 380px;
    height: 115px;
    top: 150px;
  }
`

const StaticsImage2 = styled(StaticsImage1) `
  top: 140px;
  left: -40px;
  background-image: url(${statics2});

  ${bp.desktop} {
    top: 310px;
  }
`

const StaticsImage3 = styled(StaticsImage1) `
  width: 200px;
  height: 80px;
  top: 32px;
  left: 200px;
  background-image: url(${statics3});

  ${bp.desktop} {
    width: 490px;
    height: 190px;
    top: 45px;
    left: 440px;
  }
`

const StaticsImage4 = styled(StaticsImage1) `
  width: 190px;
  top: 150px;
  left: 200px;
  background-image: url(${statics4});

  ${bp.desktop} {
    width: 310px;
    height: 80px;
    top: 340px;
    left: 620px;
  }
`

const ButtonVideo = styled.button `
  width: 120px;
  height: 30px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  background-color: var(--blue);
  font-size: 1.2rem;
  font-family: inherit;
  color: var(--light-white);

  span{
    width: 12px;
    height: 12px;
    margin-right: 4px;
    background-image: url(${playIcon});
    background-size: cover;
  }

  ${bp.desktop} {
    width: 250px;
    height: 50px;

    span {
      width: 21px;
      height: 21px;
    }
  }
`


export { Container, Looper, Title, Description, ButtonSchedule, StaticsContainer, StaticsImageHeader,StaticsImage1,StaticsImage2, StaticsImage3, StaticsImage4, ButtonVideo}