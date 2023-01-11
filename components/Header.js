import React from 'react'
import { HiMenuAlt2 } from "react-icons/hi"
import Link from 'next/link'
import HeaderContainer from './HeaderStyles'

const Header = () => {
  return (
      <div>
          < HiMenuAlt2/>
          <div>
              <img />
              <h2>Avila Homes & Rentals</h2>
          </div>
          <div>
              <Link href='/signUp'>
                  <h4>sign up</h4>
               </Link>
              <Link href='/signIn'>
                  <h4>sign in</h4>
               </Link>
          </div>
          <div><Link href='/post'>Post A Property</Link></div>
    </div>
  )
}

export default Header