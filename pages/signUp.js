import React from 'react'
import styles from '../styles/Home.module.css'


const signUp = () => {
  return (
    <div className={styles.signUpContainer}>
          <div className={styles.signUpBox}>
              <form className={styles.inputBox}>
                   <div className={styles.formItem}>
                      <label  className={styles.input} htmlFor='first'>First Name</label>
                      <input className={styles.textField} type='text' name='firstname'/>
                  </div>
                   <div className={styles.formItem}>
                      <label  className={styles.input} htmlFor='lastname'>Last Name</label>
                      <input className={styles.textField} type='text' name='lastname'/>
                  </div>
                   <div className={styles.formItem}>
                      <label  className={styles.input} htmlFor='location'>Location</label>
                      <input className={styles.textField} type='text' name='location'/>
                  </div>
                  <div className={styles.formItem}>
                      <label className={styles.input} htmlFor='username'>Username</label>
                      <input className={styles.textField} type='text' name='username'/>
                  </div>
                  <div className={styles.formItem}>
                      <label  className={styles.input} htmlFor='password'>Password</label>
                      <input className={styles.textField} type='password' name='username'/>
                  </div>
                  <button className={styles.loginBtn}>Sign Up</button>
              </form>
          </div>
    </div>
  )
}

export default signUp