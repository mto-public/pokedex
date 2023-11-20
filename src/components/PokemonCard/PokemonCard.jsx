// import styles from './style.css'
import styles from './styles.module.css'
import PropTypes from "prop-types";

export default function PokemonCard(props) {
    let pokemon = props.pokemon
    console.log(props)

    return (
        <figure>
            <figcaption>{pokemon?.name}</figcaption>

            { pokemon?.imgSrc != undefined ?
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

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string
    }).isRequired,
}

// export default PokemonCard;

