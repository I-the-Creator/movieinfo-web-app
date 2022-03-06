import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

export const getMoviesOnQuery = (): Promise<AxiosResponse> => {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: "https://api.tvmaze.com/search/shows",
    params: { q: "twin" },
  };

  return axios.request(options);
};

export const getAllMoviesOnQuery = (): Promise<AxiosResponse> => {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: "https://api.tvmaze.com/shows",
    params: { q: "Spider Man" },
  };

  return axios.request(options);
};

export const getAllMoviesOnSearch = (
  searchTerm: string
): Promise<AxiosResponse> => {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: `https://api.tvmaze.com/search/shows/?q=${searchTerm}`,
  };

  return axios.request(options);
};

// get movie by ID
export const getMovieById = (id: string): Promise<AxiosResponse> => {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: `https://api.tvmaze.com/shows/${id}`,
  };

  return axios.request(options);
};
