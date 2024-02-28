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
          <Image src="https://media.discordapp.net/attachments/1130401857890697285/1190320898281066607/logo_Background_Removed.png?ex=65cf8439&is=65bd0f39&hm=b9498b5ab0627f56c8394b65b442358eb82c65d735b03c95f2c06290f3052de2&=&format=webp&quality=lossless&width=936&height=910" alt="Description de l'image" width="40" height="31" />
        </Link>
        <span className={styles.logoText}>StayAlive</span>
        <div className={styles.buttons}>
          <a href="/">
          <button className={`${styles['white-button']} ${styles['button-transition']}`}>Acceuil</button>
          </a>
          <a href="/theteam">
            <button className={`${styles['white-button']} ${styles['button-transition']}`}>A propos</button>
          </a>
          <a href="/connexion">
            <button className={`${styles['white-button']} ${styles['button-transition']}`}>Se connecter</button>
        </a>
        </div>
      </div>
      <div className={styles['login-button']}>
        <Link href={"/inscription/sauveteur"}>
          <button
            className={buttonClass}
            onClick={handleButtonClick}
          >
            Inscription
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
