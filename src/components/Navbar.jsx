import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useauth } from "../context/Context";
import toast from "react-hot-toast";
import SearchInput from "./Form/SearchInput";
import useCategory from "../hooks/useCategory";
import { Badge, Avatar } from "antd";
import { BiCart } from "react-icons/bi";
import { useCart } from "../context/cart";

const Navbar = () => {
  const [auth, setauth] = useauth();
  const categories = useCategory();
  const logout = () => {
    setauth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    toast.success("LOG-OUT SUCCESSFULLY");
  };
  const [cart] = useCart();

  const getUserInitials = () => {
    if (auth.user) {
      const initials = auth.user.name.split(" ").map((n) => n[0]).join("");
      return initials.toUpperCase();
    }
    return "";
  };

  return (
    <>
      <div className="container-fluid py-2 bg-dark">
        <nav className="navbar container navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            Emart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 gap-xl-3 mb-lg-0 align-items-center">
              
              <li className="nav-item">
                <SearchInput className="form-control rounded-pill border-0 bg-light mx-3" />
              </li>
              <li className="nav-item dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle px-4 py-2 rounded-pill border-0"
                  type="button"
                  id="categoryDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{backgroundColor:"black-500"}}
                >
                  Categories
                </button>
                <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                  {categories.map((c) => (
                    <li key={c.slug}>
                      <Link to={`/category/${c.slug}`} className="dropdown-item drop">
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shop">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <li className="nav-item dropdown" >
                  <button
                    className="btn dropdown-toggle d-flex align-items-center border-0 bg-transparent text-white"
                    type="button"
                    id="userDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Avatar style={{ backgroundColor: '#87d068', marginRight: '10px' }}>
                      {getUserInitials()}
                    </Avatar>
                  </button>
                  <ul   className="dropdown-menu  dropdown-menu-end" aria-labelledby="userDropdown">
                    <li>
                      <div className="dropdown-item">
                        {auth?.user?.name}
                        <small className="text-muted d-block">{auth?.user?.email}</small>
                      </div>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item   drop"
                        to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/login"
                        onClick={logout}
                      >
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </li>
              )}
              <li className="nav-item">
                <Badge count={cart?.length} className="nav-link">
                  <NavLink to="/cart" className="text-white">
                    <BiCart size={24} />
                  </NavLink>
                </Badge>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
