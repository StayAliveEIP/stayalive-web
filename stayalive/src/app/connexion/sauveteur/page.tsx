"use client";
import Navbar from '../../components/NavbarC';
import styles from './connexion.module.css';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      console.log('email', email);
      console.log('password', password);
      const response = await fetch('http://api.stayalive.fr:3000/rescuer/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        console.log('Connexion réussie !');
        const data = await response.json();
        localStorage.setItem('accessToken', data.accessToken); // Stockage du token
        router.push('/dashboard'); // Redirection vers le tableau de bord
      } else {
        console.error('Erreur lors de la connexion');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion', error);
    }
  };

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
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>Mot de passe</label>
              <input
                type="password"
                id="password"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.forgotPassword}>
              <Link href="/connexion/forgotpassword">
                <span className={styles.forgotPasswordLink}>Mot de passe oublié</span>
              </Link>
            </div>
            <div className={styles.buttonsContainer}>
              {/* Les boutons des réseaux sociaux ici */}
            </div>
            <button className={styles.button} onClick={handleSubmit}>
              Se connecter
            </button>
            <div className={styles.returnButton}>
              <Link href="/inscription">
                <button className={styles.returnButtonContent}>
                  <FiArrowLeft className={styles.returnButtonIcon} />
                  <span className={styles.returnButtonText}>Retour</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
