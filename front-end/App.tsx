import AuthState from "./src/context/authContext/AuthState";
import AppNavigator from "./src/navigation/app/AppNavigator";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});
export default function MyApp() {
  return (
    <ApolloProvider client={client}>
      <AuthState>
        <AppNavigator />
      </AuthState>
    </ApolloProvider>
  );
}
