"use client";
// Importations nécessaires
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBarCenter from '../components/NavBarCenter';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styles from './center.module.css';
import { Toaster, toast } from 'sonner';

// Configuration du style du conteneur Google Map
const containerStyle = {
  width: '100%',
  height: '700px'
};

interface ChatMessage {
  id: number;
  type: 'received' | 'sent';
  content: string;
}


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
  const [isChatOpen, setIsChatOpen] = useState(false);
  if (!isOpen || !intervention) return null;

  const handleChatButtonClick = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={handleOverlayClick}>
  <div className="bg-white p-6 rounded-lg max-w-lg w-full mx-4" onClick={e => e.stopPropagation()}>
    <h2 className="text-2xl font-bold mb-4">Détails de l&apos;Intervention</h2>
    <p className="mb-2">Nom et prénom du sauveteur: <span className="font-semibold">{firstname} {lastname}</span></p>
    <p className="mb-2">Numéro de téléphone du sauveteur: <span className="font-semibold">{phone}</span></p>
    <p className="mb-2">Numéro d&apos;intervention: <span className="font-semibold">{intervention.id}</span></p>
    <p className="mb-2">Statut de l&apos;intervention: <span className={`font-semibold ${intervention.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>{intervention.status}</span></p>
    <p className="mb-2">Adresse de l&apos;intervention: <span className="font-semibold">{intervention.address}</span></p>
    <p className="mb-4">Informations supplémentaires: <span className="font-semibold">{intervention.info}</span></p>
    <div className="flex justify-between">
    <button 
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      onClick={handleChatButtonClick}
    >
      Chat en ligne
    </button>
    {isChatOpen && <ChatWindow onClose={handleCloseChat} />}
    <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50" onClick={onClose}>Fermer</button>
    </div>
  </div>
</div>
  );
};

const ChatWindow: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, type: 'received', content: 'Bonjour, comment puis-je vous aider ?' },
    // Ajoutez d'autres messages simulés ici si nécessaire
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const newId = messages.length > 0 ? messages[messages.length - 1].id + 1 : 1;
    const message: ChatMessage = {
      id: newId,
      type: 'sent',
      content: newMessage,
    };

    setMessages([...messages, message]);
    setNewMessage(''); // Réinitialiser le champ de saisie
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Chat en direct</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <span>&times;</span>
        </button>
      </div>
      <div className="h-64 overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === 'received' ? 'justify-start' : 'justify-end'}`}>
            <div className={`p-2 rounded-lg m-2 ${message.type === 'received' ? 'bg-gray-100 max-w-xs' : 'bg-red-500 text-white max-w-xs'}`}>
              {message.content}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="border border-gray-300 rounded w-full p-2 text-sm mr-2"
          placeholder="Écrivez votre message ici..."
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSendMessage}
        >
          Envoyer
        </button>
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
      const response = await fetch('https://api.stayalive.fr/call-center/emergency', {
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
        const data = await response.json();
        const errorMessage = data.message;
        toast.error(errorMessage);
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
      <Toaster />
      <button onClick={handleLogout} className={styles.logoutButton}>Déconnexion</button>
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
