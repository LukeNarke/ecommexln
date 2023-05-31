import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Ribbon from "@/components/Ribbon/Ribbon";
import Head from "next/head";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store, persistor } from "@/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ecommerce Example - LN</title>
        <meta
          name="description"
          content="Ecommerce Example is your destination for affordable and fashionable clothing online. Browse our collection of trendy women's and men's clothing today!"
        />
        <meta
          name="keywords"
          content="Ecommerce Example, clothing, fashion, online shopping, women's clothing, men's clothing"
        />
        <meta name="author" content="Ecommerce Example Clothing Co." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.lukenarke.netlify.app/" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Ribbon />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </PersistGate>
      </Provider>
    </>
  );
}
