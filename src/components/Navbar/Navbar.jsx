import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import "./Responsive.css";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="top-navbar">
              <ul>
                <li>Account</li>
                <li>Tract Order</li>
                <li>Support</li>
              </ul>
              <ul>
                <li>
                  <img src="./images/country-logo-16x16.png" alt="" />
                  United State
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
                <Link to={'/'}>
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
                <i className="fa-regular fa-heart"></i>
                <i className="fa-brands fa-shopify"></i>
                <i className="fa-regular fa-user"></i>
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
                    isPending ? "pending" : isActive ? "active bg-black text-white py-3 px-8" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addproduct"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active  bg-black text-white py-3 px-8" : ""
                  }
                >
                  Add Product
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mycart"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active  bg-black text-white py-3 px-8" : ""
                  }
                >
                  My Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active  bg-black text-white py-3 px-8" : ""
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active  bg-black text-white py-3 px-8" : ""
                  }
                >
                  Register
                </NavLink>
              </li>
            </ul>
            <button className="seller-btn">
              Become a Seller <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
