"use client";
import Navbar from '../../components/NavbarC';
import styles from './connexion.module.css';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';
import { useState } from 'react';

export default function Home() {
  const [etablissement, setEtablissement] = useState('');
  const [poste, setPoste] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      console.log('etablissement', etablissement);
      console.log('password', password);
      const response = await fetch('mettre notre api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ etablissement, password, poste })
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
              <label htmlFor="etablissement" className={styles.label}>Numéro d&apos;établissement</label>
              <input
                type="text"
                id="etablissement"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="poste" className={styles.label}>Numéro de poste</label>
              <input
                type="text"
                id="poste"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>Mot de passe</label>
              <input
                type="password"
                id="password"
                className={styles.input}
              />
            </div>
            <div className={styles.forgotPassword}>
              <Link href="/mots-de-passe-oublie">
                <span className={styles.forgotPasswordLink}>Mot de passe oublié</span>
              </Link>
            </div>
            <button className={styles.button} onClick={handleSubmit}>Se connecter</button>
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
    </div>
  );
}