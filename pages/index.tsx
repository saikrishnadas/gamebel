import {useState} from "react";
import type { NextPage } from "next";
import Head from "next/head";
import GameCollections from "../components/GameCollections";
import MenuBar from "../components/MenuBar";
import NavBar from "../components/NavBar";
import { sanityClient } from "../sanity";
import { useEffect } from "react";

const Home: NextPage = ({games}:any) => {
  const [titles,setTitles] = useState([])
  useEffect(() => {
    const uniqueValues = new Set();
    games.forEach((game:any) => uniqueValues.add(game.category.title));
    const uniqueCategories:any = Array.from(uniqueValues);
    setTitles(uniqueCategories)
  },[])
  return (
    <div className="h-screen bg-[#061024df]">
      <Head>
        <title>Gamebel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <MenuBar />
      <div className="ml-20 mt-10 h-[35rem] overflow-scroll scrollbar-hide">
      <GameCollections title={titles} games={games}/>
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

