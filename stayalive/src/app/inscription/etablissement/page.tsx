import Navbar from '../../components/NavbarC'
import styles from './connexion.module.css';

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
        <div className={styles.formGroup}>
              <label htmlFor="siret" className={styles.label}>Numéro de Siret</label>
              <input type="text" id="siret" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="téléphone" className={styles.label}>Numéro Téléphone</label>
              <input type="text" id="téléphone" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input type="email" id="email" className={styles.input} />
            </div>
        <button className={styles.button}>Faire la demande</button>
      </div>
    </div>
    </div>
  )
}

