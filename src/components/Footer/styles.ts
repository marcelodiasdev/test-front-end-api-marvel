import styled from "styled-components";
import { colors } from "../../styles/colors";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
  padding: 0 10px;
  background-color: ${colors.secondary};
  height: 70px;

  @media (max-width: 768px) {
    padding: 10px;
    height: 62px;
  }
`;

interface PageButtonProps {
  $active?: boolean;
}

export const PageButton = styled.button<PageButtonProps>`
  padding: 8px 14px;
  margin: 0 4px;
  border-radius: 4px;
  border: 1px solid ${colors.secondaryBorder};
  background-color: ${({ $active }) =>
    $active ? colors.primary : colors.secondary};
  color: ${({ $active }) =>
    $active ? colors.primaryText : colors.secondaryText};
  cursor: pointer;
  font-weight: ${({ $active }) => ($active ? "bold" : "normal")};
  font-size: 16px;

  &:hover {
    background-color: ${({ $active }) =>
      $active ? colors.primary : colors.secondaryBorder};
    color: ${({ $active }) =>
      $active ? colors.primaryText : colors.secondaryText};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;

    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: 16px;
  }
`;

interface PageButtonIconProps {
  $hide?: boolean;
}

export const ButtonIcon = styled.button<PageButtonIconProps>`
  padding: 6px 12px;
  border: none;
  background-color: ${colors.secondary};
  cursor: pointer;
  font-size: 16px;
  display: ${({ $hide }) => ($hide ? "none" : "inline-flex")};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;
