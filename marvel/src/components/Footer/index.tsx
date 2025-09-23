import React from "react";
import type { ReactNode } from "react";

import { ButtonIcon, FooterContainer, PageButton } from "./styles";
import { getVisiblePages } from "./utils";

import { useCharactersContext } from "../../hooks/useCharactersContext";

interface NavButtonProps {
  onClick: () => void;
  hide?: boolean;
  children: ReactNode;
}

const NavButton = ({ onClick, hide, children }: NavButtonProps) => {
  if (hide) return null;
  return <ButtonIcon onClick={onClick}>{children}</ButtonIcon>;
};

export const Footer = () => {
  const { page, setPage, total } = useCharactersContext();

  const limit = 10;
  const totalPages = Math.ceil(total / limit) || 1;
  const pages = getVisiblePages(page, totalPages);

  return (
    <FooterContainer>
      <NavButton onClick={() => setPage(1)} hide={page === 1}>
        {"<<"}
      </NavButton>
      <NavButton onClick={() => setPage(page - 1)} hide={page === 1}>
        {"<"}
      </NavButton>

      {pages.map((p) => (
        <PageButton key={p} onClick={() => setPage(p)} $active={p === page}>
          {p}
        </PageButton>
      ))}

      <NavButton onClick={() => setPage(page + 1)} hide={page === totalPages}>
        {">"}
      </NavButton>
      <NavButton onClick={() => setPage(totalPages)} hide={page === totalPages}>
        {">>"}
      </NavButton>
    </FooterContainer>
  );
};
