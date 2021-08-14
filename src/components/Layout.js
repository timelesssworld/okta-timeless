import React from 'react'
import Logo from './Logo'
import LeftFooter from './LeftFooter'
import {Link} from 'gatsby'
const Layout = props => {
    return (
        <>
            <div className='contact'><Link to='/kontakt'>Kontakt</Link></div>
            <Logo/>
            <div className="blog-post__container  ">
                <LeftFooter/>
                <div className='blog-post'>
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default Layout
