import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.jikan.moe/v4",
});

export const testeAxios = axios.create({
  baseURL: "https://batata.teste",
});