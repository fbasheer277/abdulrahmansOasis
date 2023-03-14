import Head from "next/head";

import Who from "./../components/home/Who/Who";
import Donate from "./../components/home/Donate/Donate";
import Volunteer from "./../components/home/Volunteer/Volunteer";
import Publication from "./../components/home/Publication/Publication";
import Calender from "./../components/home/Calender/Calender";

import LangSwitch from "./../components/LangSwitch/LangSwitch";
import Header from "./../components/Header/Header";

export default function Home({ locale }) {
  return (
    <>
      {/* <LangSwitch /> */}
      <Header locale={locale} navLinksColor={"white"} />
      <Who locale={locale} />
      <Volunteer locale={locale} />
      <Publication locale={locale} />
      <Donate locale={locale} />
      <Calender locale={locale} />
    </>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      locale: locale,
    },
  };
}
