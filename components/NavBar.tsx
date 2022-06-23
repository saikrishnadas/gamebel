import Link from "next/link"
import SearchBar from "./SearchBar"
function NavBar(){
    return(
        <>
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
          <div className="mr-5 lg:mr-10">
            Sign In
          </div>
          <span className="bg-[#007AFD] p-2 rounded-md">
            Register
          </span>
        </div>
        </div>
        </>
      
    )
}

export default NavBar