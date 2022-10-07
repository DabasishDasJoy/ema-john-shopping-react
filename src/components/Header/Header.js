import React from "react";
import { Button, Dropdown, Menu, Navbar } from "react-daisyui";
import { NavLink } from "react-router-dom";
import logo from "../../images/Logo.svg";

const Header = ({ toggleVisible }) => {
  return (
    <Navbar className="bg-[#1C2B35] h-[80px] lg:px-[112px] fixed top-0 z-10">
      <Navbar.Start className="flex justify-between">
        <NavLink to={"/"}>
          <img src={logo} alt="" />
        </NavLink>
        <Dropdown vertical="end">
          <Button color="ghost" className="avatar lg:hidden" shape="circle">
            <div className="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </Button>
          <Dropdown.Menu className="w-52 menu-compact">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Start>
      <Navbar.Center className="hidden lg:flex">
        <Menu horizontal className="p-0 text-white flex gap-8">
          <NavLink
            to={"/order"}
            className={({ isActive }) =>
              isActive
                ? "text-orange-400"
                : "hover:text-orange-400 transition delay-75"
            }
          >
            Order
          </NavLink>
          <NavLink
            to={"/orderPreview"}
            className={({ isActive }) =>
              isActive
                ? "text-orange-400"
                : "hover:text-orange-400 transition delay-75"
            }
          >
            Order Preview
          </NavLink>
          <NavLink
            to={"/inventory"}
            className={({ isActive }) =>
              isActive
                ? "text-orange-400"
                : "hover:text-orange-400 transition delay-75"
            }
          >
            Inventory
          </NavLink>
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              isActive
                ? "text-orange-400"
                : "hover:text-orange-400 transition delay-75"
            }
          >
            Login
          </NavLink>
        </Menu>
      </Navbar.Center>
    </Navbar>
  );
};

export default Header;
