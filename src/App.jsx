import React from "react";
import ScrollVideo from "./components/ScrollVideo.jsx";
import Navbar from "./components/Navbar.jsx"
import Carousel from "./components/Services.jsx"
import {ExpandableCardDemo,CloseIcon} from "./components/Blogs.jsx";
import Customer from "./components/Customer.jsx"
import Cities from "./components/Cities.jsx"
import Profile from "./components/Profile.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <div className="bg-neutral-900 overflow-x-hidden">
      <Navbar/>
      <ScrollVideo />
      <Carousel/>
      <ExpandableCardDemo/>
      <Customer/>
      <Cities/>
      <Profile/>
      <Footer/>
    </div>
  );
}

export default App;
