import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import { Button, Card } from "react-bootstrap";
import "../components/PokemonDetails.css";

const PokemonDetails = () => {
  const { pokemonName } = useParams();
  const navigate = useNavigate();
  const { getPokemonDetails } = useContext(PokemonContext);
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    const fetchPokemonInfo = async () => {
      try {
        const data = await getPokemonDetails(pokemonName);
        setPokemonInfo(data);
      } catch (error) {
        navigate("/notfound");
      }
    };

    fetchPokemonInfo();
  }, [pokemonName, navigate, getPokemonDetails]);

  const handleGoBackToList = () => {
    navigate("/pokemones");
  };

  return (
    <div className="container mt-4 d-flex flex-column align-items-center">
      {pokemonInfo && (
        <>
          <Card className="pkmcard w-25 mb-3">
            <Card.Img
              src={pokemonInfo.sprites.front_default}
              alt={pokemonInfo.name}
            />
            <Card.Body>
              <Card.Title className="pkmname">{pokemonInfo.name}</Card.Title>
              <Card.Text>
                <strong>🌀Tipo:</strong>{" "}
                {pokemonInfo.types.map((type) => type.type.name).join(", ")}
              </Card.Text>
              <Card.Text>
                <strong>❤️ HP:</strong> {pokemonInfo.stats[0].base_stat}
              </Card.Text>
              <Card.Text>
                <strong>⚔️ Ataque:</strong> {pokemonInfo.stats[1].base_stat}
              </Card.Text>
              <Card.Text>
                <strong>🛡️ Defensa:</strong> {pokemonInfo.stats[2].base_stat}
              </Card.Text>
              <Card.Text>
                <strong>💥Ataque Especial:</strong>{" "}
                {pokemonInfo.stats[3].base_stat}
              </Card.Text>
              <Card.Text>
                <strong>🛡️💫 Defensa Especial:</strong>{" "}
                {pokemonInfo.stats[4].base_stat}
              </Card.Text>
              <Card.Text>
                <strong>💨 Velocidad:</strong> {pokemonInfo.stats[5].base_stat}
              </Card.Text>
            </Card.Body>
          </Card>
          <Button
            className="pkmbtn"
            variant="secondary"
            onClick={handleGoBackToList}
          >
            Volver a la lista
          </Button>
        </>
      )}
    </div>
  );
};

export default PokemonDetails;
