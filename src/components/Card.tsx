import React from 'react'
import styles from '@/styles/components/Card.module.css';
import Image from 'next/image';
import CardDetails from '@/interfaces/CardDetails';

export default function Card(props: CardDetails) {
    const { course_name, thumbnail, instructor_name, instructor_photo, difficult_level, lessons, desc } = props

    return (
        <section className={styles.cardContainer}>
            <div className={styles.upperCard}>
                <Image className={styles.thumbnail} src={thumbnail} width={"280"} height={"280"} alt={"Thumbnail"} />
                <div className={styles.instructor}>
                    <img src={instructor_photo} alt="" />
                    <p> {instructor_name} </p>
                </div>
                <h2>{course_name}</h2>
            </div>
            <div className={styles.data}>
                <div className={styles.dataItem}>
                    <img src="/UI ICONS/GENERAL ICONS/brain.svg" alt="" />
                    <p><b>{difficult_level}</b> Friendly</p>
                </div>

                <div className={styles.dataItem}>
                    <img src="/UI ICONS/GENERAL ICONS/certificate.png" alt="" />
                    <p>With <b>Cerificate</b></p>
                </div>

                <div className={styles.dataItem}>
                    <img src="/UI ICONS/GENERAL ICONS/book.png" alt="" />
                    <p>With <b>{lessons} Lessons</b></p>
                </div>
            </div>
            <div className={styles.desc}>
                <p>{desc}</p>
            </div>
        </section>
    )
}
