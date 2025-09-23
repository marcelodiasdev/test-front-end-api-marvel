import { useContext } from "react";
import { Footer } from "../../components/Footer";
import InputSearch from "../../components/InputSearch";
import { CharactersGrid } from "../../components/CharactersGrid";
import {
  SectionWrapper,
  TitleInput,
  Typography,
} from "../../components/InputSearch/styles";
import { CharactersContext } from "../../context/CharactersContext";

export const HomePage = () => {
  const context = useContext(CharactersContext);

  if (!context) {
    throw new Error("CharactersContext not found");
  }

  const { setSearchTerm, setPage } = context;

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setPage(1);
  };

  return (
    <>
      <SectionWrapper>
        <TitleInput>Busca de personagens</TitleInput>
        <Typography>Nome do personagem</Typography>
        <InputSearch titleInput="Nome do personagem" onSearch={handleSearch} />
      </SectionWrapper>

      <CharactersGrid />
      <Footer />
    </>
  );
};
