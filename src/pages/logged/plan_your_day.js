import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  InputLabel,
  FormControl,
} from "@material-ui/core"
import "./homepage.css"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Edit = () => {
  const [startTime, setStartTime] = useState(0)
  const [endTime, setEndTime] = useState(0)
  const [expectedWorkHour, setExpectedWorkHour] = useState(0)

  let newDate = new Date()
  

  return (
    <>
      <Layout style={{ margin: `5%` }}>
        <SEO title="Homepage" />

        <Form style={{ textAlign: `center` }}>
          <h3 style={{ textAlign: `center` }}>PLAN YOUR DAY</h3>
          <TimeSettingWrapper>
            <span style={{padding: '15px 0', flex: '3'}}>Starts</span>
            <Time 
              type="time"
              placeholder="00:00"
              required
            >
            </Time>
          </TimeSettingWrapper>
          <TimeSettingWrapper>
            <span style={{padding: '15px 0', flex: '3'}}>Ends</span>
            <Time 
              type="time"
              placeholder="00:00"
            >
            </Time>
          </TimeSettingWrapper>
          <TimeSettingWrapper>
            <span style={{padding: '15px 0', flex: '3'}}>EXPECTED WORK HOUR</span>
            <Time 
              type="time"
            ></Time>
          </TimeSettingWrapper>
        </Form>
      </Layout>
      <Link to="/page-2/"></Link>
    </>
  )
}

const Form = styled.form`
  padding: 5%;
`
const TimeSettingWrapper = styled.div`
  display: flex;
  text-align: left;
  justify-content: space-between;
`

const Time = styled.input`
  background: none;
  border: white 1px solid;
  border-radius: 50px;
  color: white;
  flex: 1;
  margin-bottom: 20px;
  padding: 15px;
  text-align: center;

`

export default Edit
