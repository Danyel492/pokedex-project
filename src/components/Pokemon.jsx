import React, { useContext } from "react";
import { FavoriteContext } from "../contexts/favoriteContext";

export const Pokemon = (props) => {
    const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext)
    const { pokemon } = props
    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name)
    }
    const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🤍"
    return (
        <div className="pokemon-card">
            <div className="pokemon-image-container">
                <img
                    src={pokemon.sprites.other.showdown.front_default}
                    alt={pokemon.name}
                    className="pokemon-image" />
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemon.types.map((type, index) => {
                            return (
                                <div key={index} className={`type-${type.type.name.toLowerCase()} pokemon-type-text`}>
                                    {type.type.name}
                                </div>
                            )
                        })}
                    </div>
                    <button className="pokemon-heart-btn" onClick={onHeartClick}>
                        {heart}
                    </button>
                </div>

            </div>
        </div>
    )
}