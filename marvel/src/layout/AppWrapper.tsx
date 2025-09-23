import type { ReactNode } from "react";
import { AppWrapperContainer, Content } from "./styles";

export const AppWrapper = ({ children }: { children: ReactNode }) => {
  return <AppWrapperContainer>{children}</AppWrapperContainer>;
};

export { Content };
