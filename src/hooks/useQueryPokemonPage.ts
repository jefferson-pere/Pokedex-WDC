import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { API } from "../configs/api";
import { Pokemon } from "../@types/pokemon";
import { useNavigate, useSearchParams } from "react-router-dom";

export function useQueryPokemonPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(30);
  const [totalPage, setTotalPage] = useState(0);

  const searchParams = useSearchParams();
  const navigate = useNavigate();

  async function getPokemonPage({ page = 1, limit = 30 }) {
    if (page <= 0) page = 1;
    const offset = (page - 1) * limit;
    const { data } = await API.get(`/pokemon?limit=${limit}&offset=${offset}`);

    const pokemonPromise = data.results.map(
      async (pokemon: { url: string }) => {
        const response = await fetch(pokemon.url);
        return response.json();
      }
    );
    const pokemonData = await Promise.all(pokemonPromise);

    const totalPokemon = data.count;
    const totalPagesAPI = Math.ceil(totalPokemon / limit);

    setTotalPage(totalPagesAPI);

    return pokemonData as Pokemon[];
  }

  function nextPage() {
    if (page < totalPage) {
      setPage((prev) => prev + 1);
      navigate(`?page=${page + 1}`);
    }
  }
  function prevPage() {
    if (page > 1) {
      setPage((prev) => prev - 1);
      navigate(`?page=${page - 1}`);
    }
  }

  useEffect(() => {
    const pageQuery = Number(searchParams[0].get("page"));
    setPage(pageQuery || 1);

    if (totalPage > 0) {
      if (pageQuery > totalPage) {
        navigate(`?page=${totalPage}`);
        setPage(totalPage);
        return;
      }

      if (pageQuery < 1) {
        navigate(`?page=1`);
        setPage(1);
        return;
      }
    }
  }, [page, searchParams, navigate, totalPage]);

  const query = useQuery({
    queryKey: ["getPokemonPage", page, limit],
    queryFn: () => getPokemonPage({ page, limit }),
  });

  return { ...query, page, prevPage, nextPage, setLimit, totalPage };
}
