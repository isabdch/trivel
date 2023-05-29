import { GetStaticProps } from "next";
import { Itineraries } from "@/types/itineraries";
import { useFetchItineraries } from "@/composables/useFetch";
import { Card } from "@/components/itineraries/card/card";
import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";
import { ItinerariesPage } from "@/styles/pages/roteirosStyles";

type ItinerariesPageProps = {
  itineraries: Itineraries[];
};

export default function Roteiros({ itineraries }: ItinerariesPageProps) {
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
            {itineraries?.map((itinerary) => {
              return <Card itinerary={itinerary} key={itinerary.id} />;
            })}
          </div>
        </div>
      </ItinerariesPage>
    </>
  );
}

export const getStaticProps: GetStaticProps<
  ItinerariesPageProps
> = async () => {
  const itineraries: Itineraries[] = await useFetchItineraries();

  return {
    props: {
      itineraries,
      revalidate: 5 * 60 * 60, // 5 hours
    },
  };
};
