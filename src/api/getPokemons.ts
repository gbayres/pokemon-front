import { gql, useQuery } from "@apollo/client";

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

type PokemonType = {
	pokemon_number: number;
	name: string;
	type1: string;
	type2: string;
	is_legendary: boolean;
	generation: number;
	abilities: string[];
};

type GetPokemonsOutputType = {
	pokemons: PokemonType[];
};

export const useGetPokemons = () => {
	const getPokemonsQuery = useQuery<GetPokemonsOutputType>(GET_POKEMONS);
	return {
		data: getPokemonsQuery.data,
	}
};
