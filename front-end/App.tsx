import AuthState from "./src/context/authContext/AuthState";
import AppNavigator from "./src/navigation/app/AppNavigator";
import { ApolloProvider } from "@apollo/client";
import client from "./client";

export default function MyApp() {
  return (
    <ApolloProvider client={client}>
      <AuthState>
        <AppNavigator />
      </AuthState>
    </ApolloProvider>
  );
}
