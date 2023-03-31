import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

import { Itineraries, Itinerary } from "@/types/itineraries";

import { Breadcrumbs } from "@/components/breadcrumbs/breadcrumbs";

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

  return (
    <>
      <Breadcrumbs links={links} />
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
      revalidate: 5 * 60 * 60 // 5 hours
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
