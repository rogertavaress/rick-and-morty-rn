type Episode = {
  air_date: string;
  created: string;
  episode: string;
  id: string;
  name: string;
};

export type Character = {
  created: string;
  gender: string;
  id: string;
  image: string;
  episode: Episode[];
  location: {
    type: string;
    name: string;
    id: string;
    dimension: string | null;
  };
  name: string;
  origin: {
    type: string | null;
    name: string | null;
    id: string | null;
    dimension: string | null;
  };
  species: string;
  status: string;
  type: string;
};

export type Info = {
  count: number;
  next: number | null;
  pages: number;
  prev: number | null;
};
