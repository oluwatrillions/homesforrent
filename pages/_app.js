import React from 'react'
import '../styles/globals.css'
import '../components/Header.css'
import '../components/Hero.css'
import '../components/Explore.css'
import '../components/ExploreData.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
