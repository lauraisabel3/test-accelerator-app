import * as React from "react"
import '../Styles/global.css'
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Join from "../Components/Join"
import Community from "../Components/Community"


const IndexPage = () => {
  return (
    <>
      <Header />
      <Join/>
      <Community />
      <Footer />
    </>
  )
}

export default IndexPage
