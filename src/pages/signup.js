import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import firebase from "../utils/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {
    Button,
    FormConrol,
    FormControlLabel,
    InputLabel,
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

const SignUp = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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

    const classes = useStyles();

    return (
        <Layout>
            <SEO title="SignUp" />
            <Typography component="h1" variant="h5" style={{textAlign: 'center'}}>CREATE ACCOUT</Typography>
            <Form className={classes.root}>
                <ThemeProvider>
                    {/* <TextField 
                        className={classes.margin}
                        label="First Name"
                        type="text"
                        variant="outlined"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        style={{
                            border:'solid 2px white',
                            borderRadius:'50px',
                            padding: '0 20px',
                            margin: '10px 10vw',
                            width: '80vw',
                        }}
                    />
                    <TextField 
                        className={classes.margin}
                        className="class.margin"
                        label="Phone"
                        type="number"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        style={{
                            border:'solid 2px white',
                            borderRadius:'50px',
                            padding: '0 20px',
                            margin: '10px 10vw',
                            width: '80vw',
                        }}
                    /> */}
                    <input 
                        className={classes.margin}
                        className="class.margin"
                        label="Name"
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        style={{
                            background: 'none',
                            border:'solid 1px white',
                            borderRadius:'50px',
                            padding: '0 20px',
                            margin: '15px 10vw',
                            width: '80vw',
                            height: '50px',
                        }}
                    />
                    <input 
                        className={classes.margin}
                        className="class.margin"
                        label="Name"
                        type="text"
                        value={email}
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                        style={{
                            background: 'none',
                            border:'solid 1px white',
                            borderRadius:'50px',
                            padding: '0 2015',
                            margin: '15px 10vw',
                            width: '80vw',
                            height: '50px',
                        }}
                    />
                    <input 
                        className={classes.margin}
                        className="class.margin"
                        label="Phone"
                        type="number"
                        placeholder="Phone"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        style={{
                            background: 'none',
                            border:'solid 1px white',
                            borderRadius:'50px',
                            padding: '0 20px',
                            margin: '15px 10vw',
                            width: '80vw',
                            height: '50px',
                        }}
                    />
                    <TextField 
                        label="Password"
                        type="password"

                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        style={{
                            border:'solid 1px white',
                            borderRadius:'50px',
                            padding: '0 20px',
                            margin: '20px 10vw',
                            width: '80vw',
                        }}
                    />
                    <TextField 
                        label="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        style={{
                            border:'solid 1px white',
                            borderRadius:'50px',
                            padding: '0 20px',
                            margin: '15px 10vw',
                            width: '80vw',
                        }}
                    />

                </ThemeProvider>
            </Form>
            <p style={{width: '70%', textAlign:'center', margin:'10px auto'}}>
                By creating an account you agree to 
                our terms of sevice and privacy policy
            </p>
            <Link to="/login/">
                <button 
                    className="sign-buttons" 
                    variant="outlined"
                    color="primary"
                    style={{ 
                        borderRadius: 25, 
                        background: `white`,
                        margin: `20px 10%`,
                        padding: `15px auto`,
                        width: '80%',
                    }}
                >
                    SIGN UP
                </button>
            </Link>
            <div style={{textAlign: 'center', margin: '20px'}}>Already have an account? <Login>Sign In</Login></div>

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

const Login = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight: 600;
`

export default SignUp
