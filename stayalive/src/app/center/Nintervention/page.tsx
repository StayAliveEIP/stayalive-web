"use client";
import NavBarCenter from '../../components/NavBarCenter';
import styles from './Nintervention.module.css';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import { useState } from 'react'; // Importez useState depuis React



export default function Center() {
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
      <NavBarCenter isLoginPage={false} />
      <div className={styles.pageContainer}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.headerContent}>Nouvelle Intervention</div>
          </div>
          <div className={styles.formContainer}>
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
              <label htmlFor="text" className={styles.label}>
                Adresse
              </label>
              <input type="Adresse" id="adresse" className={styles.input} />
            </div>
            <button className={styles.button} onClick={handleSignupButtonClick}>
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
  )
}
