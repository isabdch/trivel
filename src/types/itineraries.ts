export type Itineraries = {
  name: string;
  id: string;
  description: string;
  popular: boolean;
  img: string;
  link: string;
};

export type Itinerary = {
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
