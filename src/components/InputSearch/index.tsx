import { useState } from "react";
import type { KeyboardEvent, ChangeEvent } from "react";

import { IconButton, SearchContainer, SearchInput } from "./styles";
import { useCharactersContext } from "../../hooks/useCharactersContext";

interface InputSearchProps {
  placeholder?: string;
}

const InputSearch = ({ placeholder = "Search..." }: InputSearchProps) => {
  const { setSearchTerm, setPage } = useCharactersContext();
  const [term, setTerm] = useState("");

  const handleSearch = () => {
    const trimmed = term.trim();
    setSearchTerm(trimmed);
    setPage(1);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchInput
        placeholder={placeholder}
        value={term}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <IconButton onClick={handleSearch} title="Buscar">
        🔍
      </IconButton>
    </SearchContainer>
  );
};

export default InputSearch;
