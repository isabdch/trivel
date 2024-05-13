// Core
import type { AppProps } from "next/app";

// Libraries
import "@mantine/core/styles.css";
import { LayoutGroup } from "framer-motion";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

// Components
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

// Assets
import { theme, resolver } from "@/styles/theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MantineProvider
      theme={theme}
      classNamesPrefix="trivel"
      cssVariablesResolver={resolver}
    >
      <Notifications position="top-right" zIndex={999} limit={5} />
      <LayoutGroup>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </LayoutGroup>
    </MantineProvider>
  );
};

export default App;
