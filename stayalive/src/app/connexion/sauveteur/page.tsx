import Navbar from '../../components/NavbarI'
import styles from './connexion.module.css';


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
          <div className={styles.formContainer}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input type="email" id="email" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>Mot de passe</label>
              <input type="password" id="password" className={styles.input} />
            </div>
            <button className={styles.button}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
