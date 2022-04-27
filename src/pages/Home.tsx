import { FC, useEffect } from "react";
import { useGetPokemons } from "../api/getPokemons";

export const Home: FC = () => {
	const { handleCreatePokemon } = useGetPokemons();
	// useEffect(() => {
	// 	handleCreatePokemon({
	// 		pokedex_number: 2000,
	// 		name: 'Jhonata',
	// 		type1: 'fire',
	// 		type2: 'water',
	// 		is_legendary: false,
	// 		generation: 3,
	// 		abilities: ['ember']
	// 	})
	// }, [handleCreatePokemon])
	return (
		<div>
			<p className="App-link">Eaeee, rapaziadaa!</p>
		</div>
	);
};