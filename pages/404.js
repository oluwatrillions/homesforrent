import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
}, [])

  return (
      <div className={styles.notFound}>
          <h1>Ooooops...</h1>
          <h2>This page cannot be found</h2>
          <p>Redirecting to <Link href='/'>HOME</Link> </p>
    </div>
  )
}

export default NotFound