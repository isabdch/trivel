import { GetStaticProps } from "next";

import { Itineraries } from "@/types/itineraries";

import { Card } from "@/components/itineraries/card/card";
import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";

import { ItinerariesPage } from "@/styles/pages/roteirosStyles";

type Props = {
  itineraries: Itineraries;
};

export default function Roteiros({ itineraries }: Props) {
  const links = [
    {
      title: "Roteiros",
      href: "/roteiros",
    },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <ItinerariesPage>
        <div className="container">
          <h1>
            Roteiros <strong>Trível</strong>
          </h1>

          <div className="cards">
            {itineraries.data?.map((itinerary) => {
              return <Card itinerary={itinerary} key={itinerary.id} />;
            })}
          </div>
        </div>
      </ItinerariesPage>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/itineraries?populate=*`
  );
  const itineraries: Itineraries = await res.json();

  return {
    props: {
      itineraries,
      revalidate: 5 * 60 * 60, // 5 hours
    },
  };
};
