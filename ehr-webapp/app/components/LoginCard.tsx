import React from "react"
import styles from './LoginCard.module.css'

export default function LoginCard() {
  return (
    <form className={styles.loginForm}>
      <div>
        <label className={styles.label} htmlFor="username">Username</label>
        <input className={styles.input} type="text" id="username" name="username" required />
      </div>
      <div>
        <label className={styles.label} htmlFor="password">Password </label>
        <input className={styles.input} type="password" id="password" name="password" required />
      </div>
      <button className={styles.loginbtn} type="submit">Login</button>
    </form>
  )
}
