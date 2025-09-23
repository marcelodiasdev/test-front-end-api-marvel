import { useState } from "react";
import type { ReactNode } from "react";
import {
  CharactersContext,
  type CharactersContextProps,
} from "./CharactersContext";

interface CharactersProviderProps {
  children: ReactNode;
}

export const CharactersProvider = ({ children }: CharactersProviderProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const value: CharactersContextProps = {
    searchTerm,
    setSearchTerm,
    page,
    setPage,
    total,
    setTotal,
  };

  return (
    <CharactersContext.Provider value={value}>
      {children}
    </CharactersContext.Provider>
  );
};
