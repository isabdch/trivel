import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { useFetchItineraries, useFetchItinerary } from "@/composables/useFetch";
import { Itineraries, Itinerary } from "@/types/itineraries";
import { Cover } from "@/components/cover/cover";
import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";
import { ItineraryPage } from "@/styles/pages/roteiroStyles";

type PathParams = {
  slug: string;
};

type ItineraryPageProps = {
  itinerary: Itinerary;
};

const Itinerary = ({ itinerary }: ItineraryPageProps) => {
  const router = useRouter();
  const links = [
    {
      title: "Roteiros",
      href: "/roteiros",
    },
    {
      title: itinerary.name,
      href: router.asPath,
    },
  ];

  console.log(itinerary);

  return (
    <>
      <Breadcrumbs links={links} />
      <Cover src={itinerary.cover} />
      <ItineraryPage>
        <div className="container"></div>
      </ItineraryPage>
    </>
  );
}

export default Itinerary;

export const getStaticProps: GetStaticProps<ItineraryPageProps> = async ({ params }) => {
  const itinerary: Itinerary = await useFetchItinerary((params as PathParams).slug);

  return {
    props: {
      itinerary,
      revalidate: 5 * 60 * 60, // 5 hours
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const itineraries: Itineraries[] = await useFetchItineraries();

  const paths = itineraries.map((itinerary) => ({
    params: {
      slug: itinerary.link,
    },
  }));

  return { paths, fallback: false };
};
