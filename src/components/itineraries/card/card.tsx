import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Itineraries } from "@/types/itineraries";
import { Badge, Button } from "@mantine/core";
import { GiPalmTree } from "react-icons/gi";
import { CardComponent } from "./cardStyles";

type Props = {
  itinerary: Itineraries;
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
            itinerary?.img ? itinerary?.img : "/assets/images/card_default.jpeg"
          }
          alt={itinerary?.name}
          fill
        />
      </div>

      <div className="card__body">
        <div className="title">
          <h4>{itinerary?.name}</h4>
          {itinerary?.popular && <Badge>Popular</Badge>}
        </div>

        <p>{itinerary?.description}</p>

        <Button
          loading={loading}
          leftIcon={<GiPalmTree />}
          onClick={() => {
            setLoading(true);
            router.push("/roteiros/" + itinerary?.link);
          }}
        >
          Ver destino
        </Button>
      </div>
    </CardComponent>
  );
}
