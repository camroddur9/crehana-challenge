import React from 'react';
import Canvas from './components/canvas.component';
import { ApolloClient, ApolloProvider, InMemoryCache, ApolloLink } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';
import { gql } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com/",
});

function App() {
  return (
    <ApolloProvider client={client}> 
      <Canvas/>
    </ApolloProvider>
  );
}

export default App;
