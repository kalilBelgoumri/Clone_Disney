import React from "react";
import Head from "next/head";

function Layout() {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
