import React from 'react'
import LeftFooter from '../components/LeftFooter'
import Logo from '../components/Logo'
import { Link } from 'gatsby'
function Contact() {
    return (
        <div>
            <div className='contact'><Link to='/kontakt'>Kontakt</Link></div>
            <Logo/>
            <LeftFooter/>
            To jest strona z kontaktem
        </div>
    )
}

export default Contact
