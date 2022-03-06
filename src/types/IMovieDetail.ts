export interface IMovieDetail {
  id: string;
  genres: Array<string>;
  name: string;
  image: {
    medium: string;
  };
  webChannel: {
    country: {
      code: string;
    };
  };
  rating: {
    average: string;
  };
  language: string;
  summary: string;
  premiered: string;
}
