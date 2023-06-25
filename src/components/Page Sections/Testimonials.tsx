import React, from 'react';
import styles from '@/styles/pages/Testimonials.module.css';

export default function Testimonials() {
  return (
    <div className={styles.testimonialSection}>
      <div className={styles.greenBox}>
        <div className={styles.content}>
          <div className={styles.pill}>Freemium</div>
          <h1>Know What People Say About Us ??</h1>
          <h2>People Love Learn From Us</h2>
          <div className={styles.btns}>
            <div className={styles.getStarted}>
              <div className={styles.outline}></div>
              <button>Get Started</button>
            </div>

            <div className={`${styles.getStarted} ${styles.contactUs}`}>
              <div className={styles.outline}></div>
              <button>Contact Us</button>
            </div>
          </div>
        </div>

        <div
          className={styles.slider}>
          <div className={styles.slide}></div>
          <div className={styles.slide}></div>
          <div className={styles.slide}></div>
        </div>
      </div>
    </div>
  );
}