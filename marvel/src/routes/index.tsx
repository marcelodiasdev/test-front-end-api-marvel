import { Route, Routes } from "react-router";

import { HomePage } from "../pages/HomePage";
import { CharacterDetail } from "../pages/CharacterDetail";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/character/:id" element={<CharacterDetail />} />
  </Routes>
);
