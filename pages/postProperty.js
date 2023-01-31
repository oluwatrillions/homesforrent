import React from 'react'
import styles from '../styles/Home.module.css'


const postProperty = () => {
  return (
    <div className={styles.signUpContainer}>
          <div className={styles.signUpBox}>
              <form className={styles.inputBox}>
                   <div className={styles.formItem}>
                      <label  className={styles.input} htmlFor='caption'>Caption</label>
                      <input className={styles.textField} type='text' name='caption'/>
                  </div>
                   <div className={styles.formItem}>
                      <label  className={styles.input} htmlFor='address'>Address</label>
                      <input className={styles.textField} type='text' name='address'/>
                  </div>
                   <div className={styles.formItem}>
                      <label  className={styles.input} htmlFor='city'>City</label>
                      <input className={styles.textField} type='text' name='city'/>
                  </div>
                  <div className={styles.formItem}>
                      <label className={styles.input} htmlFor='state'>State</label>
                      <input className={styles.textField} type='text' name='state'/>
                  </div>
                  <div className={styles.formItem}>
                      <label  className={styles.input} htmlFor='zipcode'>Zip Code</label>
                      <input className={styles.textField} type='text' name='zipcode'/>
                  </div>
                  <div className={styles.formItem}>
                      <label className={styles.input} htmlFor='images'>Images</label>
                      <input className={styles.textField} type='file' name='images'/>
                  </div>
                  <button className={styles.loginBtn}>upload</button>
              </form>
          </div>
    </div>
  )
}

export default postProperty