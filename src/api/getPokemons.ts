import { gql, useMutation, useQuery } from "@apollo/client";
import { useCallback } from "react";

const GET_POKEMONS = gql`
	query QueryPokemons {
		pokemons {
			pokedex_number
			name
			type1
			type2
			is_legendary
			generation
			abilities
		}
	}
`;

const CREATE_POKEMON = gql`
	mutation CreatePokemon (
		$pokemonInput: PokemonInputType!
	) {
		createPokemon (
			PokemonInput: $pokemonInput
		)
	}
`;

type PokemonType = {
	pokedex_number?: number;
	name?: string;
	type1?: string;
	type2?: string;
	is_legendary?: boolean;
	generation?: number;
	abilities?: string[];
};

type CreatePokemonInput = {
	pokemonInput: PokemonType
}

type GetPokemonsOutputType = {
	pokemons: PokemonType[];
};

export const useGetPokemons = () => {
	const getPokemonsQuery = useQuery<GetPokemonsOutputType>(GET_POKEMONS);
	const [createPokemon] = useMutation<Boolean, CreatePokemonInput>(CREATE_POKEMON);

	const handleCreatePokemon = useCallback(async ({
		pokedex_number, name, type1, type2, is_legendary, generation, abilities,
	}: PokemonType) => {
		createPokemon({
			variables: {
				pokemonInput: {
					pokedex_number,
					abilities,
					generation,
					is_legendary,
					name,
					type1,
					type2
				}
			}
		})

	}, [createPokemon]);
	return {
		data: getPokemonsQuery.data,
		handleCreatePokemon,
	}
};
