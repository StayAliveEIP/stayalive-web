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
    if (isCguChecked) {
      const response = await fetch('http://api.stayalive.fr:3000/auth/register', {
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
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input type="email" id="email" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="text" className={styles.label}>
                Nom
              </label>
              <input type="lastname" id="lastname" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="text" className={styles.label}>
                Prénom
              </label>
              <input type="firstname" id="firstname" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="text" className={styles.label}>
                Téléphone
              </label>
              <input type="phone" id="phone" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>
                Mot de passe
              </label>
              <input type="password" id="password" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>
                Confirmation Mot de passe
              </label>
              <input
                type="password"
                id="Cpassword"
                className={styles.input}
              />
            </div>
            <div className={styles.cguCheckbox} onClick={handleCguCheckboxChange}>
              <label className={styles.cguLabel}>
                <input type="checkbox"  checked={isCguChecked}
                onChange={handleCguCheckboxChange}/>
                  J&apos;accepte les <span className={styles.cguText}>CGU</span>
              </label>
            </div>
            <div className={styles.buttonsContainer}>
              <button className={styles.buttonF}>
                <Image src="https://media.discordapp.net/attachments/1064585016782372985/1123227456548130826/facebook-logo-3-1.png?width=1294&height=1294" alt="F Logo" width="30" height="30"/>
              </button>
              <button className={styles.buttonG}>
                <Image src="https://media.discordapp.net/attachments/1064585016782372985/1123227518661562481/1657906383gmail-icon-png.png?width=1294&height=1294" alt="G Logo"  width="30" height="30"/>
              </button>
              <button className={styles.buttonA}>
                <Image src="https://media.discordapp.net/attachments/1064585016782372985/1123227564815695912/Apple-Logo-1977.png?width=1942&height=1294" alt="A Logo" width="30" height="30"/>
              </button>
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
