import React, { useState } from "react";
import { searchPokemon } from "../api";
import { Pokemon } from "./Pokemon";
import './Pokemons.css'


export const Searchbar = () => {
    const [search, setSearch] = useState('')
    const [pokemon, setPokemon] = useState()

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }

    const onButtonClickHandler = () => {
        onSearchHandler(search)
    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon.toLowerCase().replace(/\s/g, '')) // A api só aceita minusculo e sem espaço
        setPokemon(result)
    }


    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>
            {pokemon ? (
                <Pokemon
                pokemon={pokemon}
                
                />
            ) : null}
        </div>
    )
}