import React from "react";
import "./App.css";
import { client } from "./ApolloClient/client.js";
import { ApolloProvider } from "@apollo/client";
import Homepage from "./Home.js";

function App() {
  return (
    <ApolloProvider client={client}>
      <Homepage />
    </ApolloProvider>
  );
}

export default App;
