import React from 'react'
import LinkMenuComponent from './LinkMenuComponent'
import { Link } from 'gatsby'
function Menu() {
    return (
        <ul className='menu__items'>
            <li onMouseOver={savoirVivreHandleOver} onMouseOut={savoirVivreHandleOut} className='menu__item menu__item--savoir-vivre'>
                <LinkMenuComponent linkName='savoir-vivre'/>
            </li>
            <li onMouseOver={dressCodeHandleOver} onMouseOut={dressCodeHandleOut} className='menu__item menu__item--savoir-vivre'>
                <LinkMenuComponent linkName='dress-code'/>
            </li>
            <li className='menu__item'>
                <Link to='/kobieta'>Kobieta</Link>
            </li>
        </ul>
    )
}
export default Menu
const savoirVivreHandleOver = ()=>{
    const hiddenEl = document.querySelector('.menu__savoir-vivre--hidden');
    hiddenEl.style.visibility = 'inherit'
}
const savoirVivreHandleOut = ()=>{
    const hiddenEl = document.querySelector('.menu__savoir-vivre--hidden');
    hiddenEl.style.visibility = 'hidden'
}
const dressCodeHandleOver = ()=>{
    const hiddenEl = document.querySelector('.menu__dress-code--hidden');
    hiddenEl.style.visibility = 'inherit'
}
const dressCodeHandleOut = ()=>{
    const hiddenEl = document.querySelector('.menu__dress-code--hidden');
    hiddenEl.style.visibility = 'hidden'
}