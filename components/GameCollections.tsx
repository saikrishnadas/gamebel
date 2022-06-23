import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import { urlFor } from "../sanity";

interface GameCollectionsProps {
  title: string[];
  games: any;
}

function GameCollections({ title, games }: GameCollectionsProps) {

  // console.log(games);
  // console.log(urlFor(games[0].thumbnail.asset).url()!)
  return (
    <>
    {title.map((t:string,index:number) => (
      <div key={index}>
      <div className="flex justify-between items-center mt-2 mr-2 lg:mt-10 lg:mr-20">
        <p className="text-white font-semibold mb-0 ml-6">{t}</p>
        <span className="flex">
          <ChevronLeftIcon className="h-5 w-5 text-white cursor-pointer" />
          <ChevronRightIcon className="h-5 w-5 text-white cursor-pointer" />
        </span>
      </div>
      {/* <div className="flex mt-5 w-[24rem] md:w-[48rem] lg:w-[80rem] overflow-scroll overflow-y-clip scrollbar-hide" ref={scrollRef}> */}
      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
        {games
          .filter((game: any) => game.category.title === t)
          .map((filteredGame: any,index:number) => (
            <div key={index}>
            <Link
              href={{
                pathname: `/game/${filteredGame.slug.current}`,
              }}
            >
              <div className="flex flex-col ml-5 mb-5">
                <div className="bg-[#EE5513] rounded-lg h-[200px] w-[150px] cursor-pointer transform transition duration-500 hover:scale-110">
                  <Image
                    src={urlFor(filteredGame.thumbnail.asset).url()!}
                    alt=""
                    width={150}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </Link>
            </div>
          ))}
      </div>
      </div>
    )) }
      
    </>
  );
}

export default GameCollections;
