import { useState } from "react";

export const useCharactersState = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  return { searchTerm, setSearchTerm, page, setPage, total, setTotal };
};
