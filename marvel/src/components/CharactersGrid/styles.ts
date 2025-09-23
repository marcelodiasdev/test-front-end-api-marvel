import styled from "styled-components";
import { colors } from "../../styles/colors";

export const GridWrapper = styled.div`
  width: 100%;
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 10px;
  margin-bottom: 24px;
`;

export const CharacterInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CharacterName = styled.span`
  font-weight: 500;
  font-size: 16px;
`;

export const GridContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 20px auto 0;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    max-width: 500px;
  }
`;

export const GridRow = styled.div`
  display: flex;
  background-color: ${colors.primaryTextHover};
  border-radius: 4px;
  padding: 8px;
  align-items: center;
  box-shadow: 0 1px 3px ${colors.colorBoxShadow};
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const GridHeaderRow = styled(GridRow)`
  background-color: transparent;
  box-shadow: none;
  font-weight: bold;
  padding: 0 24px;
`;

export const GridCell = styled.div`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 6px 12px;

  &:nth-child(1) {
    flex: 4;
  }

  &:nth-child(2),
  &:nth-child(3) {
    flex: 3;
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    padding: 8px;

    &:nth-child(2),
    &:nth-child(3) {
      display: none;
    }
  }
`;

export const GridHeaderCell = styled(GridCell)`
  white-space: normal;
  color: ${colors.tertiaryColor};

  @media (max-width: 768px) {
    margin-left: 24px;
    &:nth-child(n + 2) {
      display: none;
    }
  }
`;

export const CharacterImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 10px;
`;
