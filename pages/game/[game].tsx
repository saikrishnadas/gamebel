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
        <div className="">
            <div className="hidden bg-[#06102400] mt-10 lg:flex justify-center md:hidden">
              {gameIframe &&  <iframe src={gameIframe[0].iframe} height="500" width="1000" className='hidden md:hidden lg:block'/>}
            </div>
            <div className="lg:hidden bg-[#06102400] mt-10 flex justify-center md:hidden">
              {gameIframe &&  <iframe src={gameIframe[0].iframe} height="500" width="300" className='block md:hidden lg:hidden'/>}
            </div>
            <div className="hidden md:flex lg:hidden bg-[#06102400] mt-5 justify-center">
              {gameIframe &&  <iframe src={gameIframe[0].iframe} height="400" width="600" className='md:h-fit hidden md:flex lg:hidden'/>}
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