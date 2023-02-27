import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Burger, Button } from "@mantine/core";
import { TbSearch } from "react-icons/tb";

import { HeaderComponent } from "./headerStyles";

export function Header() {
  const [opened, setOpened] = useState(false);

  const router = useRouter();

  return (
    <HeaderComponent>
      <div className="container">
        <Image
          src="/assets/logo/trivel-white.svg"
          width={150}
          height={60}
          alt=""
          onClick={() => router.push("/")}
        />

        <nav>
          <Link className={router.asPath == "/" ? "active" : ""} href="/">
            Home
          </Link>
          <Link
            className={router.asPath == "/como-funciona" ? "active" : ""}
            href="/como-funciona"
          >
            Como funciona
          </Link>
          <Link
            className={router.asPath == "/roteiros" ? "active" : ""}
            href="/roteiros"
          >
            Roteiros
          </Link>
          <Link
            className={router.asPath == "/sobre-nos" ? "active" : ""}
            href="/sobre-nos"
          >
            Sobre nós
          </Link>
          <Link className="search" href="">
            <TbSearch />
          </Link>

          <Button
            variant="white"
            size="md"
            compact
            onClick={() => router.push("/contato")}
          >
            Contato
          </Button>
        </nav>

        <Burger
          color="white"
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          aria-label={opened ? "Fechar menu" : "Abrir menu"}
        />
      </div>
    </HeaderComponent>
  );
}
