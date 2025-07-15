import React from "react";
import ScrollVideo from "./components/ScrollVideo.jsx";
import Navbar from "./components/Navbar.jsx"
import Marquee from "./components/Marquee.jsx";

function App() {
  return (
    <div className="bg-neutral-900">
      <Navbar/>
      <ScrollVideo />
      <div className="h-[300vh] bg-neutral-900">
        <div className="pt-[120vh] text-center text-white text-4xl font-bold">
          Welcome to Our Barber Studio
        </div>
      </div>
    </div>
  );
}

export default App;
