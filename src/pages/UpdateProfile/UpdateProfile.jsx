import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user, profileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();
  const [updateInfo, setUpdateInfo] = useState(user);

  // handleInputChange.
  const handleInputChange = (e) => {
    setUpdateInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handleUpdateProfile.
  const handleUpdateProfile = (e) => {
    e.preventDefault();

    const name = updateInfo.displayName;
    const photo = updateInfo.photoURL;
    profileUpdate(user, name, photo)
      .then(() => {
        toast.success("Profile update successfull!");
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        toast.warn(error.message);
      });
  };

  return (
    <div className="bg-[#F5F7FB] lg:py-24">
      <Helmet>
        <title>Dream Houses | Update Profile</title>
      </Helmet>
      <section className="p-4">
        <form
          onSubmit={handleUpdateProfile}
          className="container md:w-1/3 flex flex-col mx-auto bg-white shadow-lg border"
        >
          <fieldset className="rounded-md shadow-sm p-6 space-y-3 ">
            <h2 className="text-3xl font-bold font_lato text-center">
              Update Your Profile!
            </h2>
            <div>
              <label className="text-sm">Name</label>
              <input
                value={updateInfo.displayName}
                onChange={(e) => handleInputChange(e)}
                type="text"
                name="displayName"
                placeholder="Name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 p-3 bg-[#F5F7FB]"
              />
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input
                value={updateInfo.email}
                onChange={(e) => handleInputChange(e)}
                type="email"
                name="email"
                placeholder="Email"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 p-3 bg-[#F5F7FB]"
              />
            </div>
            <div>
              <label className="text-sm">ImageURL</label>
              <input
                value={updateInfo.photoURL}
                onChange={(e) => handleInputChange(e)}
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 p-3 bg-[#F5F7FB]"
              />
            </div>

            <div className="w-full bg-[#491272] p-3 rounded-md text-center text-white">
              <button>Update Now</button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default UpdateProfile;
