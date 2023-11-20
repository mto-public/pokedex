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
    )
}