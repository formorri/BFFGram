import Document, { Html, Head, Main, NextScript } from 'next/document'
import Background from '../components/Background';
import Navbar from '../components/Navbar';



class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <Background />

          <Navbar />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
