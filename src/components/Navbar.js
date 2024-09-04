import React from "react";
import {Link} from "react-router-dom";
import "../styles/navbar.css"
const Navbar=()=>{
    return(
       <nav>
        <Link to="/" className="title">BOOKS</Link>
        <ul>
            <li><Link to="/available">Available Books</Link></li>
            <li><Link to="/mybooks">My Books</Link></li>
            <li><Link to="/newbook">New Book Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>
       </nav>
    )
}
export default Navbar;
