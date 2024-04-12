import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, profileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();

  // handleUpdateProfile.
  const handleUpdateProfile = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
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
    <div>
      <section className=" text-white my-10 lg:my-24 p-4">
        <form
          onSubmit={handleUpdateProfile}
          className="container md:w-1/3 flex flex-col mx-auto"
        >
          <fieldset className="rounded-md shadow-sm p-6 space-y-3 bg-gray-500">
            <div>
              <label className="text-sm">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 p-3"
              />
            </div>
            <div>
              <label className="text-sm">ImageURL</label>
              <input
                type="text"
                name="photo"
                placeholder="https://"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 p-3"
              />
            </div>

            <div className="w-full bg-[#491272] p-3 rounded-md text-center">
              <button>Update Now</button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default UpdateProfile;
