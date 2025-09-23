import type { ReactNode } from "react";
import { FullPageLoaderWrapper, Loader } from "./styles";

interface FullPageLoaderProps {
  loading?: boolean;
  error?: string;
  items?: unknown[];
  emptyMessage?: string;
  children?: ReactNode;
}

export const FullPageLoader = ({
  loading,
  error,
  items,
  emptyMessage = "Nenhum item encontrado",
  children,
}: FullPageLoaderProps) => {
  if (loading) {
    return (
      <FullPageLoaderWrapper>
        <Loader />
      </FullPageLoaderWrapper>
    );
  }

  if (error) {
    return (
      <FullPageLoaderWrapper>
        <p>{error}</p>
      </FullPageLoaderWrapper>
    );
  }

  if (!items || items.length === 0) {
    return (
      <FullPageLoaderWrapper>
        <p>{emptyMessage}</p>
      </FullPageLoaderWrapper>
    );
  }

  return <>{children}</>;
};
