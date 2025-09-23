import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

import { fetchMarvelCharacterById } from "../../services/marvelAPI";
import type { CharacterFull } from "../../@types/CharacterDetail";
import { CharacterDetailView } from "./CharacterDetailView";
import { Loader, LoaderWrapper } from "../../components/Loader/styles";

export const CharacterDetail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState<CharacterFull | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true);
      try {
        if (!id) return;
        const data = await fetchMarvelCharacterById(Number(id));
        setCharacter(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading)
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );

  return (
    <>
      {character ? (
        <CharacterDetailView
          character={character}
          onBack={() => navigate("/")}
        />
      ) : (
        <p>Personagem não encontrado.</p>
      )}
    </>
  );
};
