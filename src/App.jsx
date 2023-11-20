import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard/PokemonCard.jsx'

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];


function App() {
  const [count, setCount] = useState(0)
  const [pokemonIndex, setPokemonIndex] = useState(0)
  // let pokemonIndex = useState(0)
  // return & initialize array [0, dispatch]
  
  currentIndex()

  const indexInc = () => {
    // pokemonIndex++;
    setPokemonIndex(pokemonIndex + 1)
    currentIndex();
  }

  const indexDes = () => {
    // pokemonIndex--;
    setPokemonIndex(pokemonIndex -1)
    currentIndex();
  }

  function currentIndex() {
    console.log(pokemonIndex)
  }

  return (
    <>
      <PokemonCard pokemon = {pokemonList[0]} />
      <div className="">
        { pokemonIndex > 0 ?
          <button onClick={indexDes}>Précédent</button>
          :
          ''
        }
        
        { pokemonIndex < pokemonList.length - 1 ?
        <button onClick={indexInc}>Suivant</button>
        :
        ''
      }
      </div>
    </>
  )
}

export default App
