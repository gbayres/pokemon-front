import "./App.scss";
import { MainRouter } from "./routes";
import { ApolloProvider } from "@apollo/client";
import client from './client/client';

export const App = () => {
	return (
		<ApolloProvider client={client}>
			<MainRouter />
		</ApolloProvider>
	);
};

export default App;
