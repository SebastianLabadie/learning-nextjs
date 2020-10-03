import React from "react";
import Navigation from "./navigation";
import Head from "next/head";

function Container(props) {
  return (
    <div>
      <Head>
        <title>Next.js</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/flatly/bootstrap.min.css"
        />
      </Head>
      <Navigation />
      <div>{props.children}</div>
    </div>
  );
}

export default Container;
