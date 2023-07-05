import React from "react";

function NavBar() {
  return (
    <div className="navBar flex justify-between item-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-[#2a68ff]">
          <strong>Job</strong>Search
        </h1>
      </div>
      <div className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-[#2a68ff]">Jobs</li>
        <li className="menuList text-[#6f6f6f] hover:text-[#2a68ff]">
          Companies
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-[#2a68ff]">About</li>
        <li className="menuList text-[#6f6f6f] hover:text-[#2a68ff]">
          Contact
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-[#2a68ff]">Blog</li>
        <li className="menuList text-[#6f6f6f] hover:text-[#2a68ff]">Login</li>
        <li className="menuList text-[#6f6f6f] hover:text-[#2a68ff]">
          Register
        </li>
      </div>
    </div>
  );
}

export default NavBar;
