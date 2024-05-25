import "./About.css";
import AboutPic1 from '../../Assets/images/about/img1.jpg';
import AboutPic2 from "../../Assets/images/about/img2.jpg";

const About = () => {
  return (
    <>
      <section className="container my-3">
        <div className="row justify-center">
          <div className="col-md-6 col-sm-12 align-self-start pd">
            <h2 className="lemon-primary-lemon">About Little Lemon</h2>

            <p>
            Welcome to Little Lemon, a charming eatery in the heart of Seattle where culinary artistry meets sustainable practices. At Little Lemon, we pride ourselves on blending global flavors with the finest local ingredients, crafting dishes that are as nourishing as they are delicious. Our commitment to sustainability and community is at the core of everything we do, from our carefully sourced produce to our eco-friendly practices. Join us in a warm and inviting atmosphere, where each meal is a celebration of wholesome food and heartfelt hospitality. Savor the simple joys and vibrant tastes that make Little Lemon a unique culinary destination.
            </p>
         </div>
          <div className="col-md-6 col-sm-12 text-center align-self-center">
            <div className="my-3">
              <img className="about-pic img-fluid" src={AboutPic1} alt="About us 1" />
            </div>
            <div>
              <img className="about-pic img-fluid" src={AboutPic2} alt="About us 2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
