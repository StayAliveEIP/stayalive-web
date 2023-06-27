import Navbar from '../components/NavbarC'
import styles from './connexion.module.css';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export default function Home() {
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
        <div className={styles.subheader}>
          En tant que:
        </div>
        <Link href="/connexion/etablissement">
        <button className={styles.button}>
          Etablissement
        </button>
        </Link>
        <Link href="/connexion/sauveteur">
        <button className={styles.button}>
          Sauveteur
        </button>
        </Link>
        <div className={styles.returnButton}>
            <Link href="/">
                <button className={styles.returnButtonContent}>
                    <FiArrowLeft className={styles.returnButtonIcon} />
                    <span className={styles.returnButtonText}>Retour</span>
                </button>
            </Link>
            </div>
      </div>
    </div>
    </div>
  )
}

