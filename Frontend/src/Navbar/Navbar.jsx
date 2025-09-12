import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import logo from "../assets/EcoClean-logo-transparent.png";
import { axiosInstance } from "../Utility/axiosInstance";
import { apiPath } from "../Utility/apiPath";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AboutContext } from "../About/AboutState";
import { Link } from "react-router-dom";
import {
  FaLeaf,
  FaTrashAlt,
  FaUserCheck,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaUsers,
  FaGlobe,
  FaQuoteLeft,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaTruck,
  FaTools,
  FaPaperPlane,
  FaCamera,
  FaUserTie,
  FaDatabase
} from "react-icons/fa";

function Navbar() {
  const { user, handleGetUser, reset } = useContext(AboutContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMobileOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  // console.log(user);

  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("token");
    handleGetUser();
    reset();
    navigate("/login");
  };

  return (
    <>
      <section className="fixed w-full top-0 z-100">
        {/* NAVBAR */}
        <header className="w-full py-4 px-6 md:px-10 flex items-center justify-between bg-white/70 backdrop-blur-sm shadow sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-white shadow-sm inline-flex items-center justify-center">
              <FaLeaf className="text-green-600 w-6 h-6" />
            </div>
            <div>
              <div className="text-lg font-bold text-green-800">EcoClean</div>
              <div className="text-xs text-gray-500">Smart waste reporting</div>
            </div>
          </div>

          {/* <nav className="hidden md:flex items-center gap-6">
                  <a href="#features" className="hover:underline">Features</a>
                  <a href="#howitworks" className="hover:underline">How it works</a>
                  <a href="#drivers" className="hover:underline">Drivers</a>
                  <a href="#faq" className="hover:underline">FAQ</a>
                </nav> */}

          {/* <div className="hidden md:flex items-center gap-3">
                  <a href="/login" className="px-4 py-2 border border-green-600 text-green-700 rounded-lg hover:bg-green-100 transition">Login</a>
                  <a href="/signup" className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition">Sign Up</a>
                </div> */}

          {user ? (
            <div className="flex items-center gap-3">
              <div className="group cursor-pointer">
                <p className="text-4xl text-gray-700">
                  <CgProfile />
                </p>
                <div>
                  <div className="hidden absolute bg-white top-20 right-15 shadow-md rounded px-6 py-4 group-hover:flex flex-col">
                    <h1 className="font-medium">{user?.userName}</h1>
                    <p>
                      <span className="font-medium">User Id :</span>{" "}
                      {user?.userId}
                    </p>
                    <p>
                      <span className="font-medium">Role :</span> {user?.role}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h2>{user?.userName}</h2>
                <button
                  className="flex items-center gap-2 bg-green-500 text-white rounded-md p-1 cursor-pointer"
                  onClick={handleLogout}
                >
                  <span>
                    <BiLogOut />
                  </span>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-green-600 text-green-700 rounded-lg hover:bg-green-100 transition cursor-pointer">
                <Link to="/login">Login</Link>
              </button>
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition cursor-pointer">
                <Link to="/signup">Signup</Link>
              </button>
            </div>
          )}

          {/* mobile hamburger */}
          <button className="md:hidden p-2 rounded-md text-green-700" aria-label={mobileOpen ? "Close menu" : "Open menu"} onClick={() => setMobileOpen((s) => !s)}>
            {mobileOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </header>

        {/* Mobile menu overlay */}
        {mobileOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-black/40" onClick={() => setMobileOpen(false)}>
            <div className="absolute right-0 top-0 w-3/4 max-w-xs h-full bg-white p-6 shadow-lg" onClick={(e) => e.stopPropagation()}>
              <nav className="flex flex-col gap-4 mt-6">
                <a href="#features" className="py-2" onClick={() => setMobileOpen(false)}>Features</a>
                <a href="#howitworks" className="py-2" onClick={() => setMobileOpen(false)}>How it works</a>
                <a href="#drivers" className="py-2" onClick={() => setMobileOpen(false)}>Drivers</a>
                <a href="#faq" className="py-2" onClick={() => setMobileOpen(false)}>FAQ</a>
                <div className="mt-4 flex flex-col gap-2">
                  <a href="/login" className="w-full py-2 border rounded-md text-center">Login</a>
                  <a href="/signup" className="w-full py-2 bg-green-600 text-white rounded-md text-center">Sign Up</a>
                </div>
              </nav>
            </div>
          </div>
        )}
        {/* <section className="justify-between w-[80%] m-auto flex items-center py-2 ">
          <div>
            <img src={logo} alt="" className="h-10" />
          </div>

          {user ? (
            <div className="flex items-center gap-3">
              <div className="group cursor-pointer">
                <p className="text-4xl text-gray-700">
                  <CgProfile />
                </p>
                <div>
                  <div className="hidden absolute bg-white top-20 right-15 shadow-md rounded px-6 py-4 group-hover:flex flex-col">
                    <h1 className="font-medium">{user?.userName}</h1>
                    <p>
                      <span className="font-medium">User Id :</span>{" "}
                      {user?.userId}
                    </p>
                    <p>
                      <span className="font-medium">Role :</span> {user?.role}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h2>{user?.userName}</h2>
                <button
                  className="flex items-center gap-2 bg-green-500 text-white rounded-md p-1 cursor-pointer"
                  onClick={handleLogout}
                >
                  <span>
                    <BiLogOut />
                  </span>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <button className="bg-green-500 text-white px-2 py-1 rounded">
                <Link to="/login">Login</Link>
              </button>
              <button className="bg-green-500 text-white px-2 py-1 cursor-pointer rounded">
                <Link to="/signup">Signup</Link>
              </button>
            </div>
          )}
        </section> */}
      </section>
    </>
  );
}

export default Navbar;
