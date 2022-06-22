import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import GameCollections from "../components/GameCollections";
import MenuBar from "../components/MenuBar";
import NavBar from "../components/NavBar";
import { sanityClient, urlFor } from "../sanity";

const Home: NextPage = ({games}:any) => {
  // console.log(games)
  return (
    <div className="h-screen bg-[#061024df]">
      <Head>
        <title>Gamebel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <SideBar /> */}
      {/* Nav Bar */}
      <NavBar />
      <MenuBar />

      <div className="ml-20 mt-10 h-[35rem] overflow-scroll scrollbar-hide" onClick={() => console.log("Clicked")}>
      <GameCollections title="Casino" games={games}/>
      {/* <GameCollections title="Slots"/>
      <GameCollections title="Live Casino"/>
      <GameCollections title="Game shows"/> */}
      </div>

      </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const query = `*[_type=="game"]{
    name,
    slug,
    thumbnail,
    iframe,
    category -> {
      title,
      description,
      thumbnail
    },
    provider -> {
      provider,
      thumbnail
    },
    }`;

  const games = await sanityClient.fetch(query);

  return {
    props: {
      games,
    },
  };
};

