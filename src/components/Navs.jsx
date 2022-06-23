import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {NavList,LinkStyled} from "./Navs.styled"


const LINKS=[
    {to:'/',text:"Home"},
    {to:'/starred',text:"starred"},
    
]


function Navs() {
  const location=useLocation()

  return (
    <div>
        <NavList>
            {
                LINKS.map(items=><li key={items.to}>
                  <LinkStyled to ={items.to} className={items.to===location.pathname ? 'active':''}>{items.text}</LinkStyled>
                  </li>)
            }
            {/* <li>
            <Link to="/starred">Got ot start page</Link>
            </li> */}
        </NavList>
    </div>
  )
}

export default Navs