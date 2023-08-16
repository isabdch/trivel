import Image from "next/image";
import { useRouter } from "next/router";
import { FooterComponent } from "./footerStyles";

export const Footer = () => {
  const router = useRouter();

  return (
    <FooterComponent>
      <div className="container">
        <div className="footer-section">
          <Image
            src="/assets/logo/trivel-black.svg"
            width={130}
            height={70}
            alt="Trível"
            onClick={() => router.push("/")}
          />
          <p>
            Explore Alagoas de maneira exclusiva com os passeios únicos da
            Trível. Descubra paisagens deslumbrantes e cenários únicos enquanto
            criamos memórias inesquecíveis juntos.
          </p>
        </div>
        <div className="footer-section">
          <h3>Mapa do site</h3>
        </div>
      </div>
    </FooterComponent>
  );
};
