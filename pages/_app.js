import { useEffect, useState } from "react";
import "../styles/globals.css";
import dynamic from "next/dynamic";

const MyApp = ({ Component, pageProps }) => {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <div className="overflow-hidden">
        <Component {...pageProps} />
      </div>
    );
  }
};

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
