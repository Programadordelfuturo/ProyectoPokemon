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

  console.log(singlePokemon)
  return (
    <div className='PokedexDetails'>
      <h1>{singlePokemon.name}</h1>
      <img src={singlePokemon.sprites?.other.home?.front_default} alt="img" />
    </div>
  );
};

export default PokedexDetails;