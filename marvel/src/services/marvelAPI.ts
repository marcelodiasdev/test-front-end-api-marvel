import axios from "axios";
import md5 from "md5";
import type { MarvelAPIParams } from "../@types/MarvelAPIParams";
import type { MarvelAPIParamsDetail } from "../@types/MarvelAPIParamsDetail";

const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY;

const getAuthParams = () => {
  const ts = new Date().getTime();
  const hash = md5(ts + privateKey + publicKey);
  return { ts, apikey: publicKey, hash };
};

export const fetchMarvelCharacters = async (
  page: number,
  limit: number,
  searchTerm?: string
) => {
  const params: MarvelAPIParams = {
    ...getAuthParams(),
    limit,
    offset: (page - 1) * limit,
  };
  if (searchTerm?.trim()) params.nameStartsWith = searchTerm;

  const response = await axios.get(
    "https://gateway.marvel.com/v1/public/characters",
    { params }
  );
  return response.data.data;
};

export const fetchMarvelCharacterById = async (id: number) => {
  const params: MarvelAPIParamsDetail = getAuthParams();
  const response = await axios.get(
    `https://gateway.marvel.com/v1/public/characters/${id}`,
    { params }
  );
  return response.data.data.results[0];
};
