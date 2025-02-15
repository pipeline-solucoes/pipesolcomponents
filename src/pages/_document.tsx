import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components';
import { cache } from '@emotion/css';
import { themePS } from '../theme';
import { AppType } from "next/app";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={themePS.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const styledComponentSheet = new StyledComponentSheets();
  const originalRenderPage = ctx.renderPage;

  const { extractCritical } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: AppType) => (props) =>
        styledComponentSheet.collectStyles(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const styles = extractCritical(initialProps.html);

  return {
    ...initialProps,
    styles: (
      <React.Fragment>
        {initialProps.styles}
        {styledComponentSheet.getStyleElement()}
        <style
          data-emotion={`${styles.ids.join(' ')}`}
          dangerouslySetInnerHTML={{ __html: styles.css }}
        />
      </React.Fragment>
    ),
  };
};
