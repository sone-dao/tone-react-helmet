import Placeholder from '@sone-dao/sone-react-placeholder'
import { sub } from '@sone-dao/sone-react-utils'
import React, { useEffect, useState } from 'react'
import Account from './components/Account'
import Hamburger from './components/Hamburger'
import styles from './styles/Helmet.module.scss'

export interface IHelmetProps {}

const Helmet: React.FC<IHelmetProps> = () => {
  const [isHelmetHidden, setHelmetHidden] = useState<boolean>(false)

  useEffect(() => {
    sub('__TONE_EVENTS__', 'helmet.hide', (hidden: boolean) => {
      console.log(`Helmet visibility set to ${hidden}`)
      setHelmetHidden(hidden)
    })
  }, [])

  if (isHelmetHidden) return <></>

  return (
    <div className={styles.helmet}>
      <Hamburger />
      <Placeholder display="Component: Search Box" width="300px" />
      <Account />
    </div>
  )
}

export default Helmet
