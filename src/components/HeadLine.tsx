import React from 'react'
import styles from '@/styles/Courses.module.css';
import HeadLine from '@/interfaces/HeadLine';

export default function HeadLine(props: HeadLine) {
    return (
        <div className={styles["hero"]}>
            <h1 className={styles["title"]}>INTERACTIVE COURSES</h1>
            <p className={styles["desc"]}>
                With Cheat Sheets, Articles, Animated Videos Challenges & Projects
            </p>
        </div>
    )
}
