import React from 'react';
import { Link } from "react-router-dom";

const PokemonIndexItem = ({pokemon}) => {
  return (
      <ul>
      <Link to={`/pokemon/${pokemon.id}`}>
          <li>{pokemon.name}</li>,
          <img src={pokemon.imageUrl}></img>
        </Link>
      </ul>
  );
}

export default PokemonIndexItem;