import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useCharacters } from "../../hooks/useCharacters";

import {
  GridWrapper,
  GridContainer,
  GridHeaderRow,
  GridHeaderCell,
} from "./styles";
import { CharacterRow } from "./CharacterRow";
import { FullPageLoader } from "../Loader/FullPageLoader";
import { useCharactersContext } from "../../hooks/useCharactersContext";

export const CharactersGrid = () => {
  const { searchTerm, page, setTotal } = useCharactersContext();

  const { characters, loading, error, total } = useCharacters({
    searchTerm,
    page,
  });

  const navigate = useNavigate();

  useEffect(() => {
    setTotal(total);
  }, [total, setTotal]);

  return (
    <FullPageLoader
      loading={loading}
      error={error ?? undefined}
      items={characters}
      emptyMessage="Nenhum personagem encontrado"
    >
      <GridWrapper>
        <GridContainer>
          <GridHeaderRow>
            <GridHeaderCell>Personagem</GridHeaderCell>
            <GridHeaderCell>Séries</GridHeaderCell>
            <GridHeaderCell>Eventos</GridHeaderCell>
          </GridHeaderRow>

          {characters.map((char) => (
            <CharacterRow
              key={char.id}
              character={char}
              onClick={() => navigate(`/character/${char.id}`)}
            />
          ))}
        </GridContainer>
      </GridWrapper>
    </FullPageLoader>
  );
};
