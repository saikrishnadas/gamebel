import GameCollections from "../components/GameCollections";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

function index() {
    return (
        <div className="h-screen bg-[#061024df]">
        {/* <Head>
          <title>Gamebel</title>
          <link rel="icon" href="/favicon.ico" />
        </Head> */}
        <div className="flex">
        {/* <SideBar /> */}
        {/* Nav Bar */}
        <div className="flex h-14 flex-col grow">
        <NavBar />
        <div className="ml-20">
            <div className="bg-[#EE5513] h-[500px] w-[1000px] mt-10 ml-20">
                Hello
            </div>
        </div>
        </div>
        {/* Gallery */}
        </div>
        </div>
    );
  }
  
  export default index;
  