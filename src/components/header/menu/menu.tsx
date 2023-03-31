import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { BsFillQuestionCircleFill } from "react-icons/bs";
import { IoInformationCircle } from "react-icons/io5";
import { TbSearch } from "react-icons/tb";
import { GiPalmTree } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";

import { MenuComponent } from "./menuStyles";

type MenuPropsType = {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
  setMenuRef: Dispatch<SetStateAction<HTMLElement | null>>;
};

export function Menu(props: MenuPropsType) {
  const router = useRouter();

  const matches = useMediaQuery("(max-width: 768px)");

  return (
    <MenuComponent
      ref={(node) => props.setMenuRef(node)}
      className={props.opened ? "active" : ""}
    >
      <Link
        onClick={() => props.setOpened(false)}
        className={router.asPath == "/" ? "active" : ""}
        href="/"
      >
        Home {matches && <AiFillHome size={20} />}
      </Link>
      <Link
        onClick={() => props.setOpened(false)}
        className={router.asPath.includes("como-funciona") ? "active" : ""}
        href="/como-funciona"
      >
        Como funciona {matches && <BsFillQuestionCircleFill size={20} />}
      </Link>
      <Link
        onClick={() => props.setOpened(false)}
        className={router.asPath.includes("roteiros") ? "active" : ""}
        href="/roteiros"
      >
        Roteiros {matches && <GiPalmTree size={20} />}
      </Link>
      <Link
        onClick={() => props.setOpened(false)}
        className={router.asPath.includes("sobre-nos") ? "active" : ""}
        href="/sobre-nos"
      >
        Sobre nós {matches && <IoInformationCircle size={25} />}
      </Link>
      {/* <Link className="search" href="">
        <TbSearch />
      </Link> */}

      <Button
        variant={matches ? "filled" : "white"}
        size={matches ? "lg" : "md"}
        compact
        onClick={() => {
          router.push("/contato");
          props.setOpened(false);
        }}
      >
        Contato
      </Button>
    </MenuComponent>
  );
}
