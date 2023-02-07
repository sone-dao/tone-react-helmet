import Placeholder from '@sone-dao/sone-react-placeholder'
import React from 'react'
import Account from './components/Account'
import Hamburger from './components/Hamburger'
import styles from './Helmet.module.scss'

export interface IHelmetProps {}

const Helmet: React.FC<IHelmetProps> = () => {
  return (
    <div className={styles.helmet}>
      <Hamburger />
      <Placeholder display="Component: Search Box" width="300px" />
      <Account />
    </div>
  )
}

export default Helmet
