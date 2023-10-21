import React from 'react'
import Layout from '../components/Layout'
import { styled } from 'styled-components'
import LoginContent from '../components/login/LoginContent'

const Login = () => {
  return (
    <LoginContainer>
      <Layout />
      <LoginContent />
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`