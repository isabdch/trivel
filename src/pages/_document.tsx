import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
} from "next/document";
import { ServerStyles, createStylesServer } from "@mantine/next";
import { cache } from "./_app";

const stylesServer = createStylesServer(cache);

interface MyDocumentProps extends DocumentProps {
  styles: JSX.Element[];
}

const MyDocument = (props: MyDocumentProps): JSX.Element => {
  return (
    <Document {...props}>
      <Html>
        <Head>{/* Add your app specific head tags here */}</Head>
        <body>
          <Main />
          <NextScript />
          {props.styles}
        </body>
      </Html>
    </Document>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      initialProps.styles,
      <ServerStyles
        html={initialProps.html}
        server={stylesServer}
        key="styles"
      />,
    ],
  };
};

export default MyDocument;
