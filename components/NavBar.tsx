import SearchBar from "./SearchBar"
function NavBar(){
    return(
        <>
        <div className="flex justify-between items-center h-14 pl-10 pr-10 pt-5 pb-5 border-b border-[#06102454] text-white grow">
        <div>
          <h1 className="text-white">LOGO</h1>
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="flex items-center">
          <div className="mr-10">
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