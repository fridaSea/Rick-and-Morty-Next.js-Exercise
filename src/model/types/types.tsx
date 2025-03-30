// use the VSCode extension: JSON to TS - copy the schema - paste it here - select it - use: Shift + Ctrl + Alt + S

export type APIOKResponse = {
  info: Info;
  results: Character[];
};

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Origin;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type Origin = {
  name: string;
  url: string;
};

export type Info = {
  count: number;
  pages: number;
  next: string;
  prev: null;
};
