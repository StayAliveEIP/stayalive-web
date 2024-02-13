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
      <div className="max-w-sm mx-auto my-8 shadow-lg">
      <div className="rounded-t-lg bg-gray-700 p-6 text-center text-white">
        <h1 className="text-2xl font-semibold">Connexion</h1>
      </div>
      <div className="rounded-b-lg bg-white p-6 space-y-6 text-center space-x-1">
        <h2 className="text-center text-lg font-medium">En tant que:</h2>
        <Link href="/connexion/etablissement">
            <button className="w-full bg-red-600 text-white py-3 rounded-md shadow-md hover:bg-red-700 max-w-[150px]" onClick={handleButtonClick} >
              Etablissement
            </button>
          </Link>
          <Link href="/connexion/sauveteur">
            <button className="w-full bg-red-600 text-white py-3 rounded-md shadow-md hover:bg-red-700 max-w-[150px]" onClick={handleButtonClick}>
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
