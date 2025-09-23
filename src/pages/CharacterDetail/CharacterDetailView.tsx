import type { CharacterFull } from "../../@types/CharacterDetail";
import {
  BackButton,
  CharacterImage,
  Container,
  Info,
  Name,
  Header,
} from "./styles";
import { CharacterSection } from "./CharacterSection";

interface CharacterDetailViewProps {
  character: CharacterFull;
  onBack: () => void;
}

export const CharacterDetailView = ({
  character,
  onBack,
}: CharacterDetailViewProps) => {
  const { thumbnail, name, comics, series, events } = character;

  return (
    <Container>
      <Header>
        <CharacterImage
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={name}
        />
        <BackButton onClick={onBack}>Voltar</BackButton>
      </Header>

      <Info>
        <Name>{name}</Name>
      </Info>

      {comics.items.length > 0 && (
        <CharacterSection
          title="Comics"
          items={character.comics.items}
          total={character.comics.available}
        />
      )}
      {series.items.length > 0 && (
        <CharacterSection
          title="Séries"
          items={character.series.items}
          total={character.series.available}
        />
      )}
      {events.items.length > 0 && (
        <CharacterSection
          title="Eventos"
          items={character.events.items}
          total={character.events.available}
        />
      )}
    </Container>
  );
};
