import React from 'react'
import Navbar from './Navbar';

const Layout = (props) => {
    const { children } = props;
    return (
        <div className='w-full h-full flex flex-col p-10'>
            <Navbar />
            <div className='w-full h-full flex flex-col pt-10'>
                {children}
            </div>
        </div>
    )
}

export default Layout