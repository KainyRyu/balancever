import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import backgroundVideo from "../images/Screenshot_2020_04_13_at_01_43.png"
import "../styles/homepage.css"

const Homepage = () => {
  return (
    <Layout>
      <SEO title="Homepage" />
      <div className="base_bg homepage_box">
        <div>
          <div id="">
            <h3>Your balanced daily routine. Your new free time ideas.</h3>
          </div>
          <div id="">
            <p>
              Balancever can help structuring a work day effectively, provide
              suggestions what to do during breaks and free time and display a
              work-life balance score.
            </p>
          </div>
          <button class="sign_button">SIGN IN</button>
          <button class="sign_button">SIGN UP</button>
        </div>
        <div className="">
          <img src={backgroundVideo} alt="background video" />
          <div className="background-video-overlay">
            <div>Welcome Video Autoplay (Muted)</div>
            <img
              src="https://image.flaticon.com/icons/svg/727/727240.svg"
              alt="mute"
            />
            <img
              src="https://image.flaticon.com/icons/svg/483/483054.svg"
              alt="mute"
            />
            <img
              src="https://image.flaticon.com/icons/svg/565/565276.svg"
              alt="mute"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Homepage
