export type ItinerariesT = {
  name: string;
  id: string;
  description: string;
  popular: boolean;
  img: string;
  link: string;
};

export type ItineraryT = {
  name: string;
  id: string;
  details: {
    description: string;
  };
  media: string[];
  popular: boolean;
  cover: string;
  link: string;
};
