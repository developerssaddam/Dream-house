import { Link } from "react-router-dom";
import img from "../../assets/img/aboutImg.webp";
import abImg5 from "../../assets/img/5.png";
import abImg6 from "../../assets/img/6.png";
import abImg7 from "../../assets/img/7.png";
import team1 from "../../assets/img/team1.avif";
import team2 from "../../assets/img/team2.jpg";
import team3 from "../../assets/img/team3.avif";
import team4 from "../../assets/img/team4.avif";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <div className="relative container mx-auto">
      <Helmet>
        <title>Dream Houses | About us</title>
      </Helmet>
      <div className="absolute text-white top-16 left-16 text-center">
        <h2 className="text-lg font-bold">ABOUT OUR COMPANY</h2>
        <Link to="/" className="text-lg font-bold underline">
          Go Home
        </Link>
      </div>
      <img className="w-full object-cover max-h-60" src={img} alt="" />

      <div className="about_content p-5 mb-8">
        <h2 className="font-bold font_lato my-10 text-xl lg:text-2xl text-center">
          ABOUT <span className="text-red-400">DREAM HOUSES !</span>
        </h2>

        <p className="mb-5">
          In the bustling world of real estate, finding a place to call home
          isn`t just about bricks and mortar; it`s about finding your sanctuary,
          your retreat from the world, your haven. At Dream Houses Real Estate,
          we understand the significance of this journey, and we`re here to
          guide you every step of the way.
        </p>

        <p className="mb-5">
          But our commitment to you goes beyond simply finding a property; it`s
          about understanding your unique needs, desires, and aspirations. We
          take the time to listen, to truly understand what you`re looking for
          in a home, and to tailor our services to meet your specific
          requirements. Whether you`re a first-time buyer navigating the
          complexities of the market or a seasoned homeowner looking to make a
          change, we`re here to provide expert guidance and support every step
          of the way.
        </p>

        <p className="mb-5">
          At Dream Houses Real Estate, we believe that home is where the heart
          is, and we`re dedicated to helping you find a place that captures the
          essence of who you are. From sleek and modern urban dwellings to
          charming and character-filled family homes, we offer a diverse range
          of properties to suit every lifestyle and budget.
        </p>

        <p className="mb-5">
          But finding the perfect home is just the beginning of the journey.
          We`re here to help you navigate the intricacies of the buying process,
          from negotiating the best possible price to handling all the paperwork
          and logistics. Our goal is to make the experience as smooth and
          stress-free as possible, so you can focus on what matters most –
          creating a lifetime of memories in your new home.
        </p>

        <p className="">
          Whether you`re buying, selling, or investing in residential real
          estate, trust Dream Houses Real Estate to deliver results that exceed
          your expectations. With our passion, expertise, and personalized
          approach, we`re here to help you find your perfect residential haven.
          Welcome home.
        </p>
      </div>

      <div className="p-3">
        <div className="mb-10">
          <h2 className="font-bold font_lato mb-2 text-xl lg:text-2xl text-center">
            WHY <span className="text-red-400">CHOOSE US</span>
          </h2>
          <p className="text-center text-gray-500">
            We provide full service at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          <div className="space-y-3 text-center border shadow-lg p-5">
            <div className="flex justify-center">
              <img src={abImg5} className="w-20 h-20" alt="" />
            </div>
            <h2 className="text-xl font-bold">Wide Renge Of Properties</h2>
            <p className="text-gray-500">
              Embark on Your Property Journey with [Your Name] Real Estate.
              Explore a Diverse Array of Homes, from Urban Condos to Suburban
              Retreats, and Find Your Perfect Match Today!
            </p>
          </div>

          <div className="space-y-3 text-center border shadow-lg p-5">
            <div className="flex justify-center">
              <img src={abImg6} className="w-20 h-20" alt="" />
            </div>
            <h2 className="text-xl font-bold">Trusted by thousands</h2>
            <p className="text-gray-500">
              Trusted by Thousands: [Your Name] Real Estate, Where Integrity
              Meets Excellence. Join the Many Satisfied Clients Who Have Found
              Their Dream Homes with Us!
            </p>
          </div>

          <div className="space-y-3 text-center border shadow-lg p-5">
            <div className="flex justify-center">
              <img src={abImg7} className="w-20 h-20" alt="" />
            </div>
            <h2 className="text-xl font-bold">Financing made easy</h2>
            <p className="text-gray-500">
              Financing Made Easy: Trust [Your Name] Real Estate for Seamless
              Transactions. Let Us Simplify Your Journey to Homeownership with
              Expert Guidance and Support.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-bold font_lato mb-8 text-xl lg:text-2xl text-center">
          OUR <span className="text-red-400">TEAM</span>
        </h2>
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="border shadow-lg relative">
            <div className="social absolute top-2 left-2 z-50">
              <ul className="*:bg-[#687389] *:p-1 *:mb-2 *:text-white">
                <li>
                  <Link>
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaLinkedinIn />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex justify-center  overflow-hidden">
              <img
                src={team1}
                alt=""
                className="w-full h-[400px] object-cover hover:scale-105 ease-in duration-150"
              />
            </div>
            <div className="my-3 text-center">
              <h2 className="text-xl font-bold font_lato">Carls Jhons</h2>
              <p className="text-gray-500">Financial Advisor</p>
            </div>
          </div>

          <div className="border shadow-lg relative">
            <div className="social absolute top-2 left-2 z-50">
              <ul className="*:bg-[#687389] *:p-1 *:mb-2 *:text-white">
                <li>
                  <Link>
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaLinkedinIn />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex justify-center overflow-hidden">
              <img
                src={team2}
                alt=""
                className="w-full h-[400px] object-cover hover:scale-105 ease-in duration-150"
              />
            </div>
            <div className="my-3 text-center">
              <h2 className="text-xl font-bold font_lato">Arling Tracy</h2>
              <p className="text-gray-500">Acountant</p>
            </div>
          </div>

          <div className="border shadow-lg relative">
            <div className="social absolute top-2 left-2 z-50">
              <ul className="*:bg-[#687389] *:p-1 *:mb-2 *:text-white">
                <li>
                  <Link>
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaLinkedinIn />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex justify-center overflow-hidden">
              <img
                src={team3}
                alt=""
                className="w-full h-[400px] object-cover hover:scale-105 ease-in duration-150"
              />
            </div>
            <div className="my-3 text-center">
              <h2 className="text-xl font-bold font_lato">Mark Web</h2>
              <p className="text-gray-500">Founder & CEO</p>
            </div>
          </div>

          <div className="border shadow-lg relative">
            <div className="social absolute top-2 left-2 z-50">
              <ul className="*:bg-[#687389] *:p-1 *:mb-2 *:text-white">
                <li>
                  <Link>
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaLinkedinIn />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex justify-center overflow-hidden">
              <img
                src={team4}
                alt=""
                className="w-full h-[400px] object-cover hover:scale-105 ease-in duration-150"
              />
            </div>
            <div className="my-3 text-center">
              <h2 className="text-xl font-bold font_lato">Katy Grace</h2>
              <p className="text-gray-500">Team Leader</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
