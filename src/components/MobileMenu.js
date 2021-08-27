import React from 'react'
import { Link } from 'gatsby'
function MobileMenu({shouldShow}) {
    console.log(shouldShow)
    return (
        <ul className={shouldShow?'mobile-menu__main-links':'mobile-menu__main-links--hidden'}>
            <li className='mobile-menu__item'><Link to='/savoir-vivre'>savoir-vivre</Link></li>
            <li className='mobile-menu__item'><Link to='/dress-code'>dress-code</Link></li>
        </ul>
    )
}

export default MobileMenu
