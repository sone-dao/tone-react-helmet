import SearchInput from '@sone-dao/tone-react-search-input'
import React from 'react'
import Account from './components/Account'
import Hamburger from './components/Hamburger'
import styles from './Helmet.module.scss'

export interface IHelmetProps {}

const Helmet: React.FC<IHelmetProps> = () => {
  return (
    <div className={styles.helmet}>
      <Hamburger />
      <SearchInput isMobile={false} />
      <Account />
    </div>
  )
}

export default Helmet
