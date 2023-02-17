import "./App.css";
import { client } from "./ApolloClient/client";
import { ApolloProvider } from "@apollo/client";
import Homepage from "./Home";

function App() {
  return (
    <ApolloProvider client={client}>
      <Homepage />
    </ApolloProvider>
  );
}

export default App;
