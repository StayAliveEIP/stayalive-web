import Navbar from '../../components/NavbarC'
import styles from './connexion.module.css';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
        <Navbar isLoginPage={false} />
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            Création de Compte
          </div>
        </div>
        <div className={styles.formContainer}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input type="email" id="email" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>Mot de passe</label>
              <input type="password" id="password" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>Confirmation Mot de passe</label>
              <input type="password" id="Cpassword" className={styles.input} />
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
            <button className={styles.button}>S&apos;inscrire</button>
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
  )
}

