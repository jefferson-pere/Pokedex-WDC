import { Link } from "react-router-dom";
import { PokemonCard } from "../../components/PokemonCard";
import { Container } from "./styles";
import { useQueryPokemonPage } from "../../hooks/useQueryPokemonPage";

export function Home() {
  const { data, isLoading, isError } = useQueryPokemonPage();

  return (
    <Container>
      <h1>Bem-vindo(a) à Pokédex do Reprograma Jucás</h1>

      {isLoading && <span className="loading">Carregando...</span>}
      {!isLoading && isError && <span className="loading">Error...</span>}

      <div className="gridCards">
        {data?.results.map((pokemon) => {
          return (
            <Link to="/details">
              <PokemonCard pokemon={pokemon} />
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
