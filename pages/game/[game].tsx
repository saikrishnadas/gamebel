import { useRouter } from 'next/router'
import React from "react";
import MenuBar from '../../components/MenuBar'
import NavBar from '../../components/NavBar'
import { sanityClient, urlFor } from "../../sanity";

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

interface gameIframeType {
  iframe:string;
  name:string;
  slug:any;
}

interface GameProps{
  gameIframe:gameIframeType[]
}

interface paramsType {
  game:string
}

interface paramsProps {
  params:paramsType
}

function Game({gameIframe}:GameProps){
    const router = useRouter()
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
              {gameIframe &&  <iframe src={gameIframe[0].iframe} height="500" width="1000"/>}
           
            </div>
        </div>
        </div>
        {/* Gallery */}
        </div>
        </div>
    );
}

export default Game


export const getServerSideProps = async ({params}:paramsProps) => {
    const query = `*[_type=="game"]{
    name,
    slug,
    iframe
    }`;
  
    const games = await sanityClient.fetch(query);

    const gameIframe =  games.filter((game:any) => {
      return game.slug.current === params.game
    })
  
    return {
      props: {
        gameIframe,
      },
    };
  };