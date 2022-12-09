import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokedexDetails = () => {

  const [ singlePokemon, setSinglePokemon ] = useState({});

  const { id } = useParams();

  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => setSinglePokemon(res.data))
  }, [])

  return (
    <div className='PokedexDetails'>
      <div>
        <h1>{singlePokemon.name}</h1>
        <img src={singlePokemon.sprites?.other.home?.front_default} alt="img" />
        <div>
          <p><strong>height: </strong>{singlePokemon.height}</p>
          <p><strong>weight: </strong>{singlePokemon.weight}</p>
          <p><strong>base XP: </strong>{singlePokemon.base_experience}</p>
        </div>
        <ul id='types'>
          {singlePokemon.types?.map(type =>( 
            <li key={type.type.name}>{type.type.name}
            </li>
          ))}
        </ul>
      </div>
      <div id='pokemonMove'>
        <h2>Move</h2>
        <ul>
          {singlePokemon.moves?.map(move => <li key={move.move.name}>{move.move.name}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default PokedexDetails;