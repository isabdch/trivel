// Core
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// Libraries
import { Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { GoHomeFill } from "react-icons/go";
import { GiPalmTree } from "react-icons/gi";
import { MdOutlineQuestionMark } from "react-icons/md";
import { IoInformationOutline } from "react-icons/io5";

// Assets
import styles from "./menu.module.scss";

type MenuPropsT = {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
  setMenuRef: Dispatch<SetStateAction<HTMLElement | null>>;
};

export const Menu = (props: MenuPropsT) => {
  const router = useRouter();

  const isTablet = useMediaQuery("(max-width: 768px)");

  const links = [
    {
      url: "/",
      label: "Home",
      icon: <GoHomeFill size={20} />,
      class: router.asPath == "/" ? styles['is-active'] : undefined,
    },
    {
      url: "/como-funciona",
      label: "Como funciona",
      icon: <MdOutlineQuestionMark size={20} />,
      class: router.asPath.includes("como-funciona") ? styles['is-active'] : undefined,
    },
    {
      url: "/roteiros",
      label: "Roteiros",
      icon: <GiPalmTree size={20} />,
      class: router.asPath.includes("roteiros") ? styles['is-active'] : undefined,
    },
    {
      url: "/sobre-nos",
      label: "Sobre nós",
      icon: <IoInformationOutline size={20} />,
      class: router.asPath.includes("sobre-nos") ? styles['is-active'] : undefined,
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
            {isTablet && link.icon} {link.label}
          </Link>
        );
      })}

      <Button
        variant={isTablet ? "filled" : "white"}
        size={isTablet ? "md" : "compact-md"}
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
