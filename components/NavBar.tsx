import Link from "next/link";
import ConnectWalletModal from "./ConnectWalletModal";
import SearchBar from "./SearchBar";
import { Fragment, useState } from "react";

function NavBar() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <ConnectWalletModal
        isOpen={isOpen}
        closeModal={closeModal}
        openModal={openModal}
      />
      <div className="flex justify-between items-center h-16 pr-5 pl-5 lg:h-14 lg:pl-10 lg:pr-10 pt-5 pb-5 border-b border-[#06102454] text-white grow">
        <div>
          <Link href="/">
            <h1 className="text-white cursor-pointer">LOGO</h1>
          </Link>
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="flex items-center">
          <div className="inset-0 flex items-center justify-center">
            <button
              type="button"
              onClick={openModal}
              className="mr-5 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
            >
               <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
              <span className="hidden lg:block">Connect Wallet</span>
            </button>
          </div>
          <div className="mr-5 lg:mr-10">Sign In</div>
          <span className="bg-[#007AFD] p-2 rounded-md">Register</span>
        </div>
      </div>
    </>
  );
}

export default NavBar;
