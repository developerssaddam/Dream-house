import { Helmet } from "react-helmet-async";

import "./Home.css";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Dream Houses | Home</title>
      </Helmet>
      <div className="">
        <Slider />
      </div>
    </>
  );
};

export default Home;
