import Hero from "../../components/Hero/Hero";
import Special from "../../components/Special/Special";
import brus from "../../Assets/images/specials/bruschetta.jpg";
import greek from "../../Assets/images/specials/greekSalad.jpg";
import dessert from "../../Assets/images/specials/dessert.jpg";
import Testimonials from "../../components/Testimonials/Testimonials";

const data = [
  {
    name: "Greek Salad",
    price: "₪35",
    image: greek,
    description: "Lettuce, peppers, olives and feta cheese, garnished with garlic and croutons.",
  },
  {
    name: "Bruschetta",
    price: "₪50",
    image: brus,
    description: "Grilled bread smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    name: "Lemon Special",
    price: "₪40",
    image: dessert,
    description: "This comes straight from grandma's recipe book.",
  },
];

const Home = () => {
  return (
    <>
      <Hero />
      <Special data={data} />
      <Testimonials />
    </>
  );
};

export default Home;
