import { Link } from "react-router-dom";
import { PokemonCard } from "../../components/PokemonCard";
import { Container } from "./styles";
import { useQueryPokemonPage } from "../../hooks/useQueryPokemonPage";

export function Home() {
  const { data, isLoading, isError, page, nextPage, prevPage, totalPage } =
    useQueryPokemonPage();

  return (
    <Container>
      <h1>Bem-vindo(a) à Pokédex do Reprograma Jucás</h1>

      {isLoading && <span className="loading">Carregando...</span>}
      {!isLoading && isError && <span className="loading">Error...</span>}

      <div className="gridCards">
        {data?.map((pokemon) => {
          return (
            <Link to="/details" key={pokemon.id}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          );
        })}
      </div>
      <div className="paginationComponent">
        <button onClick={prevPage}>{"<"} Anterior</button>
        <span className="mumberPage">
          {String(page).padStart(2, "0")}/{totalPage}
        </span>
        <button onClick={nextPage}>Próximo {">"}</button>
      </div>
    </Container>
  );
}
