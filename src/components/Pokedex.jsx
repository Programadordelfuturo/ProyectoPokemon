import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokedexCards from './PokedexCards';


const Pokedex = () => {

  const userName = useSelector(state => state.name);
  const [ pokemon, setPokemon ]= useState([])
  const [ searchWrite, setSearchWrite ] = useState('')
  const [ locations, setLocations ] = useState([])

  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(res => setPokemon(res.data.results))

    axios.get('https://pokeapi.co/api/v2/type/')
      .then(res=>setLocations(res.data.results))
  }, [])

  console.log(locations);

  const searchCharacter = () =>{
    navigate(`/Pokedex/${searchWrite.toLowerCase()}`)
  }

  const filterType = (e) =>{
    axios.get(`${e.target.value}`)
      .then(res => setPokemon(res.data.pokemon))
  }

  return (
    <div className='Pokedex'>
      <p>Welcome {userName}!</p>
      <div>
        <input type="text" value={searchWrite} onChange={e => setSearchWrite(e.target.value)} placeholder='search character'/>
        <button onClick={searchCharacter}>Search</button>
        <select onChange={filterType} name="" id="">
          {locations.map(location=>(
            <option 
              value={location.url} 
              key={location.name} 
            > {location.name}
            </option>
          ))}
        </select>
      </div>
      <ul>
        {pokemon?.map(element => (
          <PokedexCards
            url={element.url ? element.url : element}
            key={element.url ? element.url : element}
          />
        ))}
      </ul>
    </div> 
  );
};

export default Pokedex;