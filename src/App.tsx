import {
  Grid, GridItem, Show, useBreakpointValue
  
 } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const[selectedgenre, setSelectedGenre]=useState<Genre|null>(null);
  
  const showAside = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // devices wider than 1024px
      }}
      templateColumns={{
        base: '1fr',
        lg:'200px 1fr'
      }}
    >
      <GridItem area="nav" >
        <NavBar/>
      </GridItem>
      <Show when={showAside}>
        <GridItem area="aside" paddingX={5}>
          <GenreList onSelectGenre={(genre)=>setSelectedGenre(genre)}/>
        </GridItem>
      </Show>
      <GridItem area="main">
       <GameGrid selectedGenre={selectedgenre}/>
      </GridItem>
    </Grid>
  );
}

export default App;
