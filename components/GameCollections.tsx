import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import { urlFor } from "../sanity";

function GameCollections({ title, games }: any) {
  console.log(games);
  console.log(urlFor(games[0].thumbnail.asset).url()!)
  return (
    <>
      <div className="flex justify-between items-center mt-10 mr-20">
        <p className="text-white font-semibold mb-5 ml-6">{title}</p>
        <span className="flex">
          <ChevronLeftIcon className="h-5 w-5 text-white cursor-pointer" />
          <ChevronRightIcon className="h-5 w-5 text-white cursor-pointer" />
        </span>
      </div>
      <div className="flex mt-5 w-[80rem] overflow-scroll scrollbar-hide">
        {games.map((game: any) => (
          <Link href={{
            pathname: `/game/${game.slug.current}`,
            query: { name: game.name, iframe:game.iframe },
          }}>
            <div className="flex flex-col ml-5">
              <div className="bg-[#EE5513] rounded-lg h-[200px] w-[150px]">
                <Image src={urlFor(game.thumbnail.asset).url()!} alt="" width={150} height={200} className="rounded-lg"/>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default GameCollections;
