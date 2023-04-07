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
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154/')
      .then(res => setPokemon(res.data.results))

    axios.get('https://pokeapi.co/api/v2/type/')
      .then(res=>setLocations(res.data.results))
  }, [])

  const searchCharacter = () =>{
    navigate(`/Pokedex/${searchWrite.toLowerCase()}`)
  }

  const filterType = (e) =>{
    const url = e.target.value
    axios.get(url)
      .then(res => setPokemon(res.data.pokemon))
  }

  const [ page, setPage ] = useState(1)
  const pokemonPerPage = 9
  const finalIndex = page*pokemonPerPage
  const firstIndex = (page - 1)*pokemonPerPage;
  
  const paginated = pokemon?.slice(firstIndex, finalIndex);

  console.log(locations)
  return (
    <div className='Pokedex'>
      <div>
        <p className='welcome'>Welcome {userName}!</p>
        <div id='Search'>
          <input type="text" value={searchWrite} onChange={e => setSearchWrite(e.target.value)} placeholder='search character'/>
          <button onClick={searchCharacter}>🔍</button>
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
      </div>
      <div id='paginated'>
        <button onClick={() => setPage(page - 1)} disabled={page==1}>Previus Page</button>
        <button onClick={() => setPage(page + 1)}>Next Page</button>
        <button onClick={() => setPage(1)}>Inicial Page</button>
      </div>
      <ul>
        {paginated?.map(element => (
          <PokedexCards
            url={element.url ? element.url : element.pokemon.url}
            key={element.url ? element.url : element.pokemon.url}
          />
        ))}
      </ul>
    </div> 
  );
};

export default Pokedex;