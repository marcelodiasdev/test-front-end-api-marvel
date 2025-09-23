import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/colors";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  border: 4px solid ${colors.secondary};
  border-top: 4px solid ${colors.primary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

export const FullPageLoaderWrapper = styled(LoaderWrapper)`
  min-height: 700px;
  flex-direction: column;
`;
