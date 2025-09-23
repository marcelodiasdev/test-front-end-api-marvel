import { createContext } from "react";

export interface CharactersContextProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  page: number;
  setPage: (page: number) => void;
  total: number;
  setTotal: (total: number) => void;
}

export const CharactersContext = createContext<
  CharactersContextProps | undefined
>(undefined);
