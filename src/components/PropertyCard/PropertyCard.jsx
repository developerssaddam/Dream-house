import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { LuTriangleRight } from "react-icons/lu";
import PropTypes from "prop-types";
import "./PropertyCard.css";

const PropertyCard = ({ data }) => {
  const {
    id,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    image_url,
    facilities,
  } = data;

  return (
    <div className="border shadow-lg rounded-lg relative hover:scale-x-105 ease-in duration-200">
      <div className="status absolute right-5 top-5 text-white bg-[#a106d0] px-6 py-2 font-semibold rounded-md font_lato">
        For {status}
      </div>
      <div className="property_card_item min-h-[100%] flex flex-col justify-between">
        <img className="w-full h-64 rounded-t-lg" src={image_url} alt="" />

        <div className="card_content p-4 text-[#747376] space-y-2">
          <h2 className="title text-lg font-bold text-[#2B2A4C]">
            {estate_title}
          </h2>
          <h3 className="text-[#232323] text-lg font-medium font_lato">
            {segment_name}
          </h3>
          <p className="desc font_lato">{description}</p>

          <ul className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 text-sm">
            {facilities.map((item, index) => (
              <li className="flex items-center gap-1" key={index}>
                <GoDotFill /> {item}
              </li>
            ))}
          </ul>

          <h2 className="text-lg flex gap-1 items-center">
            <LuTriangleRight />
            {area}
          </h2>

          <Link className="flex gap-2 items-center border-b pb-3">
            <IoLocation />
            <span>{location}</span>
          </Link>

          <div className="flex items-center justify-between pt-1">
            <p className="font-medium text-[#2B2A4C]">
              $ <span>{price}</span>
            </p>
            <Link
              to={`/property/details/${id}`}
              className="text-white bg-[#491272] px-4 py-2 font-semibold rounded-md font_lato"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  data: PropTypes.object,
};

export default PropertyCard;
