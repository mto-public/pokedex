import styles from './styles.module.css'

export default function NavBar({pokemonIndex, pokemonList, setPokemonIndex}) {
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
        <div className="navbar">
          {/* {pokemonList.length} */}
            {/* { pokemonIndex > 0 ?
            <button onClick={indexDes}>Précédent</button>
            :
            ''
            }
            
            { pokemonIndex < pokemonList.length - 1 ?
            <button onClick={indexInc}>Suivant</button>
            :
            ''
            } */}

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

        </div>
    )
}