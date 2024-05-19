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
    tour: string;
    alert?: string;
    observations?: string;
    duration?: string;
    timetable?: string;
    meetingPoint?: string;
    costPerPerson?: string;
    whatIsIncluded?: string;
    whatIsNotIncluded?: string;
    additional?: {
      recommendations?: string;
      security?: string;
      accessibilty?: string;
    };
    optional?: {
      title: string;
      description: string;
      duration?: string;
      price?: string;
      img?: string;
      observations?: string;
    }[];
  };
  media: string[];
  popular: boolean;
  cover: string;
  link: string;
};
