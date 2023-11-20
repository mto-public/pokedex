// import styles from './style.css'
import styles from './styles.module.css'

const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
];

export default function PokemonCard() {
    let pokemon = pokemonList[1]
    return (
        <figure>
            <figcaption>{pokemon.name}</figcaption>

            { pokemon.imgSrc != undefined ?
                <img src={pokemon.imgSrc}
                    alt="squirtle"
                    className={styles.cardImg} 
                /> 
                : 
                "???" 
            }
        </figure>
    )
}


// export default PokemonCard;
