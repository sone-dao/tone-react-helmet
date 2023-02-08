import React from 'react'
import Account from './components/Account'
import Hamburger from './components/Hamburger'
import SearchInput from './components/SearchInput'
import styles from './Helmet.module.scss'

export interface IHelmetProps {}

const Helmet: React.FC<IHelmetProps> = () => {
  return (
    <div className={styles.helmet}>
      <Hamburger />
      <SearchInput />
      <Account />
    </div>
  )
}

export default Helmet
