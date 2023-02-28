import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { Burger } from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";

import { Menu } from "./menu/menu";
import { HeaderComponent } from "./headerStyles";

type BurgerButtonProps = {
  current: HTMLButtonElement | null;
};

type MenuNavProps = {
  current: HTMLElement | null;
};

export function Header() {
  const [opened, setOpened] = useState(false);
  const [burgerRef, setBurgerRef] =
    useState<BurgerButtonProps["current"]>(null);
  const [menuRef, setMenuRef] = useState<MenuNavProps["current"]>(null);

  useClickOutside(() => setOpened(false), null, [menuRef, burgerRef]);

  const router = useRouter();

  return (
    <HeaderComponent>
      <div className="container">
        <Image
          src="/assets/logo/trivel-white.svg"
          width={170}
          height={70}
          alt=""
          onClick={() => router.push("/")}
        />

        <Menu opened={opened} setOpened={setOpened} setMenuRef={setMenuRef} />

        <Burger
          ref={(node) => setBurgerRef(node)}
          color="white"
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          aria-label={opened ? "Fechar menu" : "Abrir menu"}
        />
      </div>
    </HeaderComponent>
  );
}
