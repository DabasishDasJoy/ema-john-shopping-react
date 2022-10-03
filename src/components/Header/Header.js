import React from "react";
import { Button, Dropdown, Menu, Navbar } from "react-daisyui";
import { NavLink } from "react-router-dom";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <Navbar className="bg-[#1C2B35] h-[80px] md:px-[112px]">
      <Navbar.Start>
        <Dropdown>
          <Button color="ghost" tabIndex={0} className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </Button>
          <Dropdown.Menu tabIndex={0} className="w-52 menu-compact mt-3">
            <Dropdown.Item>Item 1</Dropdown.Item>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <Dropdown.Item>Item 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <NavLink to={"/"}>
          <img src={logo} alt="" />
        </NavLink>
      </Navbar.Start>
      <Navbar.Center className="hidden lg:flex">
        <Menu horizontal className="p-0 text-white flex gap-8">
          <NavLink to={"/order"}>Order</NavLink>
          <NavLink to={"/order-preview"}>Order Preview</NavLink>
          <NavLink to={"/inventory"}>Inventory</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
        </Menu>
      </Navbar.Center>
    </Navbar>
  );
};

export default Header;
