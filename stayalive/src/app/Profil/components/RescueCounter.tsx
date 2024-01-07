import React from 'react'
import styles from './Rescue.module.css'

function RescueCounter({ count }) {
    return (
      <div className={styles.rescueSection}>
        <h2 className={styles.rescueTitle}>Nombre de Sauvetage</h2>
        <div className={styles.circle}>
          {count}
        </div>
      </div>
    )
  }
  
  export default RescueCounter