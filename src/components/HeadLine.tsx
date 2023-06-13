import React from 'react'
import styles from '@/styles/Courses.module.css';
import HeadLine from '@/interfaces/HeadLine';

export default function HeadLine(props: HeadLine) {
    return (
        <div className={styles["hero"]}>
            <h1 className={styles["title"]}>{ props.page_name }</h1>
            <p className={styles["desc"]}>
               { props.desc }
            </p>
        </div>
    )
}
