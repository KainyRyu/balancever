import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import sudoku from "../../images/activity-sudoku.png"
import cooking from "../../images/activity-cooking.png"
import socialising from "../../images/activity-socialise.png"
import museumTour from "../../images/activity-museum@2x.png"
import "./homepage.css"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import {
    Button,
    TextField,
    Typography,
  } from "@material-ui/core"
  import {
      fade,
      makeStyles,
      createMuiTheme,
      ThemeProvider,
  } from "@material-ui/core/styles"
  import { white } from '@material-ui/core/colors'

const Homepage = () => {
    const [signedIn, setSignedIn] = useState("");


    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setSignedIn(!!user)
        })
    }, [])

    return (
        <Main>
            <Layout>
                <SEO title="Homepage" />
                <p
                    style={{ 
                        textAlign:`center`,
                        width: `80vw`,
                        margin: `0 10vw`,
                        paddingTop: `20px`
                    }}
                    >

                    With Balancer you can generate a structure for your day, boost your efficiency and avoid long working hours. You can select diverse activities<br/>for your break and free time.</p>
                <button 
                    className="homepage-button"
                    style={{ 
                    }}
                >
                    STRUCTURE YOUR DAY
                </button>
                <button 
                    className="homepage-button"
                    style={{ 
                    }}
                >
                    STRUCTURE YOUR DAY
                </button>


            </Layout>

                <div className="happening-soon">
                    <h3>HAPPENING SOON</h3>
                    <Activity>
                        <img style={{height: `100%`, opacity: `0.7`}}  src={sudoku} alt=""/>
                    </Activity>
                    <Activity>

                        <img style={{height: `100%`, opacity: `0.7`}}  src={cooking} alt=""/>
                    </Activity>    
                    
                </div>
                <div className="happening-soon">
                    <h3>TRENDING</h3>
                    <Activity style={{borderStyle:'none'}}>
                        <img style={{height: `50%`}} src={socialising} alt="socialising"/>
                        <h4>Make a call with a new friends</h4>
                        <p>Find new friends just for fun</p>
                    </Activity>
                    <Activity>
                        <img style={{height: `50%`}} src={museumTour} alt="museum tour"/>
                        <h4>Virtual tour on the museum!</h4>
                        <p>Visit with a virtual tour the museum!</p>
                    </Activity>    
                    
                </div>
                <Link to="/page-2/"></Link>

        </Main>
    )
}

const Main = styled.div`
    background: #F6F8F9;
`
const Activity = styled.div`
    background: white;
    height: 90vw;
    width: 90vw;
    margin: 5vw 0;
`



export default Homepage
