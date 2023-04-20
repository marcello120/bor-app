import React, { useState, useMemo, useRef, useEffect } from 'react'
import styles from '@/styles/Bortinder.module.css'
import TinderCard from 'react-tinder-card'
import WineCard from './WineCard'
import { wines } from '../data/wines'
import ResultCard from './ResultCard'


function BorTinderPage(props) {

  const db = props.wines;


  const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastDirection, setLastDirection] = useState()
  const [pickedWines, setPickedWines] = useState(new Set())
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)
  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < db.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    if (direction == "right") {
      console.log(direction);
      console.log(db[index]);
      console.log(pickedWines)
      setPickedWines(prevList => new Set(prevList.add(db[index])))
      console.log(pickedWines)
    }
    if (direction !== "right") {
      console.log(direction);
      console.log(db[index]);
      console.log(pickedWines)
      setPickedWines(prevList => new Set([...prevList].filter(item => item !== db[index])))
      console.log(pickedWines)
    }
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    const cr = await childRefs[newIndex].current;
    cr.restoreCard();
    console.log(currentIndex)
  }

  return (
    <div className={styles.root}>
      <div className={styles.rootdiv}>
        <link
          href='https://fonts.googleapis.com/css?family=Damion&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
          rel='stylesheet'
        />
        <h1 className={styles.h1}>BorTinder</h1>
        <h1 className={styles.bornum}>{db.length - currentIndex - 1} / {db.length} </h1>
        {(lastDirection && (currentIndex + 2  <= db.length)) ? (
          <p key={lastDirection} className={styles.infoText}>
            {db[currentIndex+1].termek} {((lastDirection==='right') ? <> ✔</> : <> ✘ </> )}
          </p>
        ) : (
          <div className={styles.infoTextContainer}>
            <p className={styles.infoText}>
              Húzd jobbra ha lehúznád ✔, balra ha nem ✘!
            </p>
          </div>
        )}
        <div className={styles.cardContainer}>
          <>
          {db.map((wine, index) => (
            <TinderCard
              ref={childRefs[index]}
              className={styles.swipe}
              key={wine.termek}
              onSwipe={(dir) => swiped(dir, wine.termek, index)}
              onCardLeftScreen={() => outOfFrame(wine.termek, index)}
            >
              <WineCard
                termek={wine.termek}
                evjarat={wine.ev}
                szin={wine.jelleg}
                karakter={wine.karakter}
                kategoria={wine.kategoria}
                borvidek={wine.borviek}
                kiszereles={wine.kiszereles}
                ar={wine.ar}
                imageUrl={wine.kep}
              />
            </TinderCard>
          ))}
          </>
          <>
          <ResultCard wines={[...pickedWines]}></ResultCard>
          </>
        </div>
        <div className={styles.buttons}>
          <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>&lt;</button>
          <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>
          ↺
          </button>
          <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>&gt;</button>
        </div>

      </div>
    </div>
  )
}

export default BorTinderPage
