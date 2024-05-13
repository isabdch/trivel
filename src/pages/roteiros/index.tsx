// Core
import { GetStaticProps } from "next";

// Composables
import { useFetchItineraries } from "@/composables/useFetch";

// Components
import { Card } from "@/components/itineraries/card/card";
import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";

// Assets
import { ItinerariesPage } from "@/styles/pages/roteirosStyles";

// Types
import { ItinerariesT } from "@/types/itineraries";

type ItinerariesPageProps = {
  itineraries: ItinerariesT[];
};

const Itineraries = ({ itineraries }: ItinerariesPageProps) => {
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
};

export default Itineraries;

export const getStaticProps: GetStaticProps<
  ItinerariesPageProps
> = async () => {
  const itineraries: ItinerariesT[] = await useFetchItineraries();

  return {
    props: {
      itineraries,
      revalidate: 5 * 60 * 60, // 5 hours
    },
  };
};
