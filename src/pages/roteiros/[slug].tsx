import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

import { Itineraries, Itinerary } from "@/types/itineraries";

import { Cover } from "@/components/cover/cover";
import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";
import { ItineraryPage } from "@/styles/pages/roteiroStyles";

type PathParams = {
  slug: string;
};

type Props = {
  itinerary: Itinerary;
};

export default function Roteiro({ itinerary }: Props) {
  const router = useRouter();
  const links = [
    {
      title: "Roteiros",
      href: "/roteiros",
    },
    {
      title: itinerary.data.attributes.name,
      href: router.asPath,
    },
  ];

  console.log(itinerary);

  return (
    <>
      <Breadcrumbs links={links} />
      <Cover
        src={
          process.env.NEXT_PUBLIC_URL! +
          itinerary.data.attributes.cover?.data.attributes.url
        }
      />
      <ItineraryPage>
        <div className="container"></div>
      </ItineraryPage>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/itineraries/${
      (params as PathParams).slug.split("-")[0]
    }?populate=*`
  );
  const itinerary: Itinerary = await res.json();

  return {
    props: {
      itinerary,
      revalidate: 5 * 60 * 60, // 5 hours
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/itineraries?populate=*`
  );
  const itineraries: Itineraries = await res.json();

  const paths = itineraries.data.map((itinerary) => ({
    params: {
      slug:
        itinerary.id +
        "-" +
        itinerary.attributes.name.toLowerCase().replaceAll(" ", "-"),
    },
  }));

  return { paths, fallback: false };
};
