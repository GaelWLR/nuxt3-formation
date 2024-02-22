/**
 * @see {@link https://rickandmortyapi.com/api/episode/1} for example
 */
export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};
