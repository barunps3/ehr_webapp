'use client'
import React from "react"
import styles from './LoginCard.module.css'
import { useRouter } from 'next/navigation'

export default function LoginCard() {
  const router = useRouter()
  const handleClick = (e: React.FormEvent) => {
      e.preventDefault();
      return router.push('/search')
    }

  return (
    <form onSubmit={handleClick} className={styles.loginForm}>
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