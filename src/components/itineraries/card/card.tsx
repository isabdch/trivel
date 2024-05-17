// Core
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

// Libraries
import { motion } from "framer-motion";
import { GiPalmTree } from "react-icons/gi";
import { Badge, Button } from "@mantine/core";

// Assets
import styles from "./card.module.scss";

// Types
import { ItinerariesT } from "@/types/itineraries";

type PropsT = {
  itinerary: ItinerariesT;
};

export function Card({ itinerary }: PropsT) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

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
    <motion.div className={styles.card} {...animation}>
      <div className={styles.img}>
        <Image
          src={
            itinerary?.img ? itinerary?.img : "/assets/images/card_default.jpeg"
          }
          alt={itinerary?.name}
          fill
        />
      </div>

      <div className={styles.card__body}>
        <h4 className={styles.title}>
          {itinerary?.name}
          {itinerary?.popular && <Badge>Popular</Badge>}
        </h4>

        <p>{itinerary?.description}</p>

        <Button
          variant="outline"
          loading={loading}
          leftSection={<GiPalmTree />}
          onClick={() => {
            setLoading(true);
            router.push("/roteiros/" + itinerary?.link);
          }}
        >
          Ver destino
        </Button>
      </div>
    </motion.div>
  );
}
