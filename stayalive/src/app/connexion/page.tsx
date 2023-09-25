"use client";
import Navbar from '../components/NavbarC'
import styles from './connexion.module.css';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import { useState } from 'react'; // Importez useState depuis React

export default function Home() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  // Gestionnaire de clic de bouton
  const handleButtonClick = () => {
    setIsButtonClicked(true);

    // Réinitialisez la classe CSS après un délai (0.3s dans cet exemple)
    setTimeout(() => {
      setIsButtonClicked(false);
    }, 10000);
  };

  // Classe CSS conditionnelle pour les boutons
  const buttonClass = isButtonClicked
    ? `${styles.button} ${styles['fade-out']}`
    : styles.button;

  return (
    <div>
      <Navbar isLoginPage={true} />
      <div className={styles.pageContainer}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.headerContent}>
              Connexion
            </div>
          </div>
          <div className={styles.subheader}>
            En tant que:
          </div>
          <Link href="/connexion/etablissement">
            <button className={buttonClass} onClick={handleButtonClick} >
              Etablissement
            </button>
          </Link>
          <Link href="/connexion/sauveteur">
            <button className={buttonClass} onClick={handleButtonClick}>
              Sauveteur
            </button>
          </Link>
          <div className={styles.returnButton}>
            <Link href="/">
              <button className={styles.returnButtonContent}>
                <FiArrowLeft className={styles.returnButtonIcon} />
                <span className={styles.returnButtonText}>Retour</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
