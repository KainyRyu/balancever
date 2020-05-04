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
import { Button, TextField, Typography } from "@material-ui/core"
import {
  fade,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles"
import { white } from "@material-ui/core/colors"

const Homepage = () => {
  const [signedIn, setSignedIn] = useState("")

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setSignedIn(!!user)
    })
  }, [])

  return (
    <Main>
      <Layout>
        <SEO title="Homepage" />

        <div style={{ textAlign: `center` }}>
          <h3 style={{ textAlign: `center` }}>activities</h3>
          <ActivityWrapper>
            <Activity to="/">
              <h3>STAY FIT</h3>
            </Activity>
            <Activity to="/">
              <h3>TRAIN YOUR BRAIN</h3>
            </Activity>
            <Activity to="/">
              <h3>CULTURE</h3>
            </Activity>
            <Activity to="/">
              <h3>FOOD LOVE</h3>
            </Activity>
            <Activity to="/">
              <h3>SOCIALISE</h3>
            </Activity>
            <Activity to="/">
              <h3>GAME</h3>
            </Activity>
            <Activity to="/">
              <h3>STAY TUNED</h3>
            </Activity>
            <Activity to="/">
              <h3>CULTURE</h3>
            </Activity>
          </ActivityWrapper>
        </div>
      </Layout>
      <Link to="/page-2/"></Link>
    </Main>
  )
}

const Main = styled.div`
  background: #f6f8f9;
`
const ActivityWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width: 100vw;
`

const Activity = styled(Link)`
  align-items: center;
  background: white;
  border-radius: 10px;
  color: black;
  display: flex;
  height: 45vw;
  justify-content: center;
  margin: 2vw;
  opacity: 0.7;
  text-decoration: none;
  width: 45vw;
`

export default Homepage
