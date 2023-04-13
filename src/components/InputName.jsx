import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { changeName } from '../store/slice/name.slice';

const InputName = () => {

  const [ inputName, SetInputName ] = useState('')

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const enterName = () => {
    navigate('/pokedex')
    dispatch(changeName(inputName))
  }

  return (
    <div className='InputName'>
      <strong>Registra tu nombre aquí, Campeon pokemon</strong>
      <input type="text" value={inputName} onChange={e => SetInputName(e.target.value)}/>
      <button onClick={enterName}>
        Submit
      </button>
    </div>
  );
};

export default InputName;