import React from "react";
import HomeNavBar from "./HomeNavBar.tsx";
import homeBackground from "../../utils/images/homeBackground.jpg";
import Accordion from "./Accordion.tsx";
import Footer from "./Footer.tsx";
import PlantComponent from "../Plants/PlantCompoonet.tsx";
function Home() {
  return (
    <div className="w-full h-[100vh]">
      <HomeNavBar />
      <div
        className="flex justify-center items-center font-bold text-2xl h-screen bg-no-repeat  bg-cover "
        style={{ backgroundImage: `url(${homeBackground})` }}
      >
        <div className="p-16 text-white">
          Welcome to GreenLeaf - Your Ultimate Plant Paradise! At GreenLeaf, we
          believe that every home, office, and space deserves to be enriched
          with the beauty and serenity of nature. Whether you're a seasoned
          plant enthusiast or just starting your green journey, we offer a vast
          selection of premium indoor and outdoor plants, perfect for every
          lifestyle.
        </div>
      </div>
      <Accordion />
      <Footer />
      <PlantComponent />
    </div>
  );
}

export default Home;
