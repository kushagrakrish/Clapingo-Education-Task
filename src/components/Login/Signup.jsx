import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  return (
    <>
      <div className='flex items-center text-center justify-center h-[100vh] flex-col'>
        <h1 className='text-2xl font-normal'>
          Welcome
          <span className='uppercase font-semibold text-teal-500'>
            {username},
          </span>
          <br />
          You are logged in.
        </h1>
        <button onClick={() => navigate("/")} className='btn btn-accent my-9'>
          Get Started
        </button>
      </div>
    </>
  );
};

export default Signup;
