"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';

const NavbarD: React.FC<{ isLoginPage: boolean }> = ({ isLoginPage }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  
  const handleButtonClick = () => {
    setIsButtonClicked(true);

    setTimeout(() => {
      setIsButtonClicked(false);
    }, 300);
  };

  const buttonClass = isButtonClicked
    ? `${styles['red-button']} ${styles['button-transition']} ${styles['button-clicked']}`
    : `${styles['red-button']} ${styles['button-transition']}`;


  return (
    <nav className={styles.nav}>
      <div className={`${styles.logo}`}>
        <Link href="/" legacyBehavior>
          <Image src="https://media.discordapp.net/attachments/1019600215545749587/1019610952116748298/Screenshot_2022-09-14_at_15.48.00.png?width=1284&height=1294" alt="Description de l'image" width="40" height="31" />
        </Link>
        <span className={styles.logoText}>StayAlive</span>
        <div className={styles.buttons}>
        <Link href="/">
            <button className={`${styles['white-button']} ${styles['button-transition']}`}>Acceuil</button>
        </Link>
        <Link href="/dashboard">
            <button className={`${styles['white-button']} ${styles['button-transition']}`}>Dashboard</button>
        </Link>
        </div>
      </div>
      <div className={styles['login-button']}>
        <Link href={"/Profil"}>
          <button
            className={buttonClass}
            onClick={handleButtonClick}
          > Mon Profil
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarD;
