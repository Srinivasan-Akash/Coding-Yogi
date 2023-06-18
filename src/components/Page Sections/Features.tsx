import React from 'react'
import styles from '@/styles/pages/Hero.module.css';

export default function Features() {
  return (
    <div className={styles["features"]}>
        <div className={styles["column"]}></div>
        <div className={styles["column"]}>
            <div className={styles["box"]}></div>
            <div className={styles["box"]}></div>
            <div className={styles["box"]}></div>
        </div>
    </div>
  )
}
