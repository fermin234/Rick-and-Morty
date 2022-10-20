import React from "react";
import s from './card.module.css'

const Card = ({ name, species, origin, image }) => {
  name = name.split(' ')
  return (
    <div className={s.card}>
      <div className={s.blob}></div>
      <span className={s.img}><img className={s.img} src={image} alt="" /></span>
      <h2>{name[0]}<br /><span>{name[1]}</span></h2>
      <h2><span>Especies: {species}</span><br />
        <span>Origen: {origin}</span></h2>
    </div >
  )
}

export default Card