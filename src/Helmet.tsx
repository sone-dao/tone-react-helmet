import Placeholder from '@sone-dao/sone-react-placeholder'
import React from 'react'
import styles from './Helmet.module.scss'

export interface IHelmetProps {}

const Helmet: React.FC<IHelmetProps> = () => {
  return (
    <div className={styles.component}>
      <Placeholder display="Component: Helmet" height="100%" />
    </div>
  )
}

export default Helmet
