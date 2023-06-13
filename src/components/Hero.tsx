import React from 'react'
import styles from '@/styles/components/Hero.module.css';
import Image from 'next/image';

export default function Hero() {
    return (
        <div className={styles["hero"]}>
            <h1 className={styles["title"]}>LEARN TO CODE <span className={styles.yellow}>FASTER</span></h1>
            <p className={styles["desc"]}>Coding Yogi is a
                <span className={styles.yellow}>
                <Image className={styles.speed} src={"/ILLUSTRATIONS/LANDING PAGE/speed.gif"} width={"100"} height={"100"} alt='Blazingly fast'/> blazingly fast </span>
                && <span className={styles.pink}>interactive</span>
                way to level up your development, design && DSA.</p>
            <Image className={styles.visual} src={"/ILLUSTRATIONS/LANDING PAGE/visual.png"} width={"500"} height={"500"} alt='An Image Of Our Software' />
        </div>
    )
}
