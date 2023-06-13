import React, { useEffect } from 'react';
import styles from '@/styles/Login.module.css';
import Image from 'next/image';

export default function LogIn() {
    return (
        <div className={styles.modal}>
            <h1>LOG-IN / SIGN-UP</h1>
            <h3>Learn via our interactive courses, challenges, cheat sheets & community. Stay productive & updated by our tech news & tools</h3>
            <div className={styles.btns}>
                <button className={styles.google}>
                    <span>
                        <Image className={styles.logo} src={"/google.png"} width={"20"} height={"20"} alt='Google Logo'></Image>
                    </span>
                    Get Started With Google
                </button>

                <button className={styles.github}>
                    <span>
                        <Image className={styles.logo} src={"/github.png"} width={"20"} height={"20"} alt='Google Logo'></Image>
                    </span>
                    Get Started With GitHub
                </button>

                <button className={styles.linkedin}>
                    <span>
                        <Image className={styles.logo} src={"/linkedin.png"} width={"20"} height={"20"} alt='Google Logo'></Image>
                    </span>
                    Get Started With LinkedIn
                </button>
            </div>
        </div>
    )
}