import React, { useEffect } from 'react';
import styles from '@/styles/Login.module.css';

export default function LogIn() {
    return (
        <div className={styles.modal}>
            <h1>LOG-IN / SIGN-UP</h1>
            <h3>Learn via our interactive courses, challenges, cheat sheets & community. Stay productive & updated by our tech news & tools</h3>
            <div className={styles.btns}>
                <button className={styles.google}>Get Started With Google</button>
                <button className={styles.github}>Get Started With Git-Hub</button>
                <button className={styles.linkedin}>Get Started With Linked-In</button>
            </div>
        </div>
    )
}