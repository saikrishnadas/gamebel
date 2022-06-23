import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) => url !== router.asPath && setLoading(true);
    const handleComplete = () =>  setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  return (
    <>
      {loading && (
        <div className="h-[100vh] w-[100vw] flex justify-center items-center fixed top-0 left-0 bg-[#061024df] z-10">
          <div className="absolute left-[50%] top-[50%] h-[100px] w-[100px] mt-0 mr-auto mb-auto ml-auto border-2 bg-[#061024] animate-spin" />
        </div>
      )}
    </>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Loading />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
