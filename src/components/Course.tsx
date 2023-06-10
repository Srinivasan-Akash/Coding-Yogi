import React from 'react'
import styles from '@/styles/Courses.module.css';

export default function Course() {
    return (
        <div className={styles["hero"]}>
            <h1 className={styles["title"]}>INTERACTIVE COURSES</h1>
            <p className={styles["desc"]}>
                With Cheat Sheets, Articles, Animated Videos
                Challenges & Projects
            </p>
        </div>
    )
}
