"use client";
import React, { useEffect, useState } from 'react';
import NavbarD from '../components/NavBarD';
import styles from './profil.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import RescueCounter from './components/RescueCounter';

export default function Profil() {
  const [accessToken, setAccessToken] = useState('');
  const [profileData, setProfileData] = useState(null);
  const router = useRouter();

  const signalements = [
    { numero: '609', lieux: '123 Rue de Signalement', date: '12/01/2023' },
    { numero: '608', lieux: '456 Rue de Signalement', date: '10/01/2023' }
    // ... autres données ...
  ];

  const [sauvegardes, setSauvegardes] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      router.push('/connexion');
    } else {
      setAccessToken(token);
      fetchProfileData(token);
      fetchInterventionsHistory(token); // Appel de la nouvelle fonction pour récupérer les interventions
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('accessToken'); // Supprime le token du stockage local
    router.push('/connexion'); // Redirige vers la page de connexion
  };

  const fetchInterventionsHistory = async (token: string) => {
    try {
      const response = await fetch('http://api.stayalive.fr:3000/rescuer/emergency/history', {
        method: 'GET',
        headers: {
          'Authorization': `${token}`,
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        const data = await response.json();
        setSauvegardes(data); // Mise à jour de l'état avec les données reçues
      } else {
        console.error('Erreur lors de la récupération de l historique des interventions');
      }
    } catch (error) {
      console.error('Erreur lors de la requête', error);
    }
  };

  const fetchProfileData = async (token: string) => {
    try {
      console.log('token', token);
      const response = await fetch('http://api.stayalive.fr:3000/rescuer/account', { // Remplacez par l'URL de votre API
        method: 'GET',
        headers: {
          'Authorization': `${token}`,
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        const data = await response.json();
        setProfileData(data);
      } else {
        // Gérez les erreurs ici
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données du profil', error);
    }
  };

  

  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  

  const triggerFileInput = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };
  


  const [showEmailModal, setShowEmailModal] = useState(false);
  const [newEmail, setNewEmail] = useState('');

  const openEmailModal = () => setShowEmailModal(true);
  const closeEmailModal = () => setShowEmailModal(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewEmail(e.target.value);

  const submitNewEmail = async () => {
    try {
      const response = await fetch('http://api.stayalive.fr:3000/rescuer/account/change-email', {
        method: 'POST',
        headers: {
          'Authorization': `${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: newEmail })
      });

      if (response.ok) {
        // Gérez la réponse réussie ici
        closeEmailModal();
      } else {
        // Gérez l'erreur ici
      }
    } catch (error) {
      console.error('Erreur lors de la modification de l email', error);
    }
  };


  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [newPhone, setNewPhone] = useState('');

  const openPhoneModal = () => setShowPhoneModal(true);
  const closePhoneModal = () => setShowPhoneModal(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewPhone(e.target.value);

  const submitNewPhone = async () => {
    try {
      const response = await fetch('http://api.stayalive.fr:3000/rescuer/account/change-phone', {
        method: 'POST',
        headers: {
          'Authorization': `${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phone: newPhone })
      });

      if (response.ok) {
        // Gérez la réponse réussie ici
        closePhoneModal();
      } else {
        // Gérez l'erreur ici
      }
    } catch (error) {
      console.error('Erreur lors de la modification du téléphone', error);
    }
  };


  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [passwordForDeletion, setPasswordForDeletion] = useState('');

  const openDeleteModal = () => setShowDeleteModal(true);
  const closeDeleteModal = () => setShowDeleteModal(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPasswordForDeletion(e.target.value);

  const submitAccountDeletion = async () => {
    try {
      const response = await fetch('http://api.stayalive.fr:3000/rescuer/account', {
        method: 'DELETE',
        headers: {
          'Authorization': `${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password: passwordForDeletion })
      });

      if (response.ok) {
        // Gérez la suppression réussie du compte ici
        closeDeleteModal();
        // Redirigez ou déconnectez l'utilisateur
      } else {
        // Gérez l'erreur ici
      }
    } catch (error) {
      console.error('Erreur lors de la suppression du compte', error);
    }
  };


  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const openPasswordModal = () => setShowPasswordModal(true);
  const closePasswordModal = () => setShowPasswordModal(false);

  const handleOldPasswordChange = (e) => setOldPassword(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);

  const submitNewPassword = async () => {
    try {
      const response = await fetch('http://api.stayalive.fr:3000/rescuer/account/change-password', {
        method: 'POST',
        headers: {
          'Authorization': `${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ oldPassword, newPassword })
      });

      if (response.ok) {
        // Gérez la réponse réussie ici
        closePasswordModal();
      } else {
        // Gérez l'erreur ici
      }
    } catch (error) {
      console.error('Erreur lors du changement de mot de passe', error);
    }
  };

  return (
    <div>
  <NavbarD isLoginPage={false} />
  <div className={styles.accessTokenDisplay}>
    Access Token: {accessToken}
  </div>
  <div className={styles.buttonContainer}>
    <button onClick={handleLogout} className={styles.logoutButton}>
      Se déconnecter
    </button>
    <button onClick={openDeleteModal} className={styles.deleteAccountButton}>
      Supprimer mon compte
    </button>

    {showDeleteModal && (
      <div className={styles.deleteModal}>
        <p>Entrez votre mot de passe pour confirmer</p>
        <input type="password" value={passwordForDeletion} onChange={handlePasswordChange} />
        <button onClick={submitAccountDeletion}>Confirmer</button>
        <button onClick={closeDeleteModal}>Annuler</button>
      </div>
    )}
  </div>

  <div className={styles.container}>
    <div className={styles.leftSection}>
      <div className={styles.photoSection}>
        <Image
          src={selectedImage || "https://media.discordapp.net/attachments/1130401857890697285/1168505822792388678/telechargement_2.jpeg"}
          alt="Photo de profil"
          width={150}
          height={150}
          className={styles.profileImage}
        />
        <button className={styles.changePhotoBtn} onClick={triggerFileInput}>Changer la photo</button>
        <button onClick={openPasswordModal} className={styles.changePasswordButton}>
          Changer de mot de passe
        </button>
        <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleImageChange} />
      </div>
      
      <div className={styles.infoWrapper}>
        <div className={styles.infoSection}>
          <h2>{profileData ? `${profileData.lastname} ${profileData.firstname}` : ''}</h2>
          <div className={styles.detailLine}>
            <span>Email: {profileData ? profileData.email.email : ''}</span>
            <div className={styles.detailActions}>
              <button className={styles.editButton} onClick={openEmailModal}>Modifier</button>
              <div className={profileData && profileData.email.verified ? styles.verified : styles.notVerified}>
                {profileData && profileData.email.verified ? 'Vérifié' : 'Non vérifié'}
              </div>
            </div>
          </div>
          <div className={styles.detailLine}>
            <span>Téléphone: {profileData ? profileData.phone.phone : ''}</span>
            <div className={styles.detailActions}>
              <button className={styles.editButton} onClick={openPhoneModal}>Modifier</button>
              <div className={profileData && profileData.phone.verified ? styles.verified : styles.notVerified}>
                {profileData && profileData.phone.verified ? 'Vérifié' : 'Non vérifié'}
              </div>
            </div>
          </div>
        </div>
        {showEmailModal && (
          <div className={styles.emailModal}>
            <input type="email" value={newEmail} onChange={handleEmailChange} />
            <button onClick={submitNewEmail}>Confirmer</button>
            <button onClick={closeEmailModal}>Annuler</button>
          </div>
        )}
        {showPhoneModal && (
          <div className={styles.phoneModal}>
            <input type="tel" value={newPhone} onChange={handlePhoneChange} />
            <button onClick={submitNewPhone}>Confirmer</button>
            <button onClick={closePhoneModal}>Annuler</button>
          </div>
        )}
        {showPasswordModal && (
          <div className={styles.passwordModal}>
            <input type="password" value={oldPassword} onChange={handleOldPasswordChange} placeholder="Ancien mot de passe" />
            <input type="password" value={newPassword} onChange={handleNewPasswordChange} placeholder="Nouveau mot de passe" />
            <button onClick={submitNewPassword}>Confirmer</button>
            <button onClick={closePasswordModal}>Annuler</button>
          </div>
        )}
      </div>
    </div>

    <div className={styles.tablesWrapper}>
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
            {sauvegardes.map((sauvetage, index) => (
              <tr key={index} className={styles.tableRow}>
                <td className={styles.tableCell}>{sauvetage.intervention}</td>
                <td className={styles.tableCell}>{sauvetage.lieux}</td>
                <td className={styles.tableCell}>{sauvetage.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <h2 className={styles.tableTitle}>Historique de vos Signalements</h2>
      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr className={styles.tableHeader}>
              <th className={styles.tableCell}>Numéro</th>
              <th className={styles.tableCell}>Lieux</th>
              <th className={styles.tableCell}>Date</th>
            </tr>
          </thead>
          <tbody>
            {signalements.map((signalement, index) => (
              <tr key={index} className={styles.tableRow}>
                <td className={styles.tableCell}>{signalement.numero}</td>
                <td className={styles.tableCell}>{signalement.lieux}</td>
                <td className={styles.tableCell}>{signalement.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <RescueCounter count={42} />
</div>
  )
}
