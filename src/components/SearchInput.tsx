import Placeholder from '@sone-dao/sone-react-placeholder'
import React from 'react'
import styles from '../Helmet.module.scss'

export interface ISearchInputProps {}

const SearchInput: React.FC<ISearchInputProps> = () => {
  return (
    <div className={styles.search}>
      <Placeholder display="Component: Search Box" width="300px" />
    </div>
  )
}

export default SearchInput
