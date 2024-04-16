import { Helmet } from "react-helmet-async";

import "./Home.css";
import Slider from "../../components/Slider/Slider";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";
import AgentContainer from "../../components/AgentContainer/AgentContainer";

const Home = () => {
  const data = useLoaderData();
  return (
    <>
      <Helmet>
        <title>Dream Houses | Home</title>
      </Helmet>
      <Slider />
      <SectionTitle
        title={"Properties"}
        subtitle={"We provide full service at every step."}
      />
      <div className="my-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.map((item, index) => (
          <PropertyCard data={item} key={index} />
        ))}
      </div>

      <AgentContainer />
    </>
  );
};

export default Home;
