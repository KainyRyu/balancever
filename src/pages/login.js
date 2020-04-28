import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import firebase from "../utils/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
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

const Login = () => {
    const [signedIn, setSignedIn] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const uiConfig = {
    //     signInFlow: "popup",
    //     signInOptions: [
    //         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //         firebase.auth.FacebookAuthProvider.PROVIDER_ID
    //     ],
    //     callbacks: {
    //         signInSuccess: () => false
    //     }
    // }

    // useEffect(() => {
    //     firebase.auth().onAuthStateChanged(user => {
    //         setSignedIn(!!user)
    //     })
    // }, [])

    const handleLogin = e => {
        e.preventDefault()
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            // border: `1px solid white`,
            // overflow: 'hidden',
            boderRadius: 50,
            background: 'none',
            color: 'white',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            '&$focused': {
                boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
                borderColor: theme.palette.primary.main,
            },
        },
        focused: {},
    }))

    const theme = createMuiTheme({
        palette: {
            primary: white,
        },
    })

    function StyledTextField(props) {
        const classes = useStyles();
        return <TextField InputProps={{ classes, disableUnderline: true}} {...props} />
    }

    const classes = useStyles();

    return (
        <Layout>
            <SEO title="Login" />
            <Typography component="h1" variant="h5" style={{textAlign: 'center'}}>SIGN IN</Typography>
            <Form className={classes.root} onSubmit={e => handleLogin(e)}>
                <ThemeProvider theme={theme}>
                    <TextField 
                        className={classes.margin}
                        className="class.margin"
                        label="Email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        style={{
                            border:'solid 2px white',
                            borderRadius:'50px',
                            padding: '0 20px',
                            margin: '10px 10vw',
                            width: '80vw',
                        }}
                    />
                    <TextField 
                        label="Password"
                        type="password"

                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        style={{
                            border:'solid 2px white',
                            borderRadius:'50px',
                            padding: '0 20px',
                            margin: '20px 10vw',
                            width: '80vw',
                        }}
                    />
                </ThemeProvider>
            </Form>
            <Button 
                className="sign-buttons" 
                variant="outlined"
                color="primary"
                style={{ 
                    borderRadius: 25, 
                    background: `white`,
                    margin: `0 10%`,
                    padding: `20px auto`,
                    width: '80%',
                }}
            >
                SIGN IN
            </Button>

            <Link to="/page-2/"></Link>
            <div style={{display: 'flex', justifyContent: 'center', margin: '20px'}}>
                <Link style={{color: 'white', textDecoration:'none', }}>Forgot Password?</Link>
            </div>
            <div style={{textAlign: 'center', margin: '20px'}}>Don't have an account? <SignUp>Sign Up</SignUp></div>
            {/* <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
            /> */}
        </Layout>
    )
}

const Form = styled.form`
    margin-top: 25px;
`

const InputFieldWarpper = styled.div` 
    margin-bottom: 25px;
    width: 80%;
`

const SignUp = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight: 600;
`

export default Login
