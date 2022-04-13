import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="overflow-hidden font-avenir">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
