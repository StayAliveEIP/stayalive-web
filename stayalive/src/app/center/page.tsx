"use client";
// Importations nécessaires
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBarCenter from '../components/NavBarCenter';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styles from './center.module.css';

// Configuration du style du conteneur Google Map
const containerStyle = {
  width: '100%',
  height: '700px'
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
  intervention: Intervention | null;
}

// Coordonnées du centre de la carte
const center = {
  lat: -3.745,
  lng: -38.523
};

// Énumération des statuts d'intervention
enum InterventionStatus {
  EnCours = 'En cours',
  EnAttente = 'En attente',
  Termine = 'Terminé',
}

// Interface pour les interventions
interface Intervention {
  id: string;
  status: InterventionStatus;
  rescuerAssigned: {
    id: string;
    firstname: string;
    lastname: string;
    phone: string;
  };
  address: string;
  info: string;
}

// Composant pour le modal des détails d'une intervention
const Modal: React.FC<Props> = ({ isOpen, onClose, intervention }) => {
  if (!isOpen || !intervention) return null;

  // Vérifier si 'rescuerAssigned' est présent avant d'accéder à ses propriétés
  const rescuerAssigned = intervention.rescuerAssigned || {};
  const { firstname = '', lastname = '', phone = '' } = rescuerAssigned;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  console.log(intervention);
  return (
    <div className="modalOverlay" onClick={handleOverlayClick}>
      <div className="modalContent">
        <h2>Détails Intervention</h2>
        <p>Nom et prénom du sauveteur: {firstname} {lastname}</p>
        <p>Numéro de téléphone du sauveteur: {phone}</p>
        <p>Numéro intervention: {intervention.id}</p>
        <p>Statut intervention: {intervention.status}</p>
        <p>Adresse intervention: {intervention.address}</p>
        <p>Informations supplémentaires: {intervention.info}</p>
        <button>Chat en ligne</button>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

// Composant principal pour la page du centre d'appel
export default function Center() {
  const [selectedIntervention, setSelectedIntervention] = useState<Intervention | null>(null);
  const [interventions, setInterventions] = useState<Intervention[]>([]);
  const [accessToken, setAccessToken] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      router.push('/connexion');
    } else {
      setAccessToken(token);
      fetchInterventions(token);
    }
  }, [router]);

  // Fonction pour charger les interventions depuis l'API
  const fetchInterventions = async (token: string) => {
    try {
      const response = await fetch('http://api.stayalive.fr:3000/call-center/emergency', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        setInterventions(data);
        
      } else {
        console.error('Erreur lors du chargement des interventions');
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des interventions', error);
    }
  };

  // Fonction pour gérer le clic sur une ligne du tableau
  const handleRowClick = (intervention: Intervention) => {
    setSelectedIntervention(intervention);
  };

  // Fonction pour gérer la fermeture du modal
  const handleCloseModal = () => {
    setSelectedIntervention(null);
  };

  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    router.push('/connexion');
  };

  return (
    <div>
      <NavBarCenter isLoginPage={false} />
      <button onClick={handleLogout} className={styles.logoutButton}>Déconnexion</button>
      <LoadScript googleMapsApiKey="VOTRE_CLE_API_GOOGLE_MAPS">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} />
      </LoadScript>
      <div className="tableContainer">
        <table className={styles.styledTable}>
          <thead>
            <tr>
              <th>Numéro intervention</th>
              <th>Nom Sauveteur</th>
              <th>Adresse</th>
              <th>Statut intervention</th>
            </tr>
          </thead>
          <tbody>
            {interventions.map((intervention) => (
              <tr key={intervention.id} onClick={() => handleRowClick(intervention)}>
              <td>{intervention.id}</td>
              <td>
                {intervention.rescuerAssigned 
                  ? `${intervention.rescuerAssigned.firstname} ${intervention.rescuerAssigned.lastname}`
                  : 'Non assigné'}
              </td>
              <td>{intervention.address}</td>
              <td>{intervention.status}</td>
            </tr>
            
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={!!selectedIntervention} onClose={handleCloseModal} intervention={selectedIntervention} />
    </div>
  );
}
