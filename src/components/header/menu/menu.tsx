// Core
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// Libraries
import { Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { GiPalmTree } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { IoInformationCircle } from "react-icons/io5";
import { BsFillQuestionCircleFill } from "react-icons/bs";

// Assets
import styles from "./menu.module.scss";

type MenuPropsT = {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
  setMenuRef: Dispatch<SetStateAction<HTMLElement | null>>;
};

export const Menu = (props: MenuPropsT) => {
  const router = useRouter();

  const matches = useMediaQuery("(max-width: 768px)");

  const links = [
    {
      url: "/",
      label: "Home",
      icon: <AiFillHome size={20} />,
      class: router.asPath == "/" ? styles.active : "",
    },
    {
      url: "/como-funciona",
      label: "Como funciona",
      icon: <BsFillQuestionCircleFill size={20} />,
      class: router.asPath.includes("como-funciona") ? styles.active : "",
    },
    {
      url: "/roteiros",
      label: "Roteiros",
      icon: <GiPalmTree size={20} />,
      class: router.asPath.includes("roteiros") ? styles.active : "",
    },
    {
      url: "/sobre-nos",
      label: "Sobre nós",
      icon: <IoInformationCircle size={25} />,
      class: router.asPath.includes("sobre-nos") ? styles.active : "",
    },
  ];

  return (
    <nav
      ref={(node: SetStateAction<HTMLElement | null>) => props.setMenuRef(node)}
      className={`${styles.menu} ${props.opened ? styles.active : ""}`}
    >
      {links.map((link) => {
        return (
          <Link
            key={link.url}
            href={link.url}
            className={link.class}
            onClick={() => props.setOpened(false)}
          >
            {link.label} {matches && link.icon}
          </Link>
        );
      })}

      <Button
        variant={matches ? "filled" : "white"}
        size={matches ? "compact-lg" : "compact-md"}
        onClick={() => {
          router.push("/contato");
          props.setOpened(false);
        }}
      >
        Contato
      </Button>
    </nav>
  );
}
