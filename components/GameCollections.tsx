import Link from "next/link";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";

function GameCollections({ title }: any) {
  return (
    <>
      <div className="flex justify-between items-center mt-10 mr-20">
        <p className="text-white font-semibold mb-5 ml-6">{title}</p>{" "}
        <span className="flex">
          <ChevronLeftIcon className="h-5 w-5 text-white cursor-pointer"/>
          <ChevronRightIcon className="h-5 w-5 text-white cursor-pointer"/>
        </span>
      </div>
      <div className="flex mt-5 w-[80rem] overflow-scroll scrollbar-hide">
        <Link href="/game">
          <div className="flex flex-col ml-5">
            <div className="bg-[#EE5513] rounded-lg h-[200px] w-[150px]">
              Hello
            </div>
          </div>
        </Link>
        <div className="flex flex-col ml-10">
          <div className="bg-[#EE5513] rounded-lg h-[200px] w-[150px]">Hello</div>
        </div>
        <div className="flex flex-col ml-10">
          <div className="bg-[#EE5513] rounded-lg h-[200px] w-[150px]">Hello</div>
        </div>
        <div className="flex flex-col ml-10">
          <div className="bg-[#EE5513] rounded-lg h-[200px] w-[150px]">Hello</div>
        </div>
        <div className="flex flex-col ml-10">
          <div className="bg-[#EE5513] rounded-lg h-[200px] w-[150px]">Hello</div>
        </div>
        <div className="flex flex-col ml-10">
          <div className="bg-[#EE5513] rounded-lg h-[200px] w-[150px]">Hello</div>
        </div>
        <div className="flex flex-col ml-10">
          <div className="bg-[#EE5513] rounded-lg h-[200px] w-[150px]">Hello</div>
        </div>
        <div className="flex flex-col ml-10">
          <div className="bg-[#EE5513] rounded-lg h-[200px] w-[150px]">Hello</div>
        </div>
        <div className="flex flex-col ml-10">
          <div className="bg-[#EE5513] rounded-lg h-[200px] w-[150px]">Hello</div>
        </div>
        <div className="flex flex-col ml-10">
          <div className="bg-[#EE5513] rounded-lg h-[200px] w-[150px]">Hello</div>
        </div>
      </div>
    </>
  );
}

export default GameCollections;
