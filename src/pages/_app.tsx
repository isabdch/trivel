import type { AppProps } from "next/app";
import { MantineProvider, createEmotionCache } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { LayoutGroup } from "framer-motion";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { theme } from "@/styles/theme";

export const cache = createEmotionCache({
  key: "trivel",
  stylisPlugins: [],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      emotionCache={cache}
      theme={theme}
    >
      <Notifications position="top-right" zIndex={999} limit={5} />
      <LayoutGroup>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </LayoutGroup>
    </MantineProvider>
  );
}

export default App;