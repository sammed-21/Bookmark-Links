import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import apolloClient from "../lib/apollo";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>

    <ApolloProvider client={apolloClient}  >

<Layout>
      <Component {...pageProps} />
    </Layout>
    </ApolloProvider>
    </UserProvider>
)}
