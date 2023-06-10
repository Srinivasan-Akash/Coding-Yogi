import React from 'react'
import styles from '@/styles/Card.module.css';
import Image from 'next/image';

interface cardDetails {
    course_name: string;
    thumbnail: string;
    instructor_name: string;
    instructor_photo: string;
    difficult_level: string;
    lessons: number;
    desc: string;
}

export default function Card(props: cardDetails) {
    const { course_name, thumbnail, instructor_name, instructor_photo, difficult_level, lessons, desc } = props

    return (
        <section className={styles.cardContainer}>
            <div className={styles.upperCard}>
                <Image className={styles.thumbnail} src={thumbnail} width={"280"} height={"280"} alt={"Thumbnail"} />
                <div className={styles.instructor}>
                    <img src={instructor_photo} alt="" />
                    <p> { instructor_name } </p>
                </div>
                <h2>{course_name}</h2>
            </div>
            <div className={styles.data}>
                <div className={styles.dataItem}>
                    <img src="/brain.svg" alt="" />
                    <p><b>{difficult_level}</b> Friendly</p>
                </div>

                <div className={styles.dataItem}>
                    <img src="/certificate.png" alt="" />
                    <p>With <b>Cerificate</b></p>
                </div>

                <div className={styles.dataItem}>
                    <img src="/book.png" alt="" />
                    <p>With <b>{lessons} Lessons</b></p>
                </div>
            </div>
            <div className={styles.desc}>
                <p>{desc}</p>
            </div>
        </section>
    )
}
