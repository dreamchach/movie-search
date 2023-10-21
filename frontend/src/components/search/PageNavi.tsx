import React from 'react'
import { styled } from 'styled-components'

const PageNavi = ({page, total, setPage} : any) => {
    console.log(page, total)
    const prev = () => {
        setPage(page - 1)
    }
    const next = () => {
        setPage(page + 1)
    }

    if(page <= 1 && total > 1) {
        return (
            <Pages>
                <Button onClick={() => next()}>NEXT PAGE</Button>
            </Pages>
        )
    }
    if(page > 1 && page === total) {
        return (
            <Pages>
                <Button onClick={() => prev()}>PREV PAGE</Button>
            </Pages>
        )
    }
    if(page === 1 && total === 1) {
        return (<div></div>)
    }
    return (
        <Pages>
            <Button onClick={() => prev()}>PREV PAGE</Button>
            <Button onClick={() => next()}>NEXT PAGE</Button>
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