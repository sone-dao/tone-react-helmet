import React from 'react'
import styles from '../styles/Helmet.module.scss'

export interface IAccountProps {}

const Account: React.FC<IAccountProps> = () => {
  return <button className={styles.account}>🧖</button>
}

export default Account
