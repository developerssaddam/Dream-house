import { IoLocation } from "react-icons/io5";
import { LuTriangleRight } from "react-icons/lu";
import { MdOutlineBedroomChild } from "react-icons/md";
import { LiaSwimmerSolid } from "react-icons/lia";
import { FaKitchenSet } from "react-icons/fa6";
import "./PropertyCard.css";
import { Link } from "react-router-dom";

const PropertyCard = () => {
  return (
    <div className="border border-[#A78BFA] shadow-lg rounded-lg relative">
      <badge className="status absolute right-5 top-5 text-white bg-[#FF385C] px-4 py-2 font-semibold rounded-md font_lato">
        For Sale
      </badge>
      <div className="property_card_item ">
        <img
          className="w-full"
          src="https://media.istockphoto.com/id/1255835530/photo/modern-custom-suburban-home-exterior.jpg?s=612x612&w=0&k=20&c=0Dqjm3NunXjZtWVpsUvNKg2A4rK2gMvJ-827nb4AMU4="
          alt=""
        />

        <div className="card_content p-8 text-[#747376] space-y-4">
          <h2 className="title text-2xl font-bold text-[#232323]">
            Real House Lauxary Villa
          </h2>
          <h3 className="text-[#232323] text-xl font-medium">segment_name</h3>
          <p className="desc font_lato">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            reprehenderit magni voluptatibus, odit quas neque eaque voluptates
            impedit reiciendis vero! In qui mollitia nesciunt deserunt aliquid
            dolores modi voluptates amet alias tempore iure, animi aut veniam
            hic harum autem obcaecati laudantium dolor corrupti tenetur? Atque
            ab quam et vitae quis!
          </p>

          <div className="flex items-center gap-2 font_lato text-[#232323] font-medium">
            <h2>Total Area : </h2>
            <p className="flex gap-1 items-center">
              <LuTriangleRight />
              <span>720</span>sq ft
            </p>
          </div>

          <div className="facilities">
            <ul className="font_lato flex gap-3">
              <li className="flex gap-1 items-center">
                <MdOutlineBedroomChild />
                <p>
                  <span>2</span>Living Room
                </p>
              </li>

              <li className="flex gap-1 items-center">
                <LiaSwimmerSolid />
                <p>
                  <span>1</span> swimming pool
                </p>
              </li>

              <li className="flex gap-1 items-center">
                <FaKitchenSet />
                <p>
                  <span>2</span> Kitchen
                </p>
              </li>
            </ul>
          </div>

          <Link className="font_lato flex gap-1 items-center">
            <IoLocation className=" font-medium text-[#232323]" />
            <span>Location</span>
          </Link>

          <div className="flex items-center justify-between">
            <p className="text-xl font-medium">$9999077</p>
            <button className="bg-[#FF385C] btn text-white">
              View Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
