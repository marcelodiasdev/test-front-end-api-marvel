import { useState, useEffect } from "react";
import { fetchMarvelCharacters } from "../services/marvelAPI";
import type { Character } from "../@types/Character";

interface UseCharactersProps {
  page: number;
  searchTerm?: string;
  limit?: number;
}

export const useCharacters = ({
  page,
  searchTerm = "",
  limit = 10,
}: UseCharactersProps) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchMarvelCharacters(page, limit, searchTerm);
        setCharacters(data.results);
        setTotal(data.total);
      } catch (err) {
        console.error(err);
        setError("Error searching for characters");
        setCharacters([]);
        setTotal(0);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page, searchTerm, limit]);

  return { characters, total, loading, error };
};
