import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { ItineraryGeneral } from "@/types/itineraries";

import { Badge, Button } from "@mantine/core";
import { GiPalmTree } from "react-icons/gi";

import { CardComponent } from "./cardStyles";

type Props = {
  itinerary: ItineraryGeneral;
};

export function Card({ itinerary }: Props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const animation = {
    style: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    transition: {
      duration: 0.5,
      type: "spring",
      bounce: 0.4,
    },
  };

  return (
    <CardComponent {...animation}>
      <div className="img">
        <Image
          src={
            itinerary.attributes.thumbnail?.data
              ? process.env.NEXT_PUBLIC_URL! +
                itinerary.attributes.thumbnail.data.attributes.url
              : "/assets/images/card_default.jpeg"
          }
          alt={itinerary.attributes.name}
          fill
        />
      </div>

      <div className="card__body">
        <div className="title">
          <h4>{itinerary.attributes.name}</h4>
          {itinerary.attributes.popular && <Badge>Popular</Badge>}
        </div>

        <p>{itinerary.attributes.description}</p>

        <Button
          loading={loading}
          leftIcon={<GiPalmTree />}
          onClick={() => {
            setLoading(true);
            router.push(
              "/roteiros/" +
                itinerary.id +
                "-" +
                itinerary.attributes.name.toLowerCase().replaceAll(" ", "-")
            );
          }}
        >
          Ver destino
        </Button>
      </div>
    </CardComponent>
  );
}
