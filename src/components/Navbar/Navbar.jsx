import React from "react";
import { Link } from "react-router-dom";
import ClapingoLogo from "../../Assets/ClapingoLogo.png";

const Items = [
  "Plans & Pricing",
  "Teach with us",
  "Affiliate Programe",
  "Kids",
];
const Navbar = () => {
  return (
    <div>
      <div className='navbar bg-base-100 px-48 py-1'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              {Items?.map((item, i) => (
                <li className='font-normal cursor-pointer hover:text-teal-600 '>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Link to={"/"}>
            <img src={ClapingoLogo} alt='' />
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal p-0'>
            {Items?.map((item, i) => (
              <li className='font-semibold text-lg px-10 cursor-pointer hover:text-teal-600 '>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className='navbar-end'>
          <Link to={"/login"}>
            <button className='btn btn-sm btn-color border-none rounded-3xl '>
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
