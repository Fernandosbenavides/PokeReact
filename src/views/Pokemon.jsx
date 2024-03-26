import { useState } from "react";
import PokemonList from "../components/PokemonList";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Pokemon = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const navigate = useNavigate();

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleNavigateToDetails = () => {
    if (selectedPokemon) {
      navigate(`/pokemones/${selectedPokemon.name}`);
    }
  };

  return (
    <div>
      <h1 className="welcome mt-5">Lista de Pokemones</h1>
      <h3 className="welcome-sub mt-3 mb-5">Selecciona un Pokémon:</h3>
      <PokemonList onSelectPokemon={handleSelectPokemon} />
      {selectedPokemon && (
        <div>
          <Button
            className=" pkmbtn mt-5 capitalize"
            onClick={handleNavigateToDetails}
            variant="secondary"
          >
            Ver detalles de {selectedPokemon.name}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
