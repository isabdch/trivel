// Core
import {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
} from "next/document";

// Libraries
import { ColorSchemeScript } from "@mantine/core";

interface MyDocumentProps extends DocumentProps {
  styles: JSX.Element[];
}

export default function Document(props: MyDocumentProps): JSX.Element {
  return (
    <Document {...props}>
      <Html lang="en">
        <Head>
          <ColorSchemeScript defaultColorScheme="auto" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </Document>
  );
}
