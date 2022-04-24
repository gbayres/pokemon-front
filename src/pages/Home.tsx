import { useGetPokemons } from "api/getPokemons";
import { FC } from "react";

export const Home: FC = () => {
	console.log(useGetPokemons().data);
	return (
		<div>
			<p className="App-link">Eaeee, rapaziadaa!</p>
		</div>
	);
};