import React from 'react';
import './Card.css';

const Card = ({name, breed, country, foto_path}) => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img className='img' alt='dogs' src={foto_path}></img>
      <div>
        <h2>{name}</h2>
        <p>{breed}</p>
        <p>{country}</p>
      </div>
    </div>
  );  
} 

export default Card;