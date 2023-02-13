import SearchInput from '@sone-dao/tone-react-search-input'
import React from 'react'
import Account from './components/Account'
import Hamburger from './components/Hamburger'
import styles from './Helmet.module.scss'
import useAtBreakpoint from './hooks/useAtBreakpoint'

export interface IHelmetProps {}

const Helmet: React.FC<IHelmetProps> = () => {
  const isSearchHidden = useAtBreakpoint(500)

  return (
    <div className={styles.helmet}>
      <Hamburger />
      {!isSearchHidden && <SearchInput isMobile={false} />}
      <Account />
    </div>
  )
}

export default Helmet
