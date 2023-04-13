import styles from '@/styles/WineCard.module.css'
import React, { useState } from 'react';

function ResultCard(props) {

  return (
    <div className={styles.card}>
      <div>Kiválasztott borok:</div>
      {props.wines.map( (wine) => (
        <div key={wine.termek}
        >
          {wine.termek}
        </div>
      )

      )}
    </div>
  );
}


export default ResultCard;
