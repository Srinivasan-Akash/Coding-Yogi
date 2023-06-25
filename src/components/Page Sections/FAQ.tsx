import React from 'react'
import styles from '@/styles/pages/FAQ.module.css';

export default function FAQ() {
  return (
    <div className={styles.trendingSection}>
        <div className={styles.left}>
            <h2 className={styles.miniTitle}><span className={"yellow"}>Trending</span> Topics To Learn</h2>
            <h1>Don't Know Where To <span className={"pink"}>Start</span> ??</h1>
            <p className={styles.desc}>It’s ok to be confused as a beginner. Tech is vast but don’t worry. Our curated bundles will act as a guided learning path. Check out all Of our bundles and start your programming journey with us.</p>
            <div className={styles.signIn}>
                <div className={styles.outline}></div>
                <button>Get Started</button>
            </div>
        </div>

        <div className={styles.right}>
            <div className={styles.course}></div>
            <div className={styles.course}></div>
            <div className={styles.course}></div>
            <div className={styles.course}></div>
            <div className={styles.course}></div>
            <div className={styles.course}></div>
        </div>
    </div>
)
}
