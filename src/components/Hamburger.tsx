import React from 'react'
import styles from '../Helmet.module.scss'

export interface IHamburgerProps {}

const Hamburger: React.FC<IHamburgerProps> = () => {
  return <button className={styles.hamburger}>🍔</button>
}

export default Hamburger
