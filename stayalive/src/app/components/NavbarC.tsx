import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';

const Navbar: React.FC = () => {

  return (
    <nav className={styles.nav}>
      <div className={`${styles.logo}`}>
        <Link href="/" legacyBehavior>
          <Image src="https://media.discordapp.net/attachments/1019600215545749587/1019610952116748298/Screenshot_2022-09-14_at_15.48.00.png?width=1284&height=1294" alt="Description de l'image" width="40" height="31" />
        </Link>
        <span className={styles.logoText}>StayAlive</span>
        <div className={styles.buttons}>
        <button className={`${styles['white-button']}`}>Acceuil</button>
        <button className={`${styles['white-button']}`}>Présentation</button>
        <button className={`${styles['white-button']}`}>Fonctionnalité</button>
        <button className={`${styles['white-button']}`}>A propos</button>
      </div>
      </div>
      <div className={styles['login-button']}>
      <Link href="/connexion">
            <button className={styles['red-button']}>Se connecter</button>
      </Link>
      </div>
    </nav>
  );
};

export default Navbar;
