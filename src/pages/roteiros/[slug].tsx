// Core
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

// Composables
import { useFetchItineraries, useFetchItinerary } from "@/composables/useFetch";

// Components
import { Cover } from "@/components/cover/cover";
import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";

// Assets
import styles from "@/styles/pages/itinerary.module.scss";

// Types
import { ItinerariesT, ItineraryT } from "@/types/itineraries";

type PathParamsT = {
  slug: string;
};

type ItineraryPagePropsT = {
  itinerary: ItineraryT;
};

const Itinerary = ({ itinerary }: ItineraryPagePropsT) => {
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

      <main className={styles.itinerary}>
        <div className="container"></div>
      </main>
    </>
  );
};

export default Itinerary;

export const getStaticProps: GetStaticProps<ItineraryPagePropsT> = async ({
  params,
}) => {
  const itinerary: ItineraryT = await useFetchItinerary(
    (params as PathParamsT).slug
  );

  return {
    props: {
      itinerary,
      revalidate: 5 * 60 * 60, // 5 hours
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const itineraries: ItinerariesT[] = await useFetchItineraries();

  const paths = itineraries.map((itinerary) => ({
    params: {
      slug: itinerary.link,
    },
  }));

  return { paths, fallback: false };
};
