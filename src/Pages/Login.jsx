import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginUserdata } from "../API/ApiCall";
import "../assets/style/Login.css";
import apple from  "../assets/login/apple.png"
import { GoogleLogin } from "@react-oauth/google";
const LoginIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [errmsg, setErrmsg] = useState("");

  const LoginUser = (credentialResponse) => {
    localStorage.setItem("Userdata", credentialResponse.credential);
    navigate("/uploadpage");
  };

  return (
    <div class="h-screen md:flex">
      <div class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr  background i justify-around items-center hidden">
        <div className="">
          <h1 class="text-white font-bold text-5xl font-sans">BASE</h1>
          {/* <p class="text-white mt-1">
            The most popular peer to peer lending at SEA
          </p>
          <button
            type="submit"
            class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
          >
            Read More
          </button> */}
        </div>
      </div>
      <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form class="bg-white  p-5">
          <h1 class="text-gray-800 font-bold text-2xl mb-1">Sign In</h1>
          <p class="text-sm font-normal text-gray-600 mb-7">
            Sign in to your account
          </p>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <div class="sm:flex  items-center justify-center space-x-4 mt-3">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    LoginUser(credentialResponse);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />

                <button class="flex gap-2 mt-4 sm:mt-0 items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  <img className="w-4 " src={apple} alt="" />
                  Sign in with Apple
                </button>
              </div>
            </div>

            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 text-black"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class=" text-black  bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 text-black border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div class="flex items-center justify-between">
              <a
                href="#"
                class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign in
            </button>
          </form>
          <button
            type="submit"
            class="block w-full bg-indigo-600  py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Login
          </button>
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <a
              href="#"
              class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginIn;
