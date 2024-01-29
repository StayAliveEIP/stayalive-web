"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBarCenter from '../../components/NavBarCenter';
import styles from './Nintervention.module.css';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export default function Center() {
  const [info, setInfo] = useState('');
  const [address, setAddress] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    console.log('Token récupéré:', token);
    if (token) {
      setAccessToken(token);
    } else {
      router.push('/connexion');
    }
  }, [router]);
  

  const handleCreateInterventionClick = async () => {
    if (!accessToken) {
      console.error('Token non disponible');
      return;
    }
    console.log(accessToken);
    const response = await fetch('https://api.stayalive.fr/call-center/emergency', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ info, address })
    });

    if (response.ok) {
      console.log('Intervention créée avec succès !');
    } else {
      console.error('Erreur lors de la création de l’intervention');
    }
  };

  return (
    <div>
      <NavBarCenter isLoginPage={false} />
      <div className={styles.pageContainer}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.headerContent}>Nouvelle Intervention</div>
          </div>
          <div className={styles.formContainer}>
            <div className={styles.formGroup}>
              <label htmlFor="info" className={styles.label}>Informations</label>
              <input type="text" id="info" className={styles.input} value={info} onChange={(e) => setInfo(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="address" className={styles.label}>Adresse</label>
              <input type="text" id="address" className={styles.input} value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <button className={styles.button} onClick={handleCreateInterventionClick}>
              Faire la demande
            </button>
            <div className={styles.returnButton}>
              <Link href="/center">
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
