import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProviders";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const passCheck = /(?=.*[A-Z])(?=.*[a-z]){6,}/;

  const { createUser } = useContext(AuthContext);

  // handleShowHidePassword.
  const handleShowHidePassword = () => {
    setShowPassword(!showPassword);
  };

  // handleRegister.
  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    // Validation.
    if (!name || !email || !photo || !password) {
      return toast.warn("All fields are required!");
    }

    if (!terms) {
      return toast.warn("Accept terms & conditions!");
    }

    // Check Password.
    if (!passCheck.test(password)) {
      return toast.warn(
        "Password must be at least six character with lowercase and uppercase letter!"
      );
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
        toast.success("User registration successfull!");
        e.target.reset();
        navigate("/login");
      })
      .catch((error) => {
        toast.warn(error.message);
      });
  };

  return (
    <div className="p-3 bg-[#F5F7FB]">
      <Helmet>
        <title>Dragon news | Register</title>
      </Helmet>

      <div className="w-full mx-auto my-10 max-w-md p-8 space-y-3 rounded-xl bg-[#FFFFFF] shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-5">
          Register Now
        </h1>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label className="block">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-[#F5F7FB] focus:border-violet-400"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label className="block">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-[#F5F7FB] focus:border-violet-400"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label className="block">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-[#F5F7FB] focus:border-violet-400"
            />
          </div>

          <div className="space-y-1 text-sm relative">
            <label className="block">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-[#F5F7FB] focus:border-violet-400"
            />
            <span
              onClick={handleShowHidePassword}
              className="absolute bottom-4 right-4 cursor-pointer"
            >
              {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
            </span>
          </div>

          <div className="space-y-1 text-sm flex gap-2">
            <input type="checkbox" name="terms" />
            <label className="block">Accept Term & Conditions</label>
          </div>

          <button className="block w-full p-3 text-center text-white rounded-sm bg-[#190f38] hover:bg-[#491272]">
            Register
          </button>
        </form>

        <p className="text-xs text-center sm:px-6">
          Already have an account?{" "}
          <Link to="/login" className="underline text-[#A78BFA]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
