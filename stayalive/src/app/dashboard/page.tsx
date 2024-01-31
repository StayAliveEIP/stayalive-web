"use client";
import React, { useEffect, useRef, useMemo, useState } from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import { Chart, BarController, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import NavbarD from '../components/NavBarD';
import { useRouter } from 'next/navigation';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const defibrillatorCount = 123;

export default function Dashboard() {
  const achievements = [
    { id: 1, status: true, text: "PROFILE COMPLET" },
    { id: 2, status: true, text: "SIGNAL TON PREMIER DEFIBRILLATEUR" },
    { id: 3, status: false, text: "CONNEXION JOURNALIERE" },
    { id: 4, status: false, text: "INVITES UN AMIS" },
    { id: 5, status: false, text: "TON PREMIER SAUVETAGE" },
    { id: 6, status: false, text: "TON PREMIER ACHAT STAYALIVE" },
  ];

  const [accessToken, setAccessToken] = useState('');
  const chartRef = useRef(null);
  const router = useRouter();

  const data = useMemo(() => ({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', "Nov", "Dec"],
    datasets: [{
        label: 'Ventes',
        data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }]
  }), []);

  interface Sauvegarde {
    id: string;
    status: string;
    address: string;
    info: string;
  }
  
  
  // In your component, type the sauvegardes state with the interface
  const [sauvegardes, setSauvegardes] = useState<Sauvegarde[]>([]);

  const options = useMemo(() => ({
    scales: {
      y: {
          beginAtZero: true
      }
  }
  }), []);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      router.push('/connexion');
    } else {
      setAccessToken(token);
      fetchInterventionsHistory(token);
    }

    Chart.register(BarController, BarElement, CategoryScale, LinearScale);

    if (chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: 'bar',
        data: data,
        options: options
      });

      return () => chartInstance.destroy();
    }
  }, [data, options, router]);

  const fetchInterventionsHistory = async (token: string) => {
    try {
      const response = await fetch('https://api.stayalive.fr/rescuer/emergency/history', {
        method: 'GET',
        headers: {
          'Authorization': `${token}`,
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        const data = await response.json();
        setSauvegardes(data);
      } else {
        console.error('Erreur lors de la récupération de l historique des interventions');
      }
    } catch (error) {
      console.error('Erreur lors de la requête', error);
    }
  };

  return (
    <div>
      <NavbarD isLoginPage={false} />
      <div className={styles['card-container']}>
    <div className={`${styles.card}`}>
    <div className={styles['card-image']}>
        <Image
          src="https://media.discordapp.net/attachments/1130401857890697285/1168372445581947001/63c051f6693f6a8688a1530f_5_Common_CPR_Side_Effects_and_Complications_of_CPR.png?ex=655186a2&is=653f11a2&hm=f2a638f68f39d19d6c58a8c190384debd4cc855e5bfd1802509ff3868da09128&=&width=1000&height=1294"
          alt="Description de l'image"
          width={300}
          height={200}
        />
      </div>
      <h2 className={styles['card-title']}>Sauveteur</h2>
      <p className={styles['card-text']}>Vous pouvez consulter à n’importe quel moment l’historique de vos sauvetages.</p>
      <button className={styles['card-button']}>Voir plus</button>
    </div>
    <div className={`${styles.card}`}>
    <Image
          src="https://media.discordapp.net/attachments/1130401857890697285/1168374816160624730/righ-facing-white-glow-e1564330228822.png?ex=655188d7&is=653f13d7&hm=9c5e1248ba1fda75d7d55215e85098f5e134466c3b0413f8f8f7b295651370ab&=&width=1726&height=1294"
          alt="Description de l'image"
          width={300}
          height={200}
        />
      <h2 className={styles['card-title']}>Défibrilateur</h2>
      <p className={styles['card-text']}>Vous pouvez consulter à n’importe quel moment l’historique de vos signalements de défribilateur.</p>
      <button className={styles['card-button']}>Voir plus</button>
    </div>
    <div className={`${styles.card}`}>
    <Image
          src="https://media.discordapp.net/attachments/1130401857890697285/1168377068464123946/72-724011_transparent-achievement-icon-png-success-flat-icon-png.png?ex=65518af0&is=653f15f0&hm=f4d47f28c596820923b54e3cc41dfd5a395d6dd3676094848e05956dad3e1f50&=&width=1720&height=1290"
          alt="Description de l'image"
          width={300}
          height={200}
        />
      <h2 className={styles['card-title']}>Succès</h2>
      <p className={styles['card-text']}>Vous pouvez consulter à n’importe quel moment vos succès et ceux que vous n’avez pas encore débloqué.</p>
      <button className={styles['card-button']}>Voir plus</button>
    </div>
    </div>
    <h2 className={styles.tableTitle}>Historique de vos Sauvetages</h2>
      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr className={styles.tableHeader}>
              <th className={styles.tableCell}>Intervention</th>
              <th className={styles.tableCell}>Lieux</th>
              <th className={styles.tableCell}>Date</th>
            </tr>
          </thead>
          <tbody>
              {sauvegardes.map((sauvetage) => (
                <tr key={sauvetage.id} className={styles.tableRow}>
                  <td className={styles.tableCell}>{sauvetage.id}</td>
                  <td className={styles.tableCell}>{sauvetage.address}</td>
                  <td className={styles.tableCell}>{sauvetage.info}</td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
    <div className={styles['achievement-section']}>
        <h1 className={styles['achievement-title']}>Vos Succès</h1>
        <div className={styles['achievement-list']}>
          {achievements.map((achievement) => (
            <div key={achievement.id} className={`${styles.achievement} ${achievement.status ? styles.completed : styles.incomplete}`}>
              {achievement.text}
            </div>
          ))}
        </div>
      </div>
      <div className={styles['chart-container']}>
                <h3 className={styles['chart-title']}>Heures de connexion par mois</h3>
                <canvas ref={chartRef}></canvas>
            </div>
            <div className={styles['stats-container']}>
        <p>Nombre de Défibrillateur signalés</p>
        <div className={styles['stats-circle']}>
          {defibrillatorCount}
        </div>
      </div>
    </div>
  );
}


