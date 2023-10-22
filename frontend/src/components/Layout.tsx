import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { auth } from '../firebase'

const Layout = () => {
    const location = useLocation()
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                if(location.pathname === '/') navigate('/main')
            }else if(location.pathname !== '/') navigate('/')
        })
    }, [])
    
    
    const search = async (key : string) => {
        if(key === 'Enter') {
            await navigate(`/search?value=${value}&page=1`)
        }
    }
    const login = () => {
        signInWithPopup(auth, provider)
        .then((res) => {})
        .catch((error) => console.log(error))
    }
    const logout = () => {
        signOut(auth)
        .then(() => {
            if(location.pathname !== '/') navigate('/')
        })
        .catch((error) => console.log(error))
    }

    return (
        <Nav>
            <Logo>
                <Link to='/'>
                    <LogoImg alt='Disney Plus Logo'
                        src='/images/logo.svg'
                    />
                </Link>
            </Logo>
            {location.pathname !== '/' && (
                <SearchInput 
                    type='search' 
                    placeholder='영화를 검색해주세요' 
                    onKeyUp={(event) => search(event.key)} 
                    onChange={(event) => setValue(event.target.value)}
                    value={value}
                />
            )}
            {location.pathname === '/' ? 
                <Log onClick={() => login()}><div>LOGIN</div></Log> : 
                <Log onClick={() => logout()}><div>LOGOUT</div></Log>
            }
        </Nav>
    )
}

export default Layout

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
    background-color: #090b13;
`
const Logo = styled.div`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
`
const LogoImg = styled.img`
    display: block;
    width: 100%;
`
const Log = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 8px;
    transition: all 0.2s ease 0s;
    font-weight: 700;
    color : #f9f9f9;

    &:hover {
        background-color: #f9f9f9;
        color: black;
        border-color: transparent;
    }
`
const SearchInput = styled.input`
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: rgba(0, 0, 0, 0.582);
    border-radius: 8px;
    color: white;
    padding: 5px;
    border: none;
`