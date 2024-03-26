import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { PokemonProvider } from "./context/PokemonContext.jsx";
import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Pokemon from "./views/Pokemon.jsx";
import PokemonDetails from "./components/PokemonDetails.jsx";
import NotFound from "./views/NotFound.jsx";
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <PokemonProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemon />} />
          <Route path="/pokemones/:pokemonName" element={<PokemonDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PokemonProvider>
    </BrowserRouter>
  );
};

export default App;
