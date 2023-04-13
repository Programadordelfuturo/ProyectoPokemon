import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokedexDetails = () => {

  const [ singlePokemon, setSinglePokemon ] = useState({});
  const [ type, setType ] = useState([])

  const { id } = useParams();

  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => {
        setType(res.data.types.map(element => element.type.name));
        setSinglePokemon(res.data)
      })
  }, [])
      
  
  const [ hability, setHability ] = useState(1)
  const pokemonPerHability = 9
  const finalIndex = hability*pokemonPerHability
  const firstIndex = (hability - 1)*pokemonPerHability;
  
  const paginated = singlePokemon.moves?.slice(firstIndex, finalIndex);

  return (
    <div id='PokedexDetails'>
      <div id='pokemonImage'>
        <h1>{singlePokemon.name}</h1>
        <span>
          <img src={singlePokemon.sprites?.other.home?.front_default} alt="img" />
          <div>
            <p><strong>height: </strong>{singlePokemon.height}</p>
            <p><strong>weight: </strong>{singlePokemon.weight}</p>
            <p><strong>base XP: </strong>{singlePokemon.base_experience}</p>
          </div>
        </span>
        <ul id='types'>
          <strong>types: </strong> 
          {type?.map(e =>( 
            <li className={e} key={e}>
              {e}
            </li>
          ))}
        </ul>
      </div>
      <div id='pokemonMove'>
        <h2>MOVE</h2>
        <input type="text" value={hability} readOnly/>
        <div id='paginated'>
          <button onClick={() => setHability(hability - 1)} disabled={hability==1}>Previus</button>
          <button onClick={() => setHability(hability + 1)}>Next</button>
          <button onClick={() => setHability(1)}>Initial</button>
        </div>
        <ul>
          {paginated?.map(move => <li key={move.move.name}>{move.move.name}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default PokedexDetails;