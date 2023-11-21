import { useState, useEffect } from 'react'
import styles from './styles.module.css'

export default function NavBar({pokemonIndex, pokemonList, setPokemonIndex}) {
    let otherInfo = 0;
    if(pokemonList[pokemonIndex].name === 'pikachu') {
      console.log("pika pikachu !!!");
    }
    useEffect(() => {
      // This runs only on mount (when the component appears)
      // console.log("userEffect ! once per render")
      console.log("navBar")
      otherInfo = pokemonIndex;
    }, []);

    return (
        <div className="navbar">             
          {
            pokemonList.map((pokemon, index) => (
              // <button key = {pokemon.name}
              <button key = {index}
                onClick = {() => setPokemonIndex(index)}
              >
                {pokemon.name}
              </button>
            ))
          }

          <h2>Copy of pokemonIndex: {otherInfo}</h2>
        </div>
    )
}
