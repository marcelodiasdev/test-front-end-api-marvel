import type { Character } from "../../@types/Character";
import {
  GridRow,
  GridCell,
  CharacterInfo,
  CharacterImage,
  CharacterName,
} from "./styles";

interface CharacterRowProps {
  character: Character;
  onClick: () => void;
}

export const CharacterRow = ({ character, onClick }: CharacterRowProps) => {
  const { thumbnail, name, series, events } = character;

  const renderNames = (items: { name: string }[]): string =>
    items.map(({ name }) => name).join(", ") || "—";

  return (
    <GridRow onClick={onClick}>
      <GridCell>
        <CharacterInfo>
          <CharacterImage
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt={`Imagem de ${name}`}
          />
          <CharacterName>{name}</CharacterName>
        </CharacterInfo>
      </GridCell>
      <GridCell>{renderNames(series.items)}</GridCell>
      <GridCell>{renderNames(events.items)}</GridCell>
    </GridRow>
  );
};
