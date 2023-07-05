import React, { useEffect } from "react";
import Hero from "./components/Hero";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
    </>
  );
}

export default Home;
