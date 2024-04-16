import { useLoaderData, useParams } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { LuTriangleRight } from "react-icons/lu";
import LocationMap from "../../components/LocationMap/LocationMap";
import { Helmet } from "react-helmet-async";

const ViewDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const currentData = data.find((dataItem) => dataItem.id === id);
  const {
    estate_title,
    description,
    long_description,
    price,
    status,
    area,
    location,
    image_url,
    facilities,
  } = currentData;

  return (
    <div className="bg-[#F5F7FB] container mx-auto">
      <Helmet>
        <title>Dream Houses | Property details</title>
      </Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-10">
        <div className="content lg:col-span-2 p-4">
          {/* content-header */}
          <div className="flex flex-col lg:flex-row gap-5 space-y-3 justify-between mb-8">
            <div>
              <div className="flex flex-col-reverse lg:flex-row justify-between lg:gap-3 lg:items-center">
                <h2 className="text-[#222222] text-xl lg:text-2xl font-semibold">
                  {estate_title}
                </h2>
                <span className="bg-[#A106D0] text-white font-medium rounded-2xl py-1 px-4 w-24 text-xs text-center my-3">
                  for {status}
                </span>
              </div>
              <div className="flex gap-1 items-center text-gray-500">
                <IoLocationOutline />
                <p>{location}</p>
              </div>
            </div>
            <div>
              <h2 className="flex gap-1 items-center text-[#FF385C] font-bold">
                <LuTriangleRight />
                {area}
              </h2>
              <h2 className="flex gap-1 items-center text-[#FF385C] font-bold text-lg">
                {price}
              </h2>
              <p className="flex items-center font-medium text-sm">
                <BsCurrencyDollar />
                <span className="font-semibold">1200</span> / sq ft
              </p>
            </div>
          </div>

          {/* image-area */}
          <div className="p-5 bg-white shadow-lg mb-8">
            <img className="w-full object-cover" src={image_url} alt="" />
          </div>

          {/* discription */}
          <div className="p-5 bg-white shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-5 underline">
              Description
            </h2>
            <p className="mb-4">{description}</p>
            <p className="mb-4">{long_description}</p>
          </div>

          {/* Facilities */}
          <div className="p-5 bg-white shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-5 underline">
              Facilities
            </h2>

            <ul className="w-2/3 grid grid-cols-2">
              {facilities.map((item, index) => (
                <li key={index} className="flex gap-1 items-center">
                  <GoDotFill />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="p-5 bg-white shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-5 underline">
              Our Location
            </h2>

            <LocationMap />
          </div>
        </div>

        {/* Sidebar */}
        <div className="sidebar col-span-1 p-4">
          <div className="bg-white shadow-md p-5">
            <h2 className="text-2xl font-bold font_lato border-b pb-4">
              Agent Information
            </h2>
            <div className="agent_profile_info">
              <div className="flex items-center gap-10 my-5">
                <img
                  className="w-16 rounded-full border"
                  src="https://code-theme.com/html/findhouses/images/testimonials/ts-1.jpg"
                  alt=""
                />
                <div>
                  <h2 className="text-xl font-semibold">Lisa Clark</h2>
                  <p className="text-gray-500">Agent of dream houses</p>
                </div>
              </div>
              <ul className="*:flex *:items-center *:gap-2 space-y-4 border-b pb-5">
                <li>
                  <IoLocationOutline className="text-[#491272] font-semibold text-xl" />{" "}
                  {location}
                </li>
                <li>
                  <FaPhoneAlt className="text-[#491272] font-semibold text-xl" />{" "}
                  (234) 0200 17813
                </li>
                <li>
                  <IoMdMailOpen className="text-[#491272] font-semibold text-xl" />{" "}
                  lisa@gmail.com
                </li>
              </ul>

              <form>
                <h2 className="text-xl font-semibold font_lato my-4">
                  Request Inquiry
                </h2>

                <input
                  className="border px-4 py-2 mb-2 w-full"
                  type="text"
                  placeholder="Full Name"
                />
                <input
                  className="border px-4 py-2 mb-2 w-full"
                  type="number"
                  placeholder="Phone Number"
                />
                <input
                  className="border px-4 py-2 mb-2 w-full"
                  type="email"
                  placeholder="Email Address"
                />
                <textarea
                  className="border px-4 py-2 mb-2 w-full"
                  rows="4"
                  cols="50"
                  placeholder="Message"
                ></textarea>

                <button className="btn w-full text-white bg-[#491272]">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
