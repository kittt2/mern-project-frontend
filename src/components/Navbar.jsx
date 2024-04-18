import React from "react";
import { NavLink, Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { useauth } from "../context/Context";
import toast from "react-hot-toast";
import SearchInput from "./Form/SearchInput";
import useCategory from "../hooks/useCategory";
import { Badge } from "antd";
import { useCart } from "../context/cart";

const Navbar = () => {
    const [auth, setauth] = useauth();
    const categories=useCategory();
    const logout = () => {
        setauth({ ...auth, user: null, token: "" })
        localStorage.removeItem('auth')
        toast.success("LOG-OUT SUCCESSFULLY")
    }
    const [cart]=useCart();
     

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" id="nav2">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link to="/" className="navbar-brand">
                        KoSTYLE WITH REACT
                        </Link>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link " id="text">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                              <SearchInput/>
                            </li>


                            <div className="dropdown" id={"droph"}>
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="responsiveDropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                               categories
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="responsiveDropdownMenuButton">
                                                {categories.map((c)=>(
                                                <li><Link to={`/category/${c.slug}`} className="nav-link" >{c.name}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                            <li className="nav-item">
                                <NavLink to="/shop" className="nav-link " id="text">
                                    Products
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link " id="text">
                                    about
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link "id="text">
                                    Contact
                                </NavLink>
                            </li>
                            {!auth.user ? (
                                <>
                                    <li className="nav-item">
                                        <NavLink to="/register" className="nav-link" id="text">
                                            Register
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink to="/login" className="nav-link" id="text">
                                            Login
                                        </NavLink>
                                    </li>
                                </>
                            )
                                :
                                (
                                    <>

                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="responsiveDropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                               {auth?.user?.name}
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="responsiveDropdownMenuButton">
                                                <li><NavLink className="nav-link" to={`/dashboard/${auth?.user?.role===1?"admin":"user"}`}>dashboard</NavLink></li>
                                               
                                                <li className="nav-item">
                                           <NavLink to="/login" onClick={logout} className="nav-link" id="text">
                                                Logout
                                            </NavLink>
                                            </li>
                                      
                                            </ul>
                                        </div>

                                       
                                    </>
                                )}

                            <li className="nav-item">
                            <Badge count={cart?.length}> 
                                <NavLink to="/cart" className="nav-link">
                                <span> 🛒cart</span>
                                </NavLink>
                                </Badge>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
