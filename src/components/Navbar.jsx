import React, { useContext } from "react";
import { FavoriteContext } from "../contexts/favoriteContext";

export const Navbar = () => {
    const { favoritePokemons } = useContext(FavoriteContext)
    const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <nav>
            <div>
                <img
                    src={logoImg}
                    alt="texto escrito POKEAPI"
                    className='navbar-img'
                />
                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/25.gif"
                    alt=""
                />
            </div>
            <div>{favoritePokemons.length}❤️</div>
        </nav>
    )
}