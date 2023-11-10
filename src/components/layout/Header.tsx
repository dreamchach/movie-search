import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { search, login, logout } from '@/utill/functions/auth'
import Link from 'next/link'

const Header = () => {
    const router = useRouter()
    const {data} = useSession()
    const [value, setValue] = useState('')
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [router])

    useEffect(() => {
        if(data) {
            if(router.pathname === '/') router.push('/main')
        }else if(router.pathname !== '/') router.push('/')
    }, [data, router])

  return (
    <div>
        <Nav>
            <Logo>
                <Link href='/'>
                    <LogoImg
                        alt='Disney Plus Logo'
                        src='/images/logo.svg'
                    />
                </Link>
            </Logo>
            {data && (
                <SearchInput 
                    type='search' 
                    placeholder='영화를 검색해주세요' 
                    onKeyUp={(event) => search(event.key, router, value)} 
                    onChange={(event) => setValue(event.target.value)}
                    value={value}
                />
            )}
            {!data ? 
                <Log onClick={() => login()}><div>LOGIN</div></Log> : 
                <Log onClick={() => logout()}><div>LOGOUT</div></Log>
            }
        </Nav>
    </div>
  )
}

export default Header

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