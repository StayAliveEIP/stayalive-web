"use client";
import Navbar from '../../components/NavbarC';
import styles from './forgotpassword.module.css';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Ajout d'un état pour l'erreur

  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    setSuccessMessage(''); // Réinitialiser le message de réussite
  
    try {
      const response = await fetch('https://api.stayalive.fr/rescuer/forgot-password/link?email=matthieuqueru78@gmail.com', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      if (!response.ok) {
        throw new Error('Erreur lors de l’envoi de mail');
      }
      setSuccessMessage('Un email de récupération a bien été envoyé par mail');
    } catch (error: unknown) {
      let errorMessage = 'Erreur lors de la connexion';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
    
      setTimeout(() => {
        setError(errorMessage);
      }, 2000);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };
  

  return (
    <div>
      <Navbar isLoginPage={true} />
      <div className={styles.pageContainer}>
        <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.headerContent}>
              Récupération du mot de passe
            </div>
          </div>
          <div className={styles.formContainer}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button className={styles.button} onClick={handleSubmit}>
              Envoyer le mail de récupération
            </button>
            <div className={styles.returnButton}>
              <Link href="/connexion">
                <button className={styles.returnButtonContent}>
                  <FiArrowLeft className={styles.returnButtonIcon} />
                  <span className={styles.returnButtonText}>Retour</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className={styles.loadingAnimation}>
          {'Chargement...'.split('').map((char, index) => (
            <span key={index} className={`${styles.char} ${styles['char' + index]}`}>{char}</span>
          ))}
        </div>
      )}
      {error && (
        <div className={styles.errorModal}>
          <div className={styles.errorContent}>
            <p>Send email problem</p>
            <button onClick={() => setError(null)}>Fermer</button>
          </div>
        </div>
      )}
      {successMessage && (
  <div className={styles.successModal}>
    <div className={styles.successContent}>
      <p>{successMessage}</p>
      <button onClick={() => setSuccessMessage('')}>Fermer</button>
    </div>
  </div>
)}
    </div>
  );
}

