import Head from "next/head";
import React from "react";
import Container from "../components/Container";

function About() {
  return (
    <>
      <Container>
        <Head>
          <title>Next - About Page</title>
        </Head>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit officiis at explicabo laborum possimus. Explicabo recusandae provident accusantium nobis hic?</p>
      </Container>
    </>
  );
}

export default About;
