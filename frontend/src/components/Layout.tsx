import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

const Layout = () => {
    const location = useLocation()
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    const search = async (key : string) => {
        if(key === 'Enter') {
            await navigate(`/search/${value}`)
        }
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
            <Log>
                <div>{location.pathname === '/' ? 'LOGIN' : 'LOGOUT'}</div>
            </Log>
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