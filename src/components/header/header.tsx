// Core
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

// Libraries
import { Burger } from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";

// Components
import { Menu } from "./menu/menu";

// Assets
import styles from "./header.module.scss";

type BurgerButtonPropsT = {
  current: HTMLButtonElement | null;
};

type MenuNavPropsT = {
  current: HTMLElement | null;
};

export const Header = () => {
  const router = useRouter();

  const [opened, setOpened] = useState(false);
  const [menuRef, setMenuRef] = useState<MenuNavPropsT["current"]>(null);
  const [burgerRef, setBurgerRef] =
    useState<BurgerButtonPropsT["current"]>(null);

  useClickOutside(() => setOpened(false), null, [menuRef, burgerRef]);

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <Image
            src="/assets/logo/trivel-white.svg"
            width={130}
            height={70}
            alt="Trível"
            onClick={() => router.push("/")}
          />
          <Image
            src="/assets/images/little_palms.svg"
            alt=""
            width={70}
            height={70}
          />
        </div>

        <Menu opened={opened} setOpened={setOpened} setMenuRef={setMenuRef} />

        <Burger
          ref={(node) => setBurgerRef(node)}
          color="white"
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          aria-label={opened ? "Fechar menu" : "Abrir menu"}
        />
      </div>
    </header>
  );
};
