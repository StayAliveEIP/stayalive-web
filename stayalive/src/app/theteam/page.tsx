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
    linkedinUrl: 'https://www.linkedin.com/in/matthieu-queru-821b1319a/',
  },
  {
    name: 'Martin Leblancs',
    role: 'Développeur Mobile',
    description: 'Spécialiste de React native.',
    image: 'https://media.discordapp.net/attachments/1130401857890697285/1205439608268263434/c09803dfa498a20aa3536f16bdc89fd5.png?ex=65d8601e&is=65c5eb1e&hm=a7047defe35202194374cffd86d99511cdb27a343f970840f840b80fe25228eb&=&format=webp&quality=lossless&width=400&height=400',
    linkedinUrl: 'https://www.linkedin.com/in/martin-leblancs-7a2154209/',
  },
  {
    name: 'Noel Varga',
    role: 'Développeur Mobile',
    description: 'Spécialiste Swift.',
    image: 'https://media.discordapp.net/attachments/1130401857890697285/1205439408229056553/56f68ce9c100301209dae7ba05febb38.png?ex=65d85fee&is=65c5eaee&hm=3566cba693cc516031d3b5cd3c789f5175cca558b2db02db52f5d5a8f8013513&=&format=webp&quality=lossless&width=1000&height=1000',
    linkedinUrl: 'https://www.linkedin.com/in/noelvarga/',
  },
  {
    name: 'Florian Damiot',
    role: 'Développeur Backend',
    description: 'Spécialiste NestJS.',
    image: 'https://media.discordapp.net/attachments/1130401857890697285/1205438970289201195/94527d0407ea4baabadaa886e8b88143.png?ex=65d85f86&is=65c5ea86&hm=b3e0c034254c05476ca47f4adc343e81000e813222d6b3dae10b42351c1dac3b&=&format=webp&quality=lossless&width=512&height=512',
    linkedinUrl: 'https://www.linkedin.com/in/florian-d-b28570182/',
  },
  {
    name: 'Bastien Cantet',
    role: 'Développeur Backend',
    description: 'Spécialiste NestJS.',
    image: 'https://media.discordapp.net/attachments/1130401857890697285/1205439189924057098/87f035fd61bc154b6cea59b37fcb6fbd.png?ex=65d85fba&is=65c5eaba&hm=734f0286364fe5e58555925e3ad3ea1e520e190512d0a2828443c71e6feb5a7d&=&format=webp&quality=lossless&width=700&height=700',
    linkedinUrl: 'https://www.linkedin.com/in/bastien-cantet-696a07206/',
  },
  {
    name: 'Félix Buisson',
    role: 'Développeur FrontEnd',
    description: 'Spécialiste NextJS.',
    image: 'https://media.discordapp.net/attachments/1130401857890697285/1205439819153547265/94faf3b55894aa411e8357335ae0ff54.png?ex=65d86050&is=65c5eb50&hm=4195947dde5439740ce44a5ffb7ae198f3da81a38e6c0a5276cfe7098e453e50&=&format=webp&quality=lossless&width=512&height=512',
    linkedinUrl: 'https://www.linkedin.com/in/f%C3%A9lix-buisson-299069182/',
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
<div className="space-y-12">
      <Navbar isLoginPage={false} />
      <div className="text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 mt-8">Une équipe de 6 développeurs</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8 p-4">
  {teamMembers.map((member, index) => (
    <div key={index} className="w-48 flex flex-col items-center text-center bg-white rounded-lg shadow-md p-4 relative">
      <Image
        src={member.image}
        alt={member.name}
        width={150}
        height={150}
        className="rounded-full"
      />
      <h3 className="mt-3 font-bold">{member.name}</h3>
      <p className="text-sm text-gray-700">{member.role}</p>
      <p className="text-sm text-gray-600 mt-2 mb-8">{member.description}</p> {/* mb-8 pour assurer l'espace pour le bouton LinkedIn */}
      <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="absolute bottom-2 right-2 bg-transparent hover:bg-black text-black hover:text-white rounded-full px-3 py-1 text-sm transition-all duration-150 ease-in-out border border-black hover:border-transparent">LinkedIn</a>
    </div>
  ))}
</div>

      <div className="text-center">
  <h2 className="text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 mt-8">Notre Parcours</h2>
  <div className="mt-10 mx-auto max-w-4xl">
    {timelineEvents.map((event, index) => (
      <div key={index} className="flex flex-col md:flex-row items-center md:items-start md:justify-center py-4">
        <div className="md:flex-1 px-4">
          <div className="p-4 bg-gray-50 shadow rounded-lg">
            <h3 className="text-xl font-semibold text-red-600">{event.title}</h3>
            <p className="text-gray-600 italic">{event.date}</p>
            <p className="text-gray-600 mt-2">{event.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


      <div className="bg-white p-8 text-center shadow-md">
        <h2 className="text-3xl font-bold text-red-600">Nous Contacter</h2>
        <p className="mt-4 text-xl text-gray-800">Adresse email: stayalive.eip@gmail.com</p>
        <div className="mt-8">
          <Image
            src="/contact.png"
            alt="Contact Us"
            width={400}
            height={300}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}