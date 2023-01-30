import React from 'react'
import styles from '../styles/Home.module.css'


const login = () => {
  return (
      <div className={styles.loginContainer}>
          <div className={styles.loginBox}>
              <form className={styles.inputBox}>
                  <div className={styles.formItem}>
                      <label className={styles.input} htmlFor='username'>Username</label>
                      <input className={styles.textField} type='text' name='username'/>
                  </div>
                  <div className={styles.formItem}>
                      <label  className={styles.input} htmlFor='password'>Password</label>
                      <input className={styles.textField} type='password' name='username'/>
                  </div>
                  <button className={styles.loginBtn}>Login</button>
              </form>
          </div>
    </div>
  )
}

export default login