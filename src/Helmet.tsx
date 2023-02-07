import Placeholder from '@sone-dao/sone-react-placeholder'
import { sub } from '@sone-dao/sone-react-utils'
import React, { useEffect, useState } from 'react'
import Account from './components/Account'
import Hamburger from './components/Hamburger'
import styles from './styles/Helmet.module.scss'

export interface IHelmetProps {}

const Helmet: React.FC<IHelmetProps> = () => {
  const [isHidden, setHidden] = useState<boolean>(false)
  const display = isHidden ? 'none' : 'flex'

  useEffect(() => {
    sub('__TONE_EVENTS__', 'helmet.hide', (hide: boolean) => {
      console.log(`Helmet visibility set to: ${hide}`)
      setHidden(hide)
    })
  }, [])

  return (
    <div className={styles.helmet} style={{ display }}>
      <Hamburger />
      <Placeholder display="Component: Search Box" width="300px" />
      <Account />
    </div>
  )
}

export default Helmet
