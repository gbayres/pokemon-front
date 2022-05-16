import { Box, useBreakpoint, useBreakpointValue } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useGetPokemons } from "../api/getPokemons";
import { useDevice } from "../hooks/use-device";
import { PageTemplate } from "../_components/PageTemplate";

export const Home: FC = () => {
	const { handleCreatePokemon } = useGetPokemons();
	const device = useDevice();
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
	// console.log(breakp);
	return (
		<>
			<PageTemplate />
		</>
	);
};