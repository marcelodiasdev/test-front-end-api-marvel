export const getVisiblePages = (currentPage: number, totalPages: number) => {
  const pages: number[] = [];
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 4);
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  return pages;
};
