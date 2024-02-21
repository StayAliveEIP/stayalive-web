"use client";
import Navbar from '../../components/NavbarC';
import styles from './connexion.module.css';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Toaster, toast } from 'sonner';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      console.log('email', email);
      console.log('password', password);
      const response = await fetch('https://api.stayalive.fr/call-center/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        console.log('Connexion réussie !');
        const data = await response.json();
        localStorage.setItem('accessToken', data.accessToken); // Stockage du token
        const errorMessage = data.message;
        toast.success(errorMessage);
        router.push('/center'); // Redirection vers le tableau de bord
      } else {
        // Gérez les erreurs ici
        const data = await response.json();
        const errorMessage = data.message;
        toast.error(errorMessage);
        console.error('Erreur lors de la connexion');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion', error);
      toast.error('Erreur lors de la connexion');
    }
  };

  return (
    <div>
      <Navbar isLoginPage={true} />
      <Toaster />
      <div className="max-w-sm mx-auto my-10 bg-white rounded-lg shadow-md">
        <div className="bg-gray-700 text-white text-xl font-semibold py-4 px-6 rounded-t-lg">Connexion</div>
        <form className="space-y-6 py-6 px-8">
        <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>Mot de passe</label>
              <input
                type="password"
                id="password"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.buttonsContainer}>
              {/* Les boutons des réseaux sociaux ici */}
            </div>
            <div className="flex justify-center">
              <button className="bg-red-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-700" onClick={handleSubmit} type='button'>
              Se connecter
            </button>
            </div>
            <div className={styles.returnButton}>
              <Link href="/connexion">
                <button className={styles.returnButtonContent}>
                  <FiArrowLeft className={styles.returnButtonIcon} />
                  <span className={styles.returnButtonText}>Retour</span>
                </button>
              </Link>
            </div>
        </form>
      </div>
    </div>
  );
}
