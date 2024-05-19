// Core
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

// Libraries
import { IoMdAlert } from "react-icons/io";
import { GiPalmTree } from "react-icons/gi";
import { Alert } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

// Composables
import { useFetchItineraries, useFetchItinerary } from "@/composables/useFetch";

// Components
import { Cover } from "@/components/cover/cover";
import { HtmlContent } from "@/components/htmlContent";
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

  const autoplay = useRef(Autoplay({ delay: 3000 }));

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
        <div className="container">
          <h1>{itinerary.name}</h1>

          <div className={styles.itinerary__wrapper}>
            <div className={styles.itinerary__wrapper__info}>
              <p>{itinerary.details.description}</p>

              <p>
                <strong>Roteiro:</strong> {itinerary.details.tour}
              </p>

              <p>
                <strong>Preço do pacote:</strong>{" "}
                <Link href="/contato">entre em contato</Link> conosco para saber
                mais!
              </p>

              {itinerary.details.alert && (
                <Alert title="Importante" icon={<IoMdAlert />}>
                  <HtmlContent htmlString={itinerary.details.alert} />
                </Alert>
              )}

              {itinerary.details.observations && (
                <HtmlContent htmlString={itinerary.details.observations} />
              )}

              {itinerary.details.optional?.length && (
                <div className={styles.info__optional__wrapper}>
                  <h3>Passeios opcionais</h3>

                  {itinerary.details.optional.map((opt) => {
                    return (
                      <div key={opt.title} className={styles.optional__wrapper}>
                        <GiPalmTree />

                        <div>
                          <strong>{opt.title}</strong>

                          <p>{opt.description}</p>

                          {opt.img && (
                            <div className={styles["optional__img-wrapper"]}>
                              <div className={styles.wrapper__img}>
                                <Image fill src={opt.img} alt={opt.title} />
                              </div>
                              <span>{opt.title}</span>
                            </div>
                          )}

                          {opt.duration && (
                            <p>
                              <strong>Duração:</strong> {opt.duration}
                            </p>
                          )}

                          {opt.price && (
                            <p>
                              <strong>Preços:</strong> {opt.price}
                            </p>
                          )}

                          {opt.observations && (
                            <HtmlContent htmlString={opt.observations} />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className={styles.itinerary__wrapper_carousel}>
              <Carousel
                withIndicators
                loop
                height={500}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
              >
                {itinerary.media.map((media) => (
                  <Carousel.Slide
                    key={media}
                    className={styles.carousel__slide}
                  >
                    <Image fill src={media} alt={itinerary.name} />
                  </Carousel.Slide>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
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
