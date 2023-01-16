import React from 'react'
import { HiMenuAlt2 } from "react-icons/hi"
import Link from 'next/link'

const Header = () => {
  return (
      <div className='headerContainer'>
          < HiMenuAlt2 className='menu'/>
          <div>
              <img />
              <h2 className='company-name'>Avila Homes & Rentals</h2>
          </div>
          <div className='navContainer'>
              <Link href='/signUp'><h4>sign up</h4></Link>
              <Link href='/signIn'><h4>sign in</h4></Link>
          </div>
          <div>
              <Link href='/post'>Post A Property</Link>
          </div>
    </div>
  )
}

export default Header