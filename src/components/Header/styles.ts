import styled from "styled-components";
import { colors } from "../../styles/colors";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: ${colors.secondary};
  border-bottom: 1px solid ${colors.secondaryBorder};
  margin-bottom: 16px;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: auto;
    padding: 10px;
    gap: 10px;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

export const Logo = styled.img`
  height: 40px;

  @media (max-width: 480px) {
    height: 35px;
  }
`;

export const UserName = styled.span`
  font-weight: bold;
  font-size: 16px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const UserDescription = styled.span`
  font-size: 14px;
  color: ${colors.secondaryText};

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const UserPhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`;
