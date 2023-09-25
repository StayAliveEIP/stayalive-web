import Navbar from './components/NavbarC'
import styles from './navbar.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Navbar isLoginPage={false} />
      <Image src="https://media.discordapp.net/attachments/1130401857890697285/1155854707991003156/mockupStayAlive2.png?width=2592&height=1084" alt="Description de l'image" width="1942" height="10" />
      <h1 className={styles.title}>LA MISSION ?</h1>
      <h1 className={styles.subtitle}>Sauver des vies</h1>
      <h2 className={styles.text}>Téléchargez gratuitement l’application StayAlive</h2>
      <Image src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-travel-awards-globestamp-7.png" className={styles.appstore} alt="Description de l'image" width="1942" height="10" />
      <h1 className={styles.title2}>Sauvez des vies près de chez vous !</h1>
    </div>
  )
}
