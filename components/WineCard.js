import styles from '@/styles/WineCard.module.css'
import React, { useState } from 'react';

function WineCard(props) {

  const [showOverlay, setShowOverlay] = useState(false);

  function handleImageClick() {
    setShowOverlay(true);
  }

  function handleOverlayClose() {
    setShowOverlay(false);
  }

  const overlayStyle = setShowOverlay ? `${styles.overlay}` : `${styles.closedoverlay}`

  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={props.imageUrl}
        alt={props.termek}
      />
      <div className={styles.content}>
        <p className={styles.termek}>{props.termek}</p>
      </div>
      <div className={`${styles.overlay} ${showOverlay ? styles.show : ''}`}>
        {showOverlay && (<div>
          <div className={styles.closeButton}>
            <button className="pressable" onClick={handleOverlayClose}>X</button>
          </div>
          <p>Évjárat: {props.evjarat}</p>
          <p>Szín: {props.szin}</p>
          {/* <p>Karakter: {props.karakter}</p> */}
          <p>Kategória: {props.kategoria}</p>
          <p>Borvidék: {props.borvidek}</p>
          <p>Kiszerelés: {props.kiszereles}</p>
          <p>Ár: {props.ar}</p>
          <h2>{props.termek}</h2>
        </div>
        )}
      </div>
      {!showOverlay && (
        <div className={styles.infoButton}>
          <button className="pressable" onClick={handleImageClick}>+</button>
        </div>
      )}
    </div>
  );
}


export default WineCard;
