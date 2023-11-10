import { goNext, goPrev } from '@/utill/functions/link'
import { useRouter } from 'next/router'
import React from 'react'
import { styled } from 'styled-components'

const PageNavi = ({page, total, value } : any) => {
    const router = useRouter()

    if(Number(page) <= 1 && total > 1) {
        return (
            <Pages>
                <Button onClick={() => goNext(router, value, page)}>NEXT PAGE</Button>
            </Pages>
        )
    }
    if(Number(page) > 1 && Number(page) === total) {
        return (
            <Pages>
                <Button onClick={() => goPrev(router, value, page)}>PREV PAGE</Button>
            </Pages>
        )
    }
    if(Number(page) === 1 && total === 1) {
        return (<div></div>)
    }
    return (
        <Pages>
            <Button onClick={() => goPrev(router, value, page)}>PREV PAGE</Button>
            <Button onClick={() => goNext(router, value, page)}>NEXT PAGE</Button>
        </Pages>
    )
}

export default PageNavi

const Pages = styled.div`
margin-top: 50px;
`
const Button = styled.button`
border: 1px solid white;
background-color: black;
color: white;
border-radius: 10px;
height: 50px;
padding: 0 20px;
font-weight: 700;
transition: 0.3s;

&:hover {
    background-color: white;
    color: black;
}
`