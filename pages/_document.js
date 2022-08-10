import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class RootDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags }; // return styles collected
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {this.props.styleTags}
        </Head>
        <body>
          <Html />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
