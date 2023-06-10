import React from 'react'
import styles from '@/styles/CourseFilter.module.css';
import Image from 'next/image';

export default function CourseFilter() {
    return (
        <div>
            <form className={styles.form}>
                <div className={styles.searchContainer}>
                    <Image className={styles.search} src={"/Search.png"} width={"30"} height={"30"} alt='Search'/>
                    <input type="text" placeholder='Search Your Course' />
                    <span className={styles.slash}>/</span>
                </div>
                <select>
                    <option value="">Languages</option>
                    <option value="option2">Java Script</option>
                    <option value="option3">Python</option>
                </select>
                <select>
                    <option value="">Career Path</option>
                    <option value="option2">Full Dev</option>
                    <option value="option3">React </option>
                </select>
            </form>
        </div>
    )
}
