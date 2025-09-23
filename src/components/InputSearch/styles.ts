import styled from "styled-components";
import { colors } from "../../styles/colors";

export const SectionWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 32px auto 24px;
  padding: 0 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
    max-width: 500px;
    padding: 0 8px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: ${colors.secondary};
  padding: 6px 12px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  margin-top: 8px;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
    max-width: none;
    padding: 4px 8px;
  }
`;

export const TitleInput = styled.h1`
  margin-bottom: 16px;
`;

export const Typography = styled.h3`
  margin-bottom: 8px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 14px;
  background-color: transparent;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.7;
  }
`;
