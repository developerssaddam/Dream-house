import { IoLocation } from "react-icons/io5";
import { LuTriangleRight } from "react-icons/lu";
import { MdOutlineBedroomChild } from "react-icons/md";
import { LiaSwimmerSolid } from "react-icons/lia";
import { FaKitchenSet } from "react-icons/fa6";
import "./PropertyCard.css";
import { Link } from "react-router-dom";

const PropertyCard = () => {
  return (
    <div className="border shadow-lg rounded-lg relative">
      <div className="status absolute right-5 top-5 text-white bg-[#FF385C] px-6 py-2 font-semibold rounded-md font_lato">
        For Sale
      </div>
      <div className="property_card_item ">
        <img
          className="w-full rounded-t-lg"
          src="https://media.istockphoto.com/id/1255835530/photo/modern-custom-suburban-home-exterior.jpg?s=612x612&w=0&k=20&c=0Dqjm3NunXjZtWVpsUvNKg2A4rK2gMvJ-827nb4AMU4="
          alt=""
        />

        <div className="card_content p-4 text-[#747376] space-y-3">
          <h2 className="title text-xl font-bold text-[#2B2A4C]">
            Real House Lauxary Villa
          </h2>
          <h3 className="text-[#232323] text-lg font-medium font_lato">
            segment_name
          </h3>
          <p className="desc font_lato">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            reprehenderit magni voluptatibus, odit quas neque
          </p>

          <div className="facilities">
            <ul className="gap-1 flex flex-col text-[#2B2A4C] border-b pb-3">
              <li className="flex gap-2 items-center">
                <MdOutlineBedroomChild className="text-xl" />
                <p>
                  <span>2</span>Living Room
                </p>
              </li>

              <li className="flex gap-2 items-center">
                <LiaSwimmerSolid className="text-xl" />
                <p>
                  <span>1</span> swimming pool
                </p>
              </li>

              <li className="flex gap-2 items-center">
                <FaKitchenSet className="text-xl" />
                <p>
                  <span>2</span> Kitchen
                </p>
              </li>

              <li className="flex gap-2 items-center">
                <LuTriangleRight className="text-xl" />
                <p>
                  <span>720</span>sq ft
                </p>
              </li>

              <li className="flex gap-2 items-center">
                <Link className="flex gap-2 items-center">
                  <IoLocation />
                  <span>Location</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-between pt-1">
            <p className="font-medium text-[#2B2A4C]">
              $ <span>9999077</span>
            </p>
            <button className="text-white bg-[#FF385C] px-4 py-2 font-semibold rounded-md font_lato">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
