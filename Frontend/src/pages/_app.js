import { useRouter } from "next/router";
import { useEffect } from "react";

import "../styles/globals.scss";
import Layout from "./../components/Layout/Layout";

const App = ({ Component, pageProps }) => {
  const { locale } = useRouter();

  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.querySelector("body").setAttribute("dir", dir);
    if (locale === "ar") {
      document.querySelector("body").classList.add("ar");
    } else {
      document.querySelector("body").classList.remove("ar");
    }
  }, [locale]);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};
const getPathSlugs = () => {
  // We fetched locales from our API once at build time
  return ["ar", "en"].map((locale) => ({
    params: {
      locale,
    },
  }));
}

export async function getStaticPaths(...args) {
  const pathsWithLocale = getPathSlugs();
  return {
    paths: pathsWithLocale,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      ...params
    }
  };
}
export default App
