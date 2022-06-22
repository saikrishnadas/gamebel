import { useRouter } from 'next/router'
import React from "react";
import MenuBar from '../../components/MenuBar'
import NavBar from '../../components/NavBar'

// const GameIFrame = ({iframe}:any) => {
//     function Iframe() {
//         return {
//           __html: iframe
//         }
//       }
//         return (
//           <div>
//             <div dangerouslySetInnerHTML={ Iframe() } />
//           </div>
//         );
// } 

function Game(){
    const router = useRouter()
    const { name,iframe }:any = router.query
    return( 
        <div className="h-screen bg-[#061024df]">
        {/* <Head>
          <title>Gamebel</title>
          <link rel="icon" href="/favicon.ico" />
        </Head> */}
        <div className="flex">
        <div className="flex h-14 flex-col grow">
        <NavBar />
        <MenuBar />
        <div className="ml-20">
            <div className="bg-[#06102400] h-[500px] w-[1000px] mt-10 ml-20">
            <iframe src={iframe} height="500" width="1000"/>,
            </div>
        </div>
        </div>
        {/* Gallery */}
        </div>
        </div>
    );
}

export default Game