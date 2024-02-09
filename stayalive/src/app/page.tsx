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
      <div className={styles.informationContainer}>
      <h1 className={styles.title2} id="presentationTarget">Sauvez des vies près de chez vous !</h1>
        <h2 className={styles.text2}>Stay Alive permet aux centres d’appels des urgences de pouvoir notifier une communauté de soignant afin d’intervenir sur des urgences ! </h2>
          <div className={styles.circle}>
            <Image src="https://media.discordapp.net/attachments/1130401857890697285/1163099431575498902/clipart3194654.png?ex=653e57c1&is=652be2c1&hm=9c49aa9a22c27c80afa8b92918ceb41f038d8b2f1500914e3e9f1827fc429648&=&width=732&height=1184" className={styles.image1} alt="Description de l'image" width="100" height="100" />
          </div>
          <div className={styles.circle}>
            <Image src="https://media.discordapp.net/attachments/1130401857890697285/1163099432460505219/pngwing.com.png?ex=653e57c2&is=652be2c2&hm=c5766d871f31324bb3071f3dc9969ab33087bb70704a99161fc2fd31f9903e99&=&width=1024&height=1024" className={styles.image2} alt="Description de l'image" width="1942" height="10" />
          </div>
          <div className={styles.circle}>
            <Image src="https://media.discordapp.net/attachments/1130401857890697285/1163099431873286215/emergency-call-14163.png?ex=653e57c1&is=652be2c1&hm=43c583a6e6f8d0566dea956c32e92893b8b0ee9e64777cd8593f9d5c72ffe97a&=&width=512&height=512" className={styles.image3} alt="Description de l'image" width="1942" height="10" />
          </div>
          <p className={styles.text3}>Localisez les défribilateurs</p>
          <p className={styles.text4}>Apprenez les gestes de premiers</p>
          <p className={styles.text5}>secours en cas d’urgence</p>
          <p className={styles.text6}>Rejoignez la communauté</p>
          <p className={styles.text7}>Trouvez facilement les défribilateurs</p>
          <p className={styles.text8}>autour de vous partout en France</p>
          <p className={styles.text9}>Massage cardiaque? Gestes de premiers secours?</p>
          <p className={styles.text10}>Formez vous grâce aux partenaires de StayAlive</p>
          <p className={styles.text11}>Vous êtes soignant? Ou vous êtes formés</p>
          <p className={styles.text12}>aux gestes de premiers secours?</p>
          <p className={styles.text13}>Vous pouvez rejoindre la communauté !</p>
          <div className={styles.informationContainer2}></div>
          <Image src="https://media.discordapp.net/attachments/930018108465348618/1166277087846473769/CleanShot_2023-10-24_at_16.28.022x.png?ex=6549e72e&is=6537722e&hm=15920d589c4c2c1ecf90ef2d24bd9e5c724c2f9f57131f4ac9fa66c13f6f144d&=&width=2592&height=1100" className={styles.image4} alt="Description de l'image" width="1942" height="10" />
          <footer className={styles.footer} id="aboutTarget">
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <a href="/legal">Informations légales</a>
          <a href="/privacy">Politique de confidentialité</a>
          <a href="/terms">Conditions d utilisation</a>
        </div>
        <div className={styles.footerSocials}>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
      </div>
    </div>
    
  )
}

