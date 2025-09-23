import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  max-width: 1200px;
  margin: 32px auto;
  padding: 0 16px;
`;

export const BackButton = styled.button`
  padding: 6px 12px;
  border: 2px solid ${colors.primary};
  background-color: transparent;
  color: ${colors.primary};
  font-weight: bold;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.primaryTextHover};
  }

  @media (max-width: 768px) {
    padding: 5px 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  gap: 16px;
`;

export const CharacterImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Name = styled.h1`
  margin: 0;
`;

export const Description = styled.p`
  margin: 0;
`;

export const Section = styled.div`
  margin-top: 24px;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 12px;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
  margin-bottom: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Item = styled.div`
  padding: 12px;
  border: 1px solid ${colors.secondaryBorder};
  border-radius: 8px;
  background-color: ${colors.primaryBorder};
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.secondaryText};
  transition: all 0.2s;

  &:hover {
    background-color: ${colors.secondaryTextHover};
    border-color: ${colors.primary};
  }
`;

export const ItemImage = styled.img`
  width: 100%;
  border-radius: 4px;
`;

export const ToggleButton = styled.button`
  margin-top: 8px;
  background: transparent;
  border: none;
  color: ${colors.primary};
  cursor: pointer;
  font-weight: bold;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;
