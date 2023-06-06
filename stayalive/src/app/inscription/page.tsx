import Navbar from '../components/NavbarC'
import styles from './connexion.module.css';
import Link from 'next/link';

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
        <div className={styles.subheader}>
          En tant que:
        </div>
        <Link href="/inscription/etablissement">
        <button className={styles.button}>
          Etablissement
        </button>
        </Link>
        <Link href="/inscription/sauveteur">
        <button className={styles.button}>
          Sauveteur
        </button>
        </Link>
      </div>
    </div>
    </div>
  )
}

