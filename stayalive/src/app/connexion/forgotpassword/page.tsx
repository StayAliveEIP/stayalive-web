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
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
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
  
  const handlePasswordReset = async () => {
    try {
      const response = await fetch('https://api.stayalive.fr/rescuer/forgot-password/reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token,
          password: newPassword
        })
      });

      if (response.ok) {
        // Traiter la réponse positive ici
        setSuccessMessage('Votre mot de passe a été réinitialisé avec succès');
      } else {
        throw new Error('Erreur lors de la réinitialisation du mot de passe');
      }
    } catch (error: unknown) {
      let errorMessage = 'Erreur lors de la réinitialisation';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      setError(errorMessage);
    }
  };

  return (
<div>
  <Navbar isLoginPage={true} />

  <div className="max-w-sm mx-auto my-10 bg-white rounded-lg shadow-md">
        <div className="bg-gray-700 text-white text-xl font-semibold py-4 px-6 rounded-t-lg">Récupération du mot de passe</div>
        <form className="space-y-6 py-6 px-8">
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

        <div className="flex justify-center">
        <button className="bg-red-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-700" onClick={handleSubmit} type='button'>
          Envoyer le mail de récupération
        </button>
        </div>
        <div className={styles.returnButton}>
          <Link href="/connexion">
            <button className={styles.returnButtonContent}>
              <FiArrowLeft className={styles.returnButtonIcon} />
              <span className={styles.returnButtonText}>Retour</span>
            </button>
          </Link>
        </div>
        </form>
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
        <p className={styles.successModalMessage}>{successMessage}</p>
        <input
          className={styles.successModalInput}
          type="text"
          placeholder="Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <input
          className={styles.successModalInput}
          type="password"
          placeholder="Nouveau mot de passe"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button 
          className={styles.successModalButton}
          onClick={handlePasswordReset}>Réinitialiser le mot de passe
        </button>
        <button 
          className={styles.successModalCloseButton}
          onClick={() => setSuccessMessage('')}>Fermer
        </button>
      </div>
    </div>
  )}
</div>
);
}

