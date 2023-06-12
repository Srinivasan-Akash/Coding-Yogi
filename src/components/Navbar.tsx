import React, { useState, useRef, useEffect } from 'react';
import styles from '@/styles/Navbar.module.css';
import Link from 'next/link';
import LogIn from './LogIn';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = useRef<HTMLDivElement>(null);
  const signInPopupElement = useRef<HTMLDialogElement>(null);

  function handleMenu() {
    if (!menuOpen) {
      setMenuOpen(true);
      if (menu.current) {
        menu.current.style.left = '0%';
      }
    } else {
      setMenuOpen(false);
      if (menu.current) {
        menu.current.style.left = '-100%';
      }
    }
  }

  function exitModal(e: any) {
    if (signInPopupElement.current) {
      const dialogDimensions = signInPopupElement.current.getBoundingClientRect()
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        signInPopupElement.current.close()
      }
    }
  }

  function handleSignInPopup() {
    if (signInPopupElement.current) {
      signInPopupElement.current.showModal()
    }
  }

  return (
    <nav className={styles.navbar}>
      <div className="logo">
        <h1>Coding Yogi</h1>
      </div>

      <div ref={menu} className={styles["nav-items"]}>
        <ul>
          <li><Link href="/">My Home</Link></li>
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="#">Resources</Link></li>
          <li><Link href="#">Community</Link></li>
          <li><Link href="#">Challenges</Link></li>
          <li onClick={handleMenu} className={styles["close"]}></li>
        </ul>
      </div>

      <div className={styles.extra}>
        <div onClick={handleSignInPopup} className={styles.signIn}>
          <div className={styles.outline}></div>
          <button>Sign In</button>
        </div>

        <div onClick={handleMenu} className={styles.hamburger}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>

      <dialog onClick={exitModal} className={styles.modal} ref={signInPopupElement}>
        <LogIn></LogIn>
      </dialog>
    </nav>
  );
}