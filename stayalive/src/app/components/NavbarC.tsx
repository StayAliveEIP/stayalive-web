"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';

const Navbar: React.FC<{ isLoginPage: boolean }> = ({ isLoginPage }) => {
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
          <a href="/">
          <button className={`${styles['white-button']} ${styles['button-transition']}`}>Acceuil</button>
          </a>
          <a href="/#presentationTarget">
            <button className={`${styles['white-button']} ${styles['button-transition']}`}>Présentation</button>
          </a>
          <a href="/theteam">
            <button className={`${styles['white-button']} ${styles['button-transition']}`}>A propos</button>
          </a>
        </div>
      </div>
      <div className={styles['login-button']}>
        <Link href={isLoginPage ? "/inscription" : "/connexion"}>
          <button
            className={buttonClass}
            onClick={handleButtonClick}
          >
            {isLoginPage ? "Inscription" : "Se connecter"}
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
