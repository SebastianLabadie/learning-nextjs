import Head from 'next/head'
import React from 'react'
import Container from '../components/Container'
import fetch from "isomorphic-unfetch";
import Users from '../components/Users';

function Index({users}) {
    return (
        <Container>
             <Head >
                <title>Next - Home Page</title>
                </Head>
        <Users users={users}/>
        </Container>
       
    )
}


Index.getInitialProps = async (ctx) => {
    const res = await fetch("https://reqres.in/api/users");
    const resJSON = await res.json();
    return {
      users: resJSON.data,
    };
  };


export default Index