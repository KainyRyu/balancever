import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../images/full-logo.png"
import Layout from "../components/layout"
import SEO from "../components/seo"
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {
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

const Menu = () => {
    const [signedIn, setSignedIn] = useState("");

    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setSignedIn(!!user)
        })
    }, [])

    return (
        <div style={{background:'#6188C9'}}>
            <SEO title="Menu" />
            <MenuBar>
                <img 
                    src={logo} 
                    alt="logo"
                    style={{
                        width: '50%',
                        marginTop:'30px'
                    }}
                />
                <Button 
                    className="sign-buttons" 
                    variant="outlined"
                    color="primary"
                >
                    VIEW SCHEDULE
                </Button>
                <Button 
                    className="sign-buttons" 
                    variant="outlined"
                    color="primary"
                    style={{ 
                    }}
                >
                    EDIT SCHEDULE
                </Button>
                <Button 
                    className="sign-buttons" 
                    variant="outlined"
                    color="primary"
                    style={{ 
                    }}
                >
                    CHECK YOUR SCORE
                </Button>
                <Button 
                    className="sign-buttons" 
                    variant="outlined"
                    color="primary"
                    style={{ 
                    }}
                >
                    SHARE YOUR SCHEDULE
                </Button>
                <Button 
                    className="sign-buttons" 
                    variant="outlined"
                    color="primary"
                    style={{ 
                        borderRadius: '25px',
                        marginTop: '25px',
                    }}
                >
                    EXPLORE ACTIVITIES
                </Button>
                
                
                {/* <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                /> */}
            </MenuBar>
            <div style={{background:'#6188C9', padding:'10% 0', height:'35vh', border:'none'}}>
                <ul>
                    <List><Link to="/" style={{color: 'white', textDecoration:'none', }}>WHO WE ARE</Link></List>
                    <List><Link to="/" style={{color: 'white', textDecoration:'none', }}>TERMS</Link></List>
                    <List><Link to="/" style={{color: 'white', textDecoration:'none', }}>CONTACT</Link></List>
                    <List><Link to="/" style={{color: 'white', textDecoration:'none', }}>SIGNOUT</Link></List>
                </ul>
                <footer style={{borderTop: 'white 1px solid'}}>
                    © balancever 2020
                </footer>
            </div>
        </div>
    )
}

const MenuBar = styled.div`
    display: block;
    background: linear-gradient(#ffbd9a, #a99aff 50%, #69b2d2 100%);
    border-radius: 0 0 200px 200px / 50px ;
    height: 65vh;
    width: 100vw;
    margin-bottom: 0;
`

const Button = styled.button`
    border-radius: 25px;
    border-style: none;
    margin-bottom: 5%;
    padding: 10px 0;
    width: 55vw;
`

const List = styled.li` 
    color: white;
    margin: 5% 10px;
    font-weight: 600;
`

export default Menu
