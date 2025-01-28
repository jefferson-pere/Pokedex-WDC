import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { API } from "../configs/api";
import { Pokemon } from "../@types/pokemon";

export function useQueryPokemonPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);

  async function getPokemonPage({ page = 1, limit = 30 }) {
    if (page <= 0) page = 1;
    const offset = (page - 1) * limit;
    const { data } = await API.get(`/pokemon?limit=${limit}&offset=${offset}`);

    return data as Pokemon[];
  }

  const query = useQuery({
    queryKey: ["getPokemonPage"],
    queryFn: () => getPokemonPage({ page, limit }),
  });

  return { ...query };
}
