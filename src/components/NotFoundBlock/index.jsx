import React from 'react'

import styles from './NotFoundBlock.module.scss'

console.log(styles)

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <span>:(</span>
      <h1>
      Нічого не знайдено 
      </h1>
      <p className={styles.description}>Нажаль, данної сторінки немає у нашій пекарні</p>
    </div>
  )
}

export default NotFoundBlock;