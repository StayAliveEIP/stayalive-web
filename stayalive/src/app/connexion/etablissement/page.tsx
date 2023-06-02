import Navbar from '../../components/NavbarI';
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
              <label htmlFor="etablissement" className={styles.label}>Numéro d'établissement</label>
              <input
                type="text"
                id="etablissement"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="poste" className={styles.label}>Numéro de poste</label>
              <input
                type="text"
                id="poste"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>Mot de passe</label>
              <input
                type="password"
                id="password"
                className={styles.input}
              />
            </div>
            <button className={styles.button}>Se connecter</button>
          </div>
        </div>
      </div>
    </div>
  );
}
