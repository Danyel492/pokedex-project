import React from "react";
import { Pokemon } from "./Pokemon";
import { Pagination } from "./Pagination";

export const Pokedex = (props) => {
    const { pokemons, loading, page, setPage, totalPages } = props
    const onLeftClick = () => {
        if (page >0){
            setPage(page - 1)
        }
    }
    const onRightClick = () => {
        if (page+1 !=totalPages) {
            setPage(page + 1)
        }
    }
    return (
        <div>
            <div className="Pokedex-header">
                <h1>Pokedex</h1>
                <Pagination
                    page={page +1}
                    totalPages={totalPages}
                    onLeftClick={onLeftClick}
                    onRightClick={onRightClick} ri
                />
            </div>
            {loading ? (
                <div>Carregando...</div>
            ) : (
                <div className="pokedex-grid">
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (
                            <Pokemon key={index} pokemon={pokemon} />
                        )
                    })}
                </div>
            )}
        </div>
    )
}