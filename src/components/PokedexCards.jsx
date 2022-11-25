import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const PokedexCards = ({url}) => {

  const [ forEachPokemon, setForEachPokemon ] = useState({})
  
  useEffect(()=>{
    axios.get(url)
      .then(res=> setForEachPokemon(res.data))
  }, [])

  console.log(forEachPokemon)
  return (
    <Link to={`/Pokedex/${forEachPokemon.id}`} className='PokedexCards'>
        <p>
          <strong>name:</strong> 
          {forEachPokemon.name}
        </p>
        <div className='container-card'>
          <img src={forEachPokemon.sprites?.front_default} alt="image" />
          <div className='infoPokemon'>
            <p>
              <strong>Types:</strong> 
              {forEachPokemon.types?.length === 1 
                ? forEachPokemon.types[0].type.name 
                : (forEachPokemon.types?.map(element => (<p>{element.type.name}</p>)))}
            </p>
            <p>
              <strong>Hp:</strong> 
              {forEachPokemon.stats?.[0].base_stat}
            </p>
            <p>
              <strong>Attack:</strong> 
              {forEachPokemon.stats?.[1].base_stat}
            </p>
            <p>
              <strong>Defense:</strong> 
              {forEachPokemon.stats?.[2].base_stat}
            </p>
            <p>
              <strong>Speed:</strong> 
              {forEachPokemon.stats?.[3].base_stat}
            </p>
          </div>
        </div>
    </Link>
  );
};

export default PokedexCards;