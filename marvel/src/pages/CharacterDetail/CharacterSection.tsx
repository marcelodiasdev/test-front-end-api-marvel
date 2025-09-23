import { useState } from "react";
import { Section, SectionTitle, List, Item, ToggleButton } from "./styles";
import type { CharacterCollectionItem } from "../../@types/CharacterDetail";

interface CharacterSectionProps {
  title: string;
  items: CharacterCollectionItem[];
  total: number;
  initialCount?: number;
}

export const CharacterSection = ({
  title,
  items,
  total,
  initialCount = 12,
}: CharacterSectionProps) => {
  const [showAll, setShowAll] = useState(false);

  const displayedItems = showAll ? items : items.slice(0, initialCount);

  return (
    <Section>
      <SectionTitle>
        {title} ({total})
      </SectionTitle>

      <List>
        {displayedItems.map((item, i) => (
          <Item key={i}>{item.name}</Item>
        ))}
      </List>

      <ToggleButton onClick={() => setShowAll(!showAll)}>
        {showAll ? "Ver menos" : "Ver mais"}
      </ToggleButton>
    </Section>
  );
};
