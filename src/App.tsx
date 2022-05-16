import "./App.scss";
import { MainRouter } from "./routes";
import { ApolloProvider } from "@apollo/client";
import client from './client/client';
import { ChakraProvider } from "@chakra-ui/react";

export const App = () => {
	return (
		<ChakraProvider>
			<ApolloProvider client={client}>
				<MainRouter />
			</ApolloProvider>
		</ChakraProvider>
	);
};

export default App;
