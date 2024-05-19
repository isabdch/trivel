// Core
import { NextApiRequest, NextApiResponse } from "next";

// Types
import { ItinerariesT } from "@/types/itineraries";

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<ItinerariesT[]>
) => {
  const itineraries: ItinerariesT[] = [
    {
      name: "Praia de Paripueira",
      id: "Xy3u9oPq7R",
      description:
        "Descubra um paraíso intocado em Alagoas, com águas cristalinas e areias brancas. Mergulhe em recifes de corais e saboreie frutos do mar frescos.",
      popular: false,
      img: "/assets/images/paripueira.jpeg",
      link: "praia-de-paripueira",
    },
    {
      name: "São Miguel dos Milagres",
      id: "K1mN8sD6zY",
      description:
        "Encante-se com a serenidade e beleza natural de São Miguel dos Milagres e desfrute de praias desertas com águas calmas.",
      popular: false,
      img: "/assets/images/sao-miguel-milagres.jpg",
      link: "sao-miguel-dos-milagres",
    },
    {
      name: "Milagres do Toque - Beach Club",
      id: "J7rT2hB4gE",
      description:
        "Desfrute de drinks refrescantes, areias douradas e mar azul-turquesa no Milagres do Toque - Beach Club. Uma experiência de prazer e sofisticação.",
      popular: false,
      img: "/assets/images/milagres-do-toque.jpg",
      link: "milagres-do-toque-beach-club",
    },
    {
      name: "Praia de Maragogi",
      id: "W5tF2aG6vR",
      description:
        "Exuberância e mergulho com snorkel em piscinas naturais de águas cristalinas. Encante-se com corais coloridos e relaxe à beira-mar.",
      popular: true,
      img: "/assets/images/maragogi.jpg",
      link: "praia-de-maragogi",
    },
    {
      name: "Barra de São Miguel",
      id: "L3pX6kY9jA",
      description:
        "Refúgio de paz e diversão com praias extensas, coqueirais, banhos de mar e esportes aquáticos. Culinária local e pôr do sol deslumbrante.",
      popular: false,
      img: "/assets/images/barra-sao-miguel.jpg",
      link: "barra-de-sao-miguel",
    },
    {
      name: "Foz do Rio São Francisco",
      id: "Z9qV4cM2bN",
      description:
        "Contemple a majestosidade da Foz do Rio São Francisco em passeios de barco, fauna e flora exuberantes e cultura local autêntica.",
      popular: false,
      img: "/assets/images/foz-sao-francisco.jpeg",
      link: "foz-do-rio-sao-francisco",
    },
    {
      name: "Dunas de Marapé",
      id: "H6fR1dE3tG",
      description:
        "Aventura emocionante em dunas douradas, passeios de buggy e lagoas cristalinas. Desconecte-se em um oásis natural de pura diversão.",
      popular: false,
      img: "/assets/images/dunas-marape.jpg",
      link: "dunas-de-marape",
    },
    {
      name: "Ilha da Croa - Capitão Nikolas",
      id: "N8yC2uT4wS",
      description:
        "Deslumbre-se com praias intocadas, águas cristalinas e atividades aquáticas emocionantes. Uma experiência única de luxo e natureza em Alagoas.",
      popular: false,
      img: "/assets/images/capitao-nikolas.jpeg",
      link: "ilha-da-croa-capitao-nikolas",
    },
  ];

  res.status(200).json(itineraries);
}

export default handler;