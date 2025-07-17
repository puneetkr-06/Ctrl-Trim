import AnimatedTestimonials from "./ui/AnimatedTestimonials";
import Customer1 from "../assets/customer1.jpg";
import Customer2 from "../assets/customer2.jpg";
import Customer3 from "../assets/customer3.jpg";
import Customer4 from "../assets/cutomer4.jpg";
import Customer5 from "../assets/customer5.jpg";

function Customer() {
  const testimonials = [
    {
      quote:
        "Amazing experience! The haircut was spot on, and the staff was super friendly. The place is clean and professional. Definitely coming back for my next grooming session!",
      name: "Jeffrey Hales",
      designation: "Skilled Barbers ! Loved the service.",
      src: Customer1,
    },
    {
      quote:
        "Top-notch service! I loved the beard styling and the attention to detail. Booking was easy, and the vibe at the shop was chill and relaxing.",
      name: "Michael Rodriguez",
      designation: "Cool Experience",
      src: Customer2,
    },
    {
      quote:
        "Best barber in town! They really listen to what you want and deliver beyond expectations. Great haircut, smooth shave, and excellent products used.",
      name: "Babu Kumar",
      designation: "Loved It",
      src: Customer3,
    },
    {
      quote:
        "Highly recommended! The facial treatment left my skin glowing. The staff is well-trained and takes their time to ensure perfection. Five stars!",
      name: "Chandu Chillar",
      designation: "Just One Word Fantastic",
      src: Customer4,
    },
    {
      quote:
        "Professional and friendly staff! The haircut and head massage combo was just what I needed. Affordable pricing and great atmosphere.",
      name: "Ghanshuk Ghayal",
      designation: "Hygienic Shops",
      src: Customer5,
    },
  ];
  return(
  <div className="w-full flex flex-col justify-center items-center p-8"> 
    <h1 className="text-white text-4xl font-bold text-staat text-center">Our Happy Customers</h1>
  <AnimatedTestimonials testimonials={testimonials} />;
  </div>
  )
}

export default Customer;