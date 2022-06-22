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
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const onClickScroll = (scrollOffset: number) => {
    scrollRef!.current!.scrollLeft += scrollOffset;
  };
  // console.log(games);
  // console.log(urlFor(games[0].thumbnail.asset).url()!)
  return (
    <>
    {title.map((t:string) => (
      <div key={t}>
      <div className="flex justify-between items-center mt-10 mr-20">
        <p className="text-white font-semibold mb-0 ml-6">{t}</p>
        <span className="flex">
          <ChevronLeftIcon className="h-5 w-5 text-white cursor-pointer" onClick={()=> onClickScroll(-20)}/>
          <ChevronRightIcon className="h-5 w-5 text-white cursor-pointer" onClick={() => onClickScroll(20)}/>
        </span>
      </div>
      <div className="flex mt-5 w-[80rem] overflow-scroll overflow-y-clip scrollbar-hide" ref={scrollRef}>
        {games
          .filter((game: any) => game.category.title === t)
          .map((filteredGame: any) => (
            <>
            <Link
              key={filteredGame.slug.current}
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
                        <Link
                        key={filteredGame.slug.current}
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
            </>
          ))}
      </div>
      </div>
    )) }
      
    </>
  );
}

export default GameCollections;
