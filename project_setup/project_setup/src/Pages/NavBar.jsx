import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const dropdownItems = {
    pages: [
      { path: "/aboutus", label: "About Us" },
      { path: "/contact", label: "Contact" },
      { path: "/bookings", label: "Bookings" },
      { path: "/invoice", label: "Invoice" },
    ],
    listings: [
      { path: "/listinggrid", label: "Listing Grid" },
      { path: "/listingdetails", label: "Listing Details" },
    ],
    blog: [
      { path: "/bloggrid", label: "Blog Grid" },
      { path: "/blogdetails", label: "Blog Details" },
    ],
    dashboard: [
      { path: "/userdashboard", label: "User Dashboard" },
      { path: "/admindashboard", label: "Admin Dashboard" },
    ],
  };

  const renderDropdown = (key) => (
    <div className="absolute top-full mt-2 w-48 bg-white text-black shadow-lg rounded z-10">
      {dropdownItems[key].map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="block px-4 py-2 hover:bg-gray-100"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );

  return (
    <div>
      <header className="bg-black text-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
             height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
              className="lucide lucide-car-front-icon lucide-car-front"
            >
              <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
              <path d="M7 14h.01" />
               <path d="M17 14h.01" />
               <rect width="18" height="8" x="3" y="10" rx="2" />
              <path d="M5 18v2" />
              <path d="M19 18v2" />
             </svg>
            <h1 className="text-xl font-bold">
              <span className="text-yellow-500">Quent</span>
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium relative">
            {/* Home */}
            <Link
              to="/"
              className="hover:text-yellow-400 text-yellow-500 flex items-center gap-1"
            >
              Home
            </Link>

            {/* Dropdown Items */}
            {[
              { label: "Pages", key: "pages" },
              { label: "Listings", key: "listings" },
              { label: "Blog", key: "blog" },
              { label: "Dashboard", key: "dashboard" },
            ].map(({ label, key }) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setOpenDropdown(key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className=" hover:text-yellow-400 flex items-center gap-1">
                  {label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {openDropdown === key && (
                 <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black shadow-lg rounded z-10">
                  {dropdownItems[key].map((item)=>(
                    <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-2 hover:bg-gray-100">
                      {item.label}
                    </Link>
                  ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Auth/User Info */}
          <div className="flex gap-3 text-sm items-center">
            {!user ? (
              <>
                <Link to="/login">
                  <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded">
                    Sign In
                  </button>
                </Link>
                <Link to="/register">
                  <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded text-black font-semibold">
                    Sign Up
                  </button>
                </Link>
              </>
            ) : (
              <>
                <div className="text-yellow-300 text-right">
                  <p>
                    Welcome, <span className="font-semibold">{user.name}</span>
                  </p>
                  <p className="text-xs text-gray-300">ID: {user.id}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      <Outlet />
    </div>
  );
}

export default NavBar;

