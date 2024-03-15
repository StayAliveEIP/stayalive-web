"use client";
import Navbar from './components/NavbarC'
import styles from './navbar.module.css';
import { ImagesSlider } from "./components/ui/images-slider";
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const images = [
    "/mockupStayAliveER.png",
    "/StayAliveUpMockup.png",
    "/stayAlive_mockup_Large.png",
  ];
  return (
    <div>
      <Navbar isLoginPage={false} />
      <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Tous les héros ne portent pas <br /> tous une cape
        </motion.p>
        <Link href="/inscription/sauveteur">
        <button className="px-4 py-2 backdrop-blur-sm border bg-[#c42f30]/10 border-[#c42f30]/20 text-white mx-auto text-center rounded-full relative mt-4 hover:bg-[#c42f30]/50">
          <span>Nous rejoindre →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-[#c42f30] to-transparent" />
        </button>
        </Link>
      </motion.div>
    </ImagesSlider>
      <h1 className={styles.title}>LA MISSION ?</h1>
      <h1 className={styles.subtitle}>Sauver des vies</h1>
      <h2 className={styles.text}>Téléchargez gratuitement l’application StayAlive</h2>
      <Image src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-travel-awards-globestamp-7.png" className={styles.appstore} alt="Description de l'image" width="1942" height="10" />
<div className="bg-gray-50/90 py-12">
  <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6">
    <div className="space-y-3 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Sauvez des vies près de chez vous !</h1>
      <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        Stay Alive permet aux centres d’appels de pouvoir notifier une communauté de soignant afin d’intervenir sur des urgences !
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
      <div className="flex items-center space-x-4">
        <div className="w-30 h-30 overflow-hidden rounded-full">
          <Image
            alt="Logo"
            className="object-contain"
            src="/clipart31946544.png"
            width="96"
            height="96"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-left">Localisez les défibrillateurs</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-left">Trouvez facilement les défibrillateurs autour de vous partout en France</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-30 h-30 rounded-full">
          <Image
            alt="Logo"
            className="object-contain"
            src="/pngwing.com4.png"
            width="150"
            height="150"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-left">Apprenez les gestes de premiers secours</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-left">Formez-vous grâce aux partenaires de StayAlive pour les urgences.</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-30 h-30 rounded-full">
          <Image
            alt="Logo"
            className="object-contain"
            src="/emergency-call-141633.png"
            width="150"
            height="150"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-left">Rejoignez la communauté</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-left">Participez à la communauté de sauveteurs volontaires et formés.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="w-full py-6 bg-[#E9E9E9]">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-center">
        <div className="flex flex-col gap-2 min-[400px]:gap-4 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-5xl">La Communauté</h2>
            <p className="max-w-[1500px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            En rejoignant la communauté vous permettez à une personne en urgence absolu d’être secourut plus rapidement. En effet chaque année
50000 personnes décèdent d’un arrêt cardiaque. La cause? Le temps de prise en charge est la principale cause d’un décès suite à un arrêt cardiaque. 
Ainsi seulement 10% des personnes touchés d’un arrêt cardiaque survivent. Pour pallier à ce problème grace à vous nous pouvons proposer
aux centres d’appel de centre hospitalier, pompier et samu une alternative afin de prodiguer les premiers secours au plus tôt pour garantir au
mieux la survie du patient.
            </p>
            <p className="text-lg font-bold text-red-500 dark:text-red-500 md:text-2xl">FAITES DE VOTRE QUOTIDIEN UNE VOCATION</p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:gap-4 items-center">
            <Link href="/inscription/sauveteur">
            <button className="bg-[#c42f30] px-4 py-2 relative max-w-[200px] text-white">
              INSCRIVEZ-VOUS
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

          <div className={styles.informationContainer2}></div>
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
  )
}

