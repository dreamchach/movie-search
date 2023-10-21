import React from 'react'
import { styled } from 'styled-components'

const LoginContent = () => {
  return (
    <Container>
        <LoginCenter>
            <LoginLogoOne src='/images/cta-logo-one.svg' alt="logo-one" />
            <LoginSignUpLink id='login'>지금 가입</LoginSignUpLink>
            <LoginDescription>
                영화에 대한 프리미엄 액세스를 얻으십시오.
                디즈니 플러스 가격은 다음 주부터 1000원 인상됩니다.
            </LoginDescription>
            <LoginLogoTwo src='/images/cta-logo-two.png' alt="logo-two" />
        </LoginCenter>
        <LoginBgImage></LoginBgImage>
    </Container>
  )
}

export default LoginContent

const Container = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`
const LoginCenter = styled.div`
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
`
const LoginLogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`
const LoginSignUpLink = styled.div`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover {
        background-color: #0483ee;
    }
`
const LoginDescription = styled.p`
    font-size: 11px;
    margin-bottom: 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`
const LoginLogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`
const LoginBgImage = styled.div`
    height: 100%;
    background-position: top;
    background-image: url('/images/login-background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`