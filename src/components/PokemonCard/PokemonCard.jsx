// import styles from './style.css'
import styles from './styles.module.css'

export default function PokemonCard() {
    return (
        <figure>
            <figcaption>
                Bulbasaur
            </figcaption>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" 
                alt="squirtle"
                // className={styles.cardImg} 
            />
        </figure>
    )
}

// export default PokemonCard;
