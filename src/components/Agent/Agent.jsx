import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Agent = ({ image, name }) => {
  return (
    <>
      <div className="shadow-xl mb-12">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt=""
            className="w-full h-60 object-cover hover:scale-105 duration-150 ease-linear"
          />
          <ul className="social *:bg-[#687389] *:text-white *:p-1 *:mb-1 absolute right-0 top-0">
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
                <FaLinkedinIn />
              </Link>
            </li>

            <li>
              <Link>
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center my-3">
          <h2 className="text-lg font-semibold hover:text-[#687389] transition ease-in duration-100">
            {name}
          </h2>
          <p>Dream Houses Agent</p>
        </div>
      </div>
    </>
  );
};

export default Agent;
