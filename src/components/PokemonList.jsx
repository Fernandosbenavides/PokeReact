import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { Dropdown } from "react-bootstrap";

const PokemonList = ({ onSelectPokemon }) => {
  const { pokemonData } = useContext(PokemonContext);

  const handlePokemonSelection = (pokemon) => {
    onSelectPokemon(pokemon);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="pokemon-dropdown">
        Selecciona un Pokémon
      </Dropdown.Toggle>
      <Dropdown.Menu style={{ maxHeight: "300px", overflowY: "auto" }}>
        {pokemonData.map((pokemon) => (
          <Dropdown.Item
            key={pokemon.name}
            onClick={() => handlePokemonSelection(pokemon)}
          >
            {pokemon.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default PokemonList;
