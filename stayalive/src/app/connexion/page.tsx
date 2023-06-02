import Navbar from '../components/NavbarI'
import styles from './connexion.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
        <Navbar />
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
      </div>
    </div>
    </div>
  )
}

