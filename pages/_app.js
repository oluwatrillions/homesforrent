import React from 'react'
import '../styles/globals.css'
import '../components/Header.css'
import '../components/Hero.css'
import '../components/Explore.css'
import '../components/ExploreData.css'
import '../components/Footer.css'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
    return(
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
