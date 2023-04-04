export type Itineraries = {
  data: ItineraryGeneral[];
};

export type Itinerary = {
  data: ItineraryGeneral;
};

export type ItineraryGeneral = {
  attributes: ItineraryAttributes;
  id: number;
};

export type ItineraryAttributes = {
  cover?: {
    data: {
      attributes: {
        alternativeText: string;
        caption?: string;
        url: string;
      };
    };
  };
  createdAt: string;
  description: string;
  details: string;
  media?: {
    data: {
      attributes: {
        alternativeText: string;
        caption?: string;
        url: string;
      };
      id: number;
    }[];
  };
  name: string;
  popular: boolean;
  thumbnail?: {
    data: {
      attributes: {
        alternativeText: string;
        caption?: string;
        url: string;
      };
      id: number;
    };
  };
  updatedAt: string;
};
