"use client";
import Link from "next/link";
import React from "react";
import "./Navbar.css";
import { BiUserCircle, BiSearch } from "react-icons/bi";
import { RiArrowDropDownFill } from "react-icons/ri";
import logo from "@/assets/MAREAs.png";
import Image from "next/image";
import LocationPopup from "@/popups/location/LocationPopup";

const Navbar = () => {
  const [showLocationPopup, setShowLocationPopup] =
    React.useState<boolean>(false);
  const [user, setUser] = React.useState<any>(null);
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);

  return (
    <nav>
      <div className="left">
        <a href="/bkk/markets/Night/bookings">
          <Image src={logo} alt="logo" width={60} height={100} />
        </a>
        <h1 className="logoText">MAREAs</h1>
        {/* <div className="searchbox">
          <BiSearch className="searchbtn" />
          <input type="text" placeholder="Search For a Movie" />
        </div> */}
      </div>
      <div className="right">
        {/* <p className="dropdown" onClick={() => setShowLocationPopup(true)}>
          Mumbai <RiArrowDropDownFill className="dropicon" />
        </p>
        <Link href="/" className="theme_btn1 linkstylenone">
          Logout
        </Link> */}
        <Link href="/auth/signin" className="linkstylenone">
          <BiUserCircle className="theme_icon1" />
        </Link>
      </div>
      {showLocationPopup && (
        <LocationPopup setShowLocationPopup={setShowLocationPopup} />
      )}
    </nav>
  );
};

export default Navbar;
