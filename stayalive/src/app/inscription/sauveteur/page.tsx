"use client";
import Navbar from '../../components/NavbarC';
import styles from './connexion.module.css';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isCguChecked, setIsCguChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleCguCheckboxChange = () => {
    setIsCguChecked(!isCguChecked);
  };

  const handleSignupButtonClick = async () => {
    console.log('Email:', email);
    console.log('Firstname:', firstname);
    console.log('Lastname:', lastname);
    console.log('Phone:', phone);
    console.log('Password:', password);

    if (isCguChecked) {
      const response = await fetch('https://api.stayalive.fr/rescuer/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          firstname,
          lastname,
          password,
          phone
        })
        
      });
      if (response.ok) {
        console.log('Inscription réussie !');
      } else {
        console.error('Erreur lors de la connexion');
      }
      console.log('CGU accepted, proceed with signup...');
    } else {
      console.log('Veuillez accepter les CGU pour vous inscrire.');
    }
  };

  return (
    <div>
      <Navbar isLoginPage={false} />
      <div className={styles.pageContainer}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.headerContent}>Création de Compte</div>
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
              <label htmlFor="lastname" className={styles.label}>Nom</label>
              <input 
                type="text" 
                id="lastname" 
                className={styles.input} 
                value={lastname} 
                onChange={(e) => setLastname(e.target.value)} 
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="firstname" className={styles.label}>Prénom</label>
              <input 
                type="text" 
                id="firstname" 
                className={styles.input} 
                value={firstname} 
                onChange={(e) => setFirstname(e.target.value)} 
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>Téléphone</label>
              <input 
                type="text" 
                id="phone" 
                className={styles.input} 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
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
            {/* Assurez-vous d'ajouter la logique pour confirmer le mot de passe si nécessaire */}
            <div className={styles.cguCheckbox} onClick={handleCguCheckboxChange}>
              <label className={styles.cguLabel}>
                <input 
                  type="checkbox"  
                  checked={isCguChecked}
                  onChange={handleCguCheckboxChange}
                />
                J&apos;accepte les <span className={styles.cguText}>CGU</span>
              </label>
            </div>
            <button className={styles.button} onClick={handleSignupButtonClick}>
              S&apos;inscrire
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
