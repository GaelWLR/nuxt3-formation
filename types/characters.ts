/**
 * @see {@link https://rickandmortyapi.com/api/character/1} for example
 */
export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episodes: string[];
  url: string;
  created: string;
};

/**
 * Type corresponding to the result of the characters graphql query
 */
export type CharactersGql = ({
  id?: string | null | undefined;
  name?: string | null | undefined;
  image?: string | null | undefined;
  species?: string | null | undefined;
} | null)[];

/**
 * Type corresponding to the result of the character graphql query
 */
export type CharacterGql =
  | {
      id?: string | null | undefined;
      name?: string | null | undefined;
      species?: string | null | undefined;
      type?: string | null | undefined;
      gender?: string | null | undefined;
      origin?:
        | {
            name?: string | null | undefined;
          }
        | null
        | undefined;
      location?:
        | {
            name?: string | null | undefined;
          }
        | null
        | undefined;
      image?: string | null | undefined;
    }
  | null
  | undefined;
