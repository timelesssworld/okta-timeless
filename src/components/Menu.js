import React from 'react'
import LinkMenuComponent from './LinkMenuComponent'
import { Link } from 'gatsby'
function Menu() {
    return (
        <ul className='menu__items'>
            <li className='menu__item menu__item--savoir-vivre'>
                <LinkMenuComponent linkName='savoir-vivre'/>
            </li>
            <li className='menu__item menu__item--savoir-vivre'>
                <LinkMenuComponent linkName='dress-code'/>
            </li>
            <li className='menu__item'>
                <Link to='/kobieta'>Kobieta</Link>
            </li>
        </ul>
    )
}
export default Menu