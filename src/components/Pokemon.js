import React, { useState, useEffect } from "react";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=5")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          const promises = data.results.map((pokemon) =>
            fetch(pokemon.url).then((response) => response.json())
          );

          return Promise.all(promises);
        })
        .then((pokemonDetails) => {
          const info = pokemonDetails.map((pokemon) => ({
            name: pokemon.name,
            base_experience: pokemon.base_experience,
          }));

          setPokemons(info);
          setIsLoaded(true);
        })
        .catch((error) => {
          console.error("Error fetching the Pokémon data:", error);
          setIsLoaded(true);
        });
    }
  }, [isLoaded]);

  return (
    <div>
      {isLoaded ? (
        <ul>
          {pokemons.map((pokemon, index) => (
            <li key={index}>
              Name: {pokemon.name}, Base Experience: {pokemon.base_experience}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonList;
