import { Helmet } from "react-helmet-async";

import "./Home.css";
import Slider from "../../components/Slider/Slider";
import LocationMap from "../../components/LocationMap/LocationMap";
import PropertyCard from "../../components/PropertyCard/PropertyCard";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Dream Houses | Home</title>
      </Helmet>
      <Slider />
      <div className="my-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
      <div className="my-5">
        <LocationMap />
      </div>
    </>
  );
};

export default Home;
