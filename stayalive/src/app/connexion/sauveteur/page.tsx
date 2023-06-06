"use client";
import { useState } from 'react';
import Navbar from '../../components/NavbarC';
import styles from './connexion.module.css';
import fetch from 'isomorphic-fetch';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      console.log('email', email);
      console.log('password', password);
      const response = await fetch('mettre notre api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        // Connexion réussie, effectuez les actions nécessaires ici
        console.log('Connexion réussie !');
      } else {
        // Gérez les erreurs ici
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
            <button className={styles.button} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
