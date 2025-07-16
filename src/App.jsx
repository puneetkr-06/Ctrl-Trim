import React from "react";
import ScrollVideo from "./components/ScrollVideo.jsx";
import Navbar from "./components/Navbar.jsx"
import {ExpandableCardDemo,CloseIcon} from "./components/Blogs.jsx";

function App() {
  return (
    <div className="bg-neutral-900">
      <Navbar/>
      <ScrollVideo />
      <ExpandableCardDemo/>
      <div className="h-[300vh]">
        <div className="pt-[120vh] text-center text-white text-4xl font-bold">
          Welcome to Our Barber Studio
        </div>
      </div>
    </div>
  );
}

export default App;
