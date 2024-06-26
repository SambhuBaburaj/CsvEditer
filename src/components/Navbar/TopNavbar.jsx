import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "../../Redux/Features/NavbarSlice";
import { motion, useAnimationControls } from "framer-motion";
import  vector  from "../../assets/Vector.png"
import { useLocation, useNavigate } from "react-router-dom";

import "../../assets/style/navbar.css";
import { jwtDecode } from "jwt-decode";

function NavBar() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  //   const DatatopNav=()=>
  //   {
  //     const {topnavData}=useSelector((state) => {
  //       return state.navbar;
  //     })
  //     console.log(topnavData);
  //   }
  // useEffect(() => {
  //   console.log(window.location.pathname);

  //   // setCurrentRoute(useLocation().pathname)
  // }, [useLocation().pathname]);

  // const [audio] = useState(new Audio('../../assets/short-success-sound-glockenspiel-treasure-video-game-6346.mp3'));

  const [getNotData, setGetNotData] = useState(0);

  const profilePic = () => {
    try{
    const credentialResponse = localStorage.getItem("Userdata").toString();
      
      const credentials = jwtDecode(credentialResponse);
      if(credentials){
        setGetNotData(credentials);
  
      }
    }catch(err){
      console.log(err);
   
      localStorage.removeItem("Userdata")
      

    }


    {
    
    }
  };
  useEffect(() => {
    profilePic();
  },[]);

  return (
    <>
      {/* <Toaster position="bottom-right" reverseOrder={false} /> */}
      <nav className="fixed top-0 z-30 w-full   bg-gray-50 ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          {/* <Notification /> */}
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={() => {
                  dispatch(openSidebar());
                }}
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>

              <div className="flex justify-end ms-2 sm:ms-16  md:me-24">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" /> */}
                {/* <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  SOPHWE
                </span> */}
                <div className="max-w-44 ">
                  <p className="text-xl font-bold">Base</p>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              {/* Notification and Profile */}
              <div class="flex items-center ms-3">
                <div className="relative inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    onClick={async () => {
                      setOpenNotification((e) => !e);
                    }}
                  >
                   
                  </button> */}
                  <div className="flex justify-between gap-5 items-center">
                    <img
                      className="w-5 h-6"
                      src={vector}
                      alt="img"
                    />
                    <img
                      className="w-7 h-7 rounded-full"
                      src={getNotData?.picture}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="flex items-center ms-3">
                {/* <div>
                  <button
                    onClick={() => {
                      setOpenMenu((e) => !e);
                    }}
                    type="button"
                    class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div> */}
                {/* {openMenu && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={list}
                    class="z-50 fixed my-4 right-7 top-6 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="dropdown-user"
                  >
                    <div class="px-4 py-3" role="none">
                      <p
                        class="text-sm text-gray-900 dark:text-white"
                        role="none"
                      >
                        Neil Sims
                      </p>
                      <p
                        class="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                        role="none"
                      >
                        neil.sims@flowbite.com
                      </p>
                    </div>
                    <motion.ul
                      initial="hidden"
                      animate="visible"
                      variants={list}
                      class="py-1"
                      role="none"
                    >
                      <motion.li variants={item}>
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Dashboard
                        </a>
                      </motion.li>
                      <motion.li variants={item}>
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Settings
                        </a>
                      </motion.li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Earnings
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {}}
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Sign out
                        </a>
                      </li>
                    </motion.ul>
                  </motion.div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
