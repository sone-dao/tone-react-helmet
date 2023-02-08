import React from 'react'
import styles from '../Helmet.module.scss'

export interface IHamburgerProps {}

const Hamburger: React.FC<IHamburgerProps> = () => {
  const openSidebar = () =>
    document.documentElement.style.setProperty('--sidebar-margin', '0')

  return (
    <button className={styles.hamburger} onClick={() => openSidebar()}>
      🍔
    </button>
  )
}

export default Hamburger
