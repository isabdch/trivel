// Core
import { NextApiRequest, NextApiResponse } from "next";

// Types
import { ItineraryT } from "@/types/itineraries";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ItineraryT | { message: string }>
) {
  const itineraries = [
    {
      name: "Praia de Paripueira",
      id: "Xy3u9oPq7R",
      details: {
        description:
          "Localizada no pitoresco litoral norte de Alagoas, a apenas 33 km do centro de Maceió, encontra-se a deslumbrante praia de Paripueira. Renomada por suas águas serenas, este paraíso é o destino perfeito para aqueles em busca de um refrescante mergulho em suas águas tépidas e cristalinas. Além disso, a praia conta com uma infraestrutura exemplar à beira-mar, proporcionando entretenimento com bandas ao vivo e apresentações culturais para serem apreciados, tudo isso enquanto se deleita com a excelente gastronomia local e suas bebidas típicas.",
      },
      popular: false,
      cover: "",
      media: [],
      link: "praia-de-paripueira",
    },
    {
      name: "São Miguel dos Milagres",
      id: "K1mN8sD6zY",
      details: {
        description: "",
      },
      popular: false,
      cover: "",
      media: [],
      link: "sao-miguel-dos-milagres",
    },
    {
      name: "Milagres do Toque - Beach Club",
      id: "J7rT2hB4gE",
      details: {
        description: "",
      },
      popular: false,
      cover: "",
      media: [],
      link: "milagres-do-toque-beach-club",
    },
    {
      name: "Praia de Maragogi",
      id: "W5tF2aG6vR",
      details: {
        description: "",
      },
      popular: true,
      cover: "",
      media: [],
      link: "praia-de-maragogi",
    },
    {
      name: "Barra de São Miguel",
      id: "L3pX6kY9jA",
      details: {
        description: "",
      },
      popular: false,
      cover: "",
      media: [],
      link: "barra-de-sao-miguel",
    },
    {
      name: "Foz do Rio São Francisco",
      id: "Z9qV4cM2bN",
      details: {
        description: "",
      },
      popular: false,
      cover: "",
      media: [],
      link: "foz-do-rio-sao-francisco",
    },
    {
      name: "Dunas de Marapé",
      id: "H6fR1dE3tG",
      details: {
        description: "",
      },
      popular: false,
      cover: "",
      media: [],
      link: "dunas-de-marape",
    },
    {
      name: "Ilha da Croa - Capitão Nikolas",
      id: "N8yC2uT4wS",
      details: {
        description: "",
      },
      popular: false,
      cover: "",
      media: [],
      link: "ilha-da-croa-capitao-nikolas",
    },
  ];

  const { slug } = req.query;
  const itinerary = itineraries.find((item) => item.link === slug);

  if (!itinerary) {
    return res.status(404).json({ message: "Destino não encontrado." });
  }

  res.status(200).json(itinerary);
}
