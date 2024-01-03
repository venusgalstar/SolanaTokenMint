import type { NextPage } from "next";
import Head from "next/head";
import { NftView } from "../views";

const Nft: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Scaffold</title>
        <meta
          name="description"
          content="Solana Scaffold"
        />
      </Head>
      <NftView />
    </div>
  );
};

export default Nft;