// Core
import type { AppProps } from "next/app";

// Libraries
import "dayjs/locale/pt-br";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/carousel/styles.css";
import { LayoutGroup } from "framer-motion";
import { DatesProvider } from "@mantine/dates";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

// Components
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

// Assets
import "../styles/global.scss";
import { theme, resolver } from "@/styles/theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MantineProvider
      theme={theme}
      classNamesPrefix="trivel"
      cssVariablesResolver={resolver}
    >
      <DatesProvider settings={{ locale: "pt-br" }}>
        <Notifications position="top-right" zIndex={999} limit={5} />
        <LayoutGroup>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </LayoutGroup>
      </DatesProvider>
    </MantineProvider>
  );
};

export default App;
