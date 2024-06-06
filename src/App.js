import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
      const pokemonNames = response.data.results.map(pokemon => pokemon.name);
      setPokemonList(pokemonNames);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    }
  };

  return (
    <div className="App">
      <h1>Pokémon Fetcher</h1>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
