import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import "./Responsive.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <header className="max-w-screen-xl mx-auto">
        <div className="container">
          <nav>
            <div className="top-navbar">
              <ul>
                <li>Account</li>
                <li>Tract Order</li>
                <li>Support</li>
              </ul>
              <ul>
                <li className="flex gap-x-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                    alt=""
                    className="w-6"
                  />
                  <span>United State</span>
                </li>
                <li>
                  USD <i className="fa-solid fa-angle-down"></i>
                </li>
                <li>
                  Bangla <i className="fa-solid fa-angle-down"></i>
                </li>
              </ul>
            </div>
            <div className="middle-navbar">
              <div className="logo">
                <Link to={"/"}>
                  <img src="https://i.ibb.co/mXKTYxf/logo.png" alt="" />
                </Link>
              </div>
              <div className="search-bar">
                <div className="input-field">
                  <input type="text" placeholder="Search" />
                  <input type="text" placeholder="All Categories" />
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <button className="btn-orange">Search</button>
              </div>
              <div className="navbar-icon-menu">
                <div>
                  {user ? (
                    <div className="dropdown dropdown-end">
                      <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img src={user?.photoURL} />
                        </div>
                      </label>
                      <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <a className="justify-between">{user.displayName}</a>
                        </li>

                        <li>
                          <Link to={"/dashboard"}>Dashboard</Link>
                        </li>
                        <li onClick={handleSignOut}>
                          <Link>Logout</Link>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <Link to={"/login"}>
                      <button className="w-[150px] bg-[#FFBB18] h-[50px] my-3 flex items-center justify-center rounded font-bold  text-[#000] hidden lg:block">
                        Login
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <section className="main-navbar">
        <div className="container">
          <div className="main-navbar-wrapper">
            <div className="categories">
              <h4>
                <i className="fa-solid fa-bars"></i> All Categories
                <i className="fa-solid fa-angle-down"></i>
              </h4>
            </div>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active bg-black text-white py-3 px-8"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active  bg-black text-white py-3 px-8"
                      : ""
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mycart"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active  bg-black text-white py-3 px-8"
                      : ""
                  }
                >
                  My Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active  bg-black text-white py-3 px-8"
                      : ""
                  }
                >
                  Login
                </NavLink>
              </li>
            </ul>
            <Link to={'/register'}>
            <button  className="seller-btn">
              Become a Seller <i className="fa-solid fa-angle-right"></i>
            </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
