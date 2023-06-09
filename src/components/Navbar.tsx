import React, { useState, useRef, useEffect } from 'react';
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menu = useRef<HTMLDivElement>(null);

  function handleMenu() {
    if(!menuOpen) {
        setMenuOpen(true);
        if (menu.current) {
          menu.current.style.right = '0%';
        }
    } else {
        setMenuOpen(false);
        if (menu.current) {
          menu.current.style.right = '-100%';
        }
    }
  }

  useEffect(() => {
  }, [menuOpen]);

  return (
    <nav className={styles.navbar}>
      <div className="logo">
        <h1>Coding Yogo</h1>
      </div>

      <div ref={menu} className={styles["nav-items"]}>
        <ul>
          <li><a href="#">My Home</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">Hackathons</a></li>
          <li onClick={handleMenu} className={styles["close"]}></li>
        </ul>
      </div>

      <div className={styles.extra}>
        <div className={styles.signIn}>
          <div className={styles.outline}></div>
          <button>Sign In</button>
        </div>

        <div onClick={handleMenu} className={styles.hamburger}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>
    </nav>
  );
}