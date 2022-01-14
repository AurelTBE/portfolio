import React from 'react'
import Header from './Header';

interface Props {
    children: any
}

const Layout = ({children}: Props) => {
    return (
        <div className=''>
            <Header />
            {children}
        </div>
    )
}

export default Layout
