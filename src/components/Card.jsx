import React from 'react';
import styles from "./Card.module.css"

export default function Card(props) {
  // acá va tu código
  return (
  <div className={styles.posicion}>
    <div className={styles.card}>
       <button className={styles.button} onClick={props.onClose}>X</button>
       <h4>{props.name}</h4>

  <div className={styles.min}>
      <div>
        <p>MIN</p>
        <p>{props.min}º</p>
      </div>
  <div>
    <p>MAX</p>
    <p>{props.max}º</p>
</div>
  <img src={"http://openweathermap.org/img/wn/"+ props.img +"@2x.png"}/>
  </div>
  <div>
  </div>
  </div>
  </div>
  );
};