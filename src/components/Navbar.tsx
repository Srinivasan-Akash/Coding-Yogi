import React, { useState, useRef, useEffect } from 'react';
import styles from '@/styles/components/Navbar.module.css';
import Link from 'next/link';
import LogIn from './LogIn';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = useRef<HTMLDivElement>(null);
  const signInPopupElement = useRef<HTMLDialogElement>(null);

  return (
    <nav className={styles.navbar}>
      {/* NAV BAR ITEMS */}
      <div className={styles.logo}>
        <h1><Link href={"/"}>Coding Yogi</Link></h1>
      </div>

      <div ref={menu} className={styles["nav-items"]}>
        <ul>
          <li><Link className={styles.link} href="/">My Home</Link></li>
          <li><Link className={styles.link} href="/courses">Courses</Link></li>
          <li className={styles.link}>Resources</li>
          <li className={styles.link}>Community</li>
          <li className={styles.link}>Products</li>
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

      {/* POPUP */}
      <dialog onClick={exitModal} className={styles.modal} ref={signInPopupElement}>
        <LogIn></LogIn>
      </dialog>

      {/* BLOBS */}
      <Image className={styles.blob1} src={"/WAVES/blob1.png"} width={"150"} height={"120"} alt='blob'/>
      <Image className={styles.blob2} src={"/WAVES/blob2.png"} width={"169"} height={"129"} alt='blob'/>
    </nav>
  );

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

  function handleSignInPopup() {
    if (signInPopupElement.current) {
      signInPopupElement.current.style.width = '40vw';
      signInPopupElement.current.style.height = '80vh';
      signInPopupElement.current.showModal()
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
        signInPopupElement.current.style.width = '0';
        signInPopupElement.current.style.height = '0';
    
        setTimeout(() => {
          if(signInPopupElement.current) {
            signInPopupElement.current.close();
          }
        }, 300);
      }
    }
  }
}