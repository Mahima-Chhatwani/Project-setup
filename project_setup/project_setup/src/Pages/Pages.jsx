import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function Pages() {
  return (
    <div className="college" style={{ textAlign: "center" }}>
      <h1> Page</h1>
      <h3><Link to="/">Go back to home page</Link></h3>
      <NavLink className="link" to="">About Us</NavLink> 
      <NavLink className="link" to="bookings">Bookings</NavLink> 
      <NavLink className="link" to="contact">Contact</NavLink>
      
      <Outlet />
    </div>
  );
}

export default Pages