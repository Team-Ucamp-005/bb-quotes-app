import React from 'react';
import { useParams } from 'react-router-dom';

const Movie = ({ title, description }) => {
  const params = useParams();
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Movie