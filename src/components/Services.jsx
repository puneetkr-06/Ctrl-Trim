
import CarouselUi from "./ui/CarouselUi";
import hair_styling from "../assets/hair_styling.jpg"
import massage from "../assets/massage.png";
import beard_shave from "../assets/beard_shave.jpg";
import facial from "../assets/facial.png";

 function Carousel() {
  const slideData = [
    {
      title: "Facials & Grooming",
      button: "Book Now",
      src: facial,
    },
    {
      title: "Hair Styling",
      button: "Book Now",
      src: hair_styling,
    },
    {
      title: "Beard & Shaving",
      button: "Book Now",
      src: beard_shave,
    },
    {
      title: "Body Massage",
      button: "Book Now",
      src: massage,
    },
  ];
  return (
    <div className="flex flex-col relative overflow-hidden w-full h-full py-8 pb-16 gap-8 overflow-x-hidden">
      <h1 className="text-white text-4xl font-bold text-staat text-center p-4">What We Offer !</h1>
      <CarouselUi slides={slideData} />
    </div> 
  );
}

export default Carousel;
