// import styles from './style.css'
import styles from './styles.module.css'

export default function PokemonCard(props) {
    let pokemon = props.pokemonList[0]
    console.log(props)
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
