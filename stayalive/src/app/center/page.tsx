"use client";
import NavBarCenter from '../components/NavBarCenter';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styles from './center.module.css';
import { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '700px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

enum InterventionStatus {
  EnCours = 'En cours',
  EnAttente = 'En attente',
  Termine = 'Terminé',
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  intervention: Intervention | null; // Utilisez l'interface Intervention définie précédemment
}

interface Intervention {
  id: number;
  sauveteur: string;
  adresse: string;
  statut: InterventionStatus;
}

const interventions: Intervention[] = [
  { id: 1, sauveteur: 'Matthieu Queru', adresse: 'Adresse 1', statut: InterventionStatus.EnCours },
  { id: 2, sauveteur: 'Martin Leblancs', adresse: 'Adresse 2', statut: InterventionStatus.EnAttente },
  { id: 3, sauveteur: 'Florian Damiot', adresse: 'Adresse 1', statut: InterventionStatus.EnCours },
  { id: 4, sauveteur: 'Noel Varga', adresse: 'Adresse 2', statut: InterventionStatus.EnAttente },
  { id: 5, sauveteur: 'Felix Buisson', adresse: 'Adresse 1', statut: InterventionStatus.EnCours },
  { id: 6, sauveteur: 'Bastien Cantet', adresse: 'Adresse 2', statut: InterventionStatus.Termine },
  // ... autres interventions
];

const getStatusClassName = (statut: InterventionStatus) => {
  switch (statut) {
    case InterventionStatus.EnCours:
      return styles['status-en-cours'];
    case InterventionStatus.EnAttente:
      return styles['status-en-attente'];
    case InterventionStatus.Termine:
      return styles['status-termine'];
    default:
      return "";
  }
};

const Modal: React.FC<Props> = ({ isOpen, onClose, intervention }) => {
  if (!isOpen || !intervention) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className="modalOverlay" onClick={handleOverlayClick}>
      <div className="modalContent">
      <h2>Détails Intervention</h2>
        <p>Nom et prénom du sauveteur: {intervention.sauveteur}</p>
        <p>Numéro de téléphone du sauveteur: </p>
        <p>Numéro intervention: {intervention.id}</p>
        <p>Statut intervention: {intervention.statut}</p>
        <p>Adresse intervention: {intervention.adresse}</p>
        <button>Chat en ligne</button>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default function Center() {
  const [selectedIntervention, setSelectedIntervention] = useState<Intervention | null>(null);

  const handleRowClick = (intervention: Intervention) => {
    console.log("Intervention clicked:", intervention);
    setSelectedIntervention(intervention);
  };

  const handleCloseModal = () => {
    setSelectedIntervention(null);
  };
  
  return (
    <div>
      <NavBarCenter isLoginPage={false} />
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
        </GoogleMap>
      </LoadScript>
      <div className="tableContainer"> {/* Classe pour centrer le tableau */}
        <table className={styles.styledTable}> {/* Classe pour styliser le tableau */}
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
                <td>{intervention.sauveteur}</td>
                <td>{intervention.adresse}</td>
                <td className={getStatusClassName(intervention.statut)}>
  {intervention.statut}
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={!!selectedIntervention}
        onClose={handleCloseModal}
        intervention={selectedIntervention}
      />
    </div>
  )
}
