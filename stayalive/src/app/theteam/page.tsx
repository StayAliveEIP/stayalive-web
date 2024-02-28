import React from 'react';
import Navbar from './../components/NavbarC';
import styles from './TheTeam.module.css';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Matthieu Queru',
    role: 'Chef de projet / développeur Frontend',
    description: 'Responsable du projet sous méthode scrum / React/NextJS.',
    image: 'https://media.discordapp.net/attachments/1130401857890697285/1205440860930572348/Dayz-Game.png?ex=65d86149&is=65c5ec49&hm=3dcf26ef9d0ccdda40e12bfdad1da0039a2f141dfa1cdbc0f64ed85ec6b1052e&=&format=webp&quality=lossless&width=1200&height=1200', // Mettez ici le chemin vers l'image
  },
  {
    name: 'Martin Leblancs',
    role: 'Développeur Mobile',
    description: 'Spécialiste de React native.',
    image: 'https://media.discordapp.net/attachments/1130401857890697285/1205439608268263434/c09803dfa498a20aa3536f16bdc89fd5.png?ex=65d8601e&is=65c5eb1e&hm=a7047defe35202194374cffd86d99511cdb27a343f970840f840b80fe25228eb&=&format=webp&quality=lossless&width=400&height=400',
  },
  {
    name: 'Noel Varga',
    role: 'Développeur Mobile',
    description: 'Spécialiste Swift.',
    image: 'https://media.discordapp.net/attachments/1130401857890697285/1205439408229056553/56f68ce9c100301209dae7ba05febb38.png?ex=65d85fee&is=65c5eaee&hm=3566cba693cc516031d3b5cd3c789f5175cca558b2db02db52f5d5a8f8013513&=&format=webp&quality=lossless&width=1000&height=1000',
  },
  {
    name: 'Florian Damiot',
    role: 'Développeur Backend',
    description: 'Spécialiste NestJS.',
    image: 'https://media.discordapp.net/attachments/1130401857890697285/1205438970289201195/94527d0407ea4baabadaa886e8b88143.png?ex=65d85f86&is=65c5ea86&hm=b3e0c034254c05476ca47f4adc343e81000e813222d6b3dae10b42351c1dac3b&=&format=webp&quality=lossless&width=512&height=512',
  },
  {
    name: 'Bastien Cantet',
    role: 'Développeur Backend',
    description: 'Spécialiste NestJS.',
    image: 'https://media.discordapp.net/attachments/1130401857890697285/1205439189924057098/87f035fd61bc154b6cea59b37fcb6fbd.png?ex=65d85fba&is=65c5eaba&hm=734f0286364fe5e58555925e3ad3ea1e520e190512d0a2828443c71e6feb5a7d&=&format=webp&quality=lossless&width=700&height=700',
  },
  {
    name: 'Félix Buisson',
    role: 'Développeur FrontEnd',
    description: 'Spécialiste NextJS.',
    image: 'https://media.discordapp.net/attachments/1130401857890697285/1205439819153547265/94faf3b55894aa411e8357335ae0ff54.png?ex=65d86050&is=65c5eb50&hm=4195947dde5439740ce44a5ffb7ae198f3da81a38e6c0a5276cfe7098e453e50&=&format=webp&quality=lossless&width=512&height=512',
  },
];

const timelineEvents = [
  {
    date: 'Septembre - Octobre 2022',
    title: 'MoonShot',
    description: 'Idéalisation du Projet StayAlive.',
  },
  {
    date: 'Décembre 2022',
    title: 'FORWARD',
    description: 'Création du premier prototype.',
  },
  {
    date: 'Avril - Mai 2023',
    title: 'TEST & LEARN',
    description: 'Établissement de l\'intégration et de déploiement continus.',
  },
  {
    date: 'Juin - Octobre 2023',
    title: 'MANAGEMENT & PROCESS',
    description: 'Organisation de l\'environnement de production ainsi que de réunions hebdomadaires.',
  },
  {
    date: 'Novembre 2023 - Janvier 2024',
    title: 'FAST FORWARD',
    description: 'Projection sur la version bêta.',
  },
  {
    date: 'Février - Mai 2024',
    title: 'BETA & GROWTH HACKING',
    description: 'Exécution du plan bêta.',
  },
];

export default function TheTeam() {
  return (
    <div>
      <Navbar isLoginPage={false} />
      <h1 className={styles.teamTitle}>Une équipe de 6 développeurs</h1>
      <div className={styles.teamContainer}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.memberCard}>
            <Image
              src={member.image}
              alt={member.name}
              width={150}
              height={150}
              className={styles.memberImage}
            />
            <h3 className={styles.memberName}>{member.name}</h3>
            <p className={styles.memberRole}>{member.role}</p>
            <p className={styles.memberDescription}>{member.description}</p>
          </div>
        ))}
      </div>
      <h1 className={styles.teamTitle}>Notre Parcours</h1>
      <div className={styles.timelineContainer}>
        {timelineEvents.map((event, index) => (
          <div key={index} className={`${styles.timelineEvent} ${index % 2 === 0 ? styles.left : styles.right}`}>
            <div className={styles.timelineMarker}></div>
            <div className={styles.timelineContent}>
              <h3 className={styles.timelineTitle}>{event.title}</h3>
              <p className={styles.timelineDate}>{event.date}</p>
              <p className={styles.timelineDescription}>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center p-1 bg-white">
      <h1 className={styles.teamTitle}>Nous Contacter</h1>
      <p className="mt-2 text-xl text-gray-600">Adresse email: stayalive.eip@gmail.com</p>
      <div className="relative mt-10 flex w-full items-center justify-center">
        <img
          alt="Contact Us Illustration"
          className="max-w-sm"
          src="https://media.discordapp.net/attachments/1130401857890697285/1209839674944790618/DALLE_2024-02-21_21.30.41_-_Create_an_image_in_a_flat_design_style_depicting_a_male_customer_service_representative._He_should_be_seated_at_a_desk_deeply_focused_on_his_laptop._.webp?ex=65e86200&is=65d5ed00&hm=8dc355f622b681475a0095b53dffe53b56ede250b7675bb41e64495003d98486&=&format=webp&width=1294&height=1294"
          style={{
            aspectRatio: "1242/1200",
            objectFit: "cover",
          }}
          width="1242"
        />
      </div>
    </div>
    </div>
  );
}