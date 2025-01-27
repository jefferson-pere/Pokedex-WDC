import { Link } from "react-router-dom";
import { PokemonCard } from "../../components/PokemonCard";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <h1>Home</h1>

      <div className="gridCards">
        <Link to={"/details"}>
          <PokemonCard
            pokemon={{
              id: 1,
              name: "Pikachu",
              types: [{ type: { name: "fire" } }, { type: { name: "water" } }],
            }}
          />
        </Link>
      </div>
    </Container>
  );
}
