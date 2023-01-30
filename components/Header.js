import React from 'react'
import { HiMenuAlt2 } from "react-icons/hi"
import Link from 'next/link'

const Header = () => {
    return (
      <div className='header-class'>
         <div className='headerContainer'>
          < HiMenuAlt2 className='menu'/>
          <div>
              <img />
              <h2 className='company-name'>Avila Homes & Rentals</h2>
          </div>
          <div className='navContainer'>
              <Link href='/signUp'>sign up /</Link>
              <Link href='/signIn'>sign in</Link>
          </div>
          <div>
              <Link href='/post'>Post A Property</Link>
          </div>
        </div>
    </div>
  )
}

export default Header