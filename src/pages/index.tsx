import Head from "next/head";
import React from "react";
import PlaygroundMessages from "@/components/playground/PlaygroundMessages";
import ConfigSidebar from "@/components/playground/ConfigSidebar";
import Header from "@/components/shell/Header";
import SystemMessage from "@/components/playground/SystemMessage";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>OpenAI Playground</title>
        <meta name="description" content="A clone of OpenAI playground." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col">
        <Header />
        <div className="flex flex-row grow max-h-[calc(100vh-60px)] h-[calc(100vh-60px)] max-w-screen w-screen">
          <div className="flex flex-row items-stretch h-full grow">
            <SystemMessage />
            <PlaygroundMessages />
          </div>
          <ConfigSidebar />
        </div>
      </main>
    </React.Fragment>
  );
}
