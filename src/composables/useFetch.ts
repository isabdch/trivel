import axios from "axios";

export const useFetchItineraries = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/itineraries`
    );
    const data = await res.data;
    return data;
  } catch (error) {
    console.error("Error fetching API data:", error);
    throw error;
  }
};

export const useFetchItinerary = async (link: string) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/itineraries/${link}`
    );
    const data = await res.data;
    return data;
  } catch (error) {
    console.error("Error fetching API data:", error);
    throw error;
  }
};
