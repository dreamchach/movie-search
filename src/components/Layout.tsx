import React from 'react'
import Header from './layout/Header'

const Layout = ({children} : any) => {
  return (
    <div>
        <Header />
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout