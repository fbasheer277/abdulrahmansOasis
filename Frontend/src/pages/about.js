import Head from "next/head";

import AbdelrahmanOasis from "./../components/about/AbdelrahmanOasis/AbdelrahmanOasis";
import Story from "./../components/about/Story/Story";
import Goals from "./../components/about/Goals/Goals";

export default function AbdulrahmanOasis() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <main id="main">
        <AbdelrahmanOasis />
        <Story />
        <Goals />
      </main>
    </>
  );
}
