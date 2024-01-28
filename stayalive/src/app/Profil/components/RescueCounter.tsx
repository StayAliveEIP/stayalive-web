import React from 'react';
import styles from './Rescue.module.css';

// Définissez une interface pour les props
interface RescueCounterProps {
  count: number; // Spécifiez que 'count' est un nombre
}

function RescueCounter({ count }: RescueCounterProps) {
  return (
    <div className={styles.rescueSection}>
      <h2 className={styles.rescueTitle}>Nombre de Sauvetage</h2>
      <div className={styles.circle}>
        {count}
      </div>
    </div>
  );
}

export default RescueCounter;
