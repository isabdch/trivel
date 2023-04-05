import type { AppProps } from "next/app";

import { MantineProvider, createEmotionCache } from "@mantine/core";
import { LayoutGroup } from "framer-motion";
import { theme } from "@/styles/theme";

import { Header } from "@/components/header/header";

export const cache = createEmotionCache({
  key: "trivel",
  stylisPlugins: [],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      emotionCache={cache}
      theme={theme}
    >
      <LayoutGroup>
        <Header />
        <Component {...pageProps} />
      </LayoutGroup>
    </MantineProvider>
  );
}
