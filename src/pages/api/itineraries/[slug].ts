// Core
import { NextApiRequest, NextApiResponse } from "next";

// Types
import { ItineraryT } from "@/types/itineraries";

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<ItineraryT | { message: string }>
) => {
  const itineraries = [
    {
      name: "Praia de Paripueira",
      id: "Xy3u9oPq7R",
      details: {
        description:
          "Localizada no pitoresco litoral norte de Alagoas, a apenas 33 km do centro de Maceió, encontra-se a deslumbrante praia de Paripueira. Renomada por suas águas serenas, este paraíso é o destino perfeito para aqueles em busca de um refrescante mergulho. Além disso, a praia conta com uma infraestrutura exemplar à beira-mar, proporcionando entretenimento com bandas ao vivo e apresentações culturais para serem apreciados, tudo isso enquanto se deleita com a excelente gastronomia local e suas bebidas típicas.",
        tour: "",
        alert: "",
        duration: "",
        timetable: "",
        meetingPoint: "",
        costPerPerson: "",
        whatIsIncluded: "",
        whatIsNotIncluded: "",
        additional: {
          recommendations: "",
          security: "",
          accessibilty: "",
        },
        optional: [
          {
            title: "",
            description: "",
            duration: "",
            price: "",
            observations: "",
          },
        ],
      },
      popular: false,
      cover: "/assets/images/paripueira.jpeg",
      media: [],
      link: "praia-de-paripueira",
    },
    {
      name: "São Miguel dos Milagres",
      id: "K1mN8sD6zY",
      details: {
        description: "",
        tour: "",
        alert: "",
        duration: "",
        timetable: "",
        meetingPoint: "",
        costPerPerson: "",
        whatIsIncluded: "",
        whatIsNotIncluded: "",
        additional: {
          recommendations: "",
          security: "",
          accessibilty: "",
        },
        optional: [
          {
            title: "",
            description: "",
            duration: "",
            price: "",
            observations: "",
          },
        ],
      },
      popular: false,
      cover: "/assets/images/sao-miguel-milagres.jpg",
      media: [],
      link: "sao-miguel-dos-milagres",
    },
    {
      name: "Milagres do Toque - Beach Club",
      id: "J7rT2hB4gE",
      details: {
        description: "",
        tour: "",
        alert: "",
        duration: "",
        timetable: "",
        meetingPoint: "",
        costPerPerson: "",
        whatIsIncluded: "",
        whatIsNotIncluded: "",
        additional: {
          recommendations: "",
          security: "",
          accessibilty: "",
        },
        optional: [
          {
            title: "",
            description: "",
            duration: "",
            price: "",
            observations: "",
          },
        ],
      },
      popular: false,
      cover: "/assets/images/milagres-do-toque.jpg",
      media: [],
      link: "milagres-do-toque-beach-club",
    },
    {
      name: "Praia de Maragogi",
      id: "W5tF2aG6vR",
      details: {
        description: "",
        tour: "",
        alert: "",
        duration: "",
        timetable: "",
        meetingPoint: "",
        costPerPerson: "",
        whatIsIncluded: "",
        whatIsNotIncluded: "",
        additional: {
          recommendations: "",
          security: "",
          accessibilty: "",
        },
        optional: [
          {
            title: "",
            description: "",
            duration: "",
            price: "",
            observations: "",
          },
        ],
      },
      popular: true,
      cover: "/assets/images/maragogi.jpg",
      media: [],
      link: "praia-de-maragogi",
    },
    {
      name: "Barra de São Miguel",
      id: "L3pX6kY9jA",
      details: {
        description: "",
        tour: "",
        alert: "",
        duration: "",
        timetable: "",
        meetingPoint: "",
        costPerPerson: "",
        whatIsIncluded: "",
        whatIsNotIncluded: "",
        additional: {
          recommendations: "",
          security: "",
          accessibilty: "",
        },
        optional: [
          {
            title: "",
            description: "",
            duration: "",
            price: "",
            observations: "",
          },
        ],
      },
      popular: false,
      cover: "/assets/images/barra-sao-miguel.jpg",
      media: [],
      link: "barra-de-sao-miguel",
    },
    {
      name: "Foz do Rio São Francisco",
      id: "Z9qV4cM2bN",
      details: {
        description: "",
        tour: "",
        alert: "",
        duration: "",
        timetable: "",
        meetingPoint: "",
        costPerPerson: "",
        whatIsIncluded: "",
        whatIsNotIncluded: "",
        additional: {
          recommendations: "",
          security: "",
          accessibilty: "",
        },
        optional: [
          {
            title: "",
            description: "",
            duration: "",
            price: "",
            observations: "",
          },
        ],
      },
      popular: false,
      cover: "/assets/images/foz-sao-francisco.jpeg",
      media: [],
      link: "foz-do-rio-sao-francisco",
    },
    {
      name: "Dunas de Marapé",
      id: "H6fR1dE3tG",
      details: {
        description: "",
        tour: "",
        alert: "",
        duration: "",
        timetable: "",
        meetingPoint: "",
        costPerPerson: "",
        whatIsIncluded: "",
        whatIsNotIncluded: "",
        additional: {
          recommendations: "",
          security: "",
          accessibilty: "",
        },
        optional: [
          {
            title: "",
            description: "",
            duration: "",
            price: "",
            observations: "",
          },
        ],
      },
      popular: false,
      cover: "/assets/images/dunas-marape.jpg",
      media: [],
      link: "dunas-de-marape",
    },
    {
      name: "Ilha da Croa - Capitão Nikolas",
      id: "N8yC2uT4wS",
      details: {
        description:
          "Localizada na Barra de Santo Antônio, aproximadamente 48 km de Maceió, é um lugar tranquilo com uma paisagem deslumbrante. Cercada por mata nativa ainda preservada, o cenário se torna ainda mais paradisíaco, sendo ideal para quem busca descanso e um bom banho de mar.",
        tour: "Passeio ao Beach Club Capitão Nikolas.",
        alert:
          "É <strong>indispensável</strong> o pagamento de R$40,00 por adulto, referente ao day use do Beach Club. Crianças de até 6 anos não pagam, e entre 7 e 11 anos pagam R$25,00.",
        observations:
          "<p><em>Valores sujeitos a alteração, dependendo do fornecedor, consultar antecipadamente.</em></p>",
        duration: "",
        timetable: "",
        meetingPoint: "",
        costPerPerson: "",
        whatIsIncluded: "",
        whatIsNotIncluded: "",
        additional: {
          recommendations: "",
          security: "",
          accessibilty: "",
        },
        optional: [
          {
            title: "Praia de Carro Quebrado",
            img: "/assets/images/carro-quebrado.jpg",
            description:
              "Um dos mais belos recantos de Alagoas, cercado por impressionantes falésias coloridas que contrastam com a vegetação nativa do mar. Eleita em 2009 a 6ª praia deserta mais bonita do Brasil.",
            duration: "1h30 (uma hora e trinta minutos)",
            price: "Quadriciclo: R$170,00 (comporta 2 pessoas) - Buggy: R$70,00 reais por pessoa - Jipe: R$60,00 reais por pessoa",
            observations: "<p><em>Valores sujeitos a alteração, dependendo do fornecedor, consultar antecipadamente.</em></p>",
          },
        ],
      },
      popular: false,
      cover: "/assets/images/capitao-nikolas.jpeg",
      media: ["/assets/images/capitao-nikolas.jpeg", "/assets/images/carro-quebrado.jpg"],
      link: "ilha-da-croa-capitao-nikolas",
    },
  ];

  const { slug } = req.query;
  const itinerary = itineraries.find((item) => item.link === slug);

  if (!itinerary) {
    return res.status(404).json({ message: "Destino não encontrado." });
  }

  res.status(200).json(itinerary);
};

export default handler;
