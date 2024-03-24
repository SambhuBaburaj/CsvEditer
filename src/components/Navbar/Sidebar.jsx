import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, useAnimation } from "framer-motion";
// import DropDown from "./DropDown";
import { useLocation, useNavigate } from "react-router-dom";
// import TeleMedicine from "../../Pages/Admin/TeleMedicine";
import {
  openSidebar,
} from "../../Redux/Features/NavbarSlice";

function SideBar() {
  const dispatch = useDispatch();
  const { toggleSidebar } = useSelector((state) => {
    return state.navbar;
  });
  const controls = useAnimation();
  const dropdown = useAnimation();
  const [currentRoute, setCurrentRoute] = useState(useLocation().pathname);
  const navigate = useNavigate();
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  console.log(window.location.pathname, "path name");
  const [droping, setDroping] = useState(false);

  return (
    <div>
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen  transition-transform  
      ${toggleSidebar ? "translate-x-0" : "-translate-x-full"} 
        border-r sm:translate-x-0 bg-white `}
        aria-label="Sidebar"
      >
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          className="p-6 inline-flex z-40 items-centertext-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
        <div className="max-w-44 ">
          <p className=" font-bold text-xl flex justify-center p-5">Base</p>
        </div>

        <div class="h-full px-3 pb-4 overflow-y-auto  bg-white pt-20">
          <ul class="space-y-9 font-medium">
            <li>
              <a
                onClick={() => {
                  // dispatch(telemedicine());
                  setCurrentRoute("/uploadpage ");
                  navigate("/uploadpage");
                  dispatch(openSidebar());
                }}
                href="#"
                className={`flex items-center p-2 pl-12 rounded-lg group ${
                  window.location.pathname === "/uploadpage"
                    ? "bg-gray-50 text-blue-600 "
                    : "text-black"
                } `}
              >
                {window.location.pathname === "/uploadpage" ? (
                  <svg
                    width="26px"
                    height="26px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M11 6L21 6.00072M11 12L21 12.0007M11 18L21 18.0007M3 11.9444L4.53846 13.5L8 10M3 5.94444L4.53846 7.5L8 4M4.5 18H4.51M5 18C5 18.2761 4.77614 18.5 4.5 18.5C4.22386 18.5 4 18.2761 4 18C4 17.7239 4.22386 17.5 4.5 17.5C4.77614 17.5 5 17.7239 5 18Z"
                        stroke="#2563eb"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />{" "}
                    </g>
                  </svg>
                ) : (
                  <svg
                    width="26px"
                    height="26px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#f5efef"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M11 6L21 6.00072M11 12L21 12.0007M11 18L21 18.0007M3 11.9444L4.53846 13.5L8 10M3 5.94444L4.53846 7.5L8 4M4.5 18H4.51M5 18C5 18.2761 4.77614 18.5 4.5 18.5C4.22386 18.5 4 18.2761 4 18C4 17.7239 4.22386 17.5 4.5 17.5C4.77614 17.5 5 17.7239 5 18Z"
                        stroke="#020617"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />{" "}
                    </g>
                  </svg>
                )}

                <span className="ms-2">upload</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setCurrentRoute("/dashboard");
                  navigate("/dashboard");
                  dispatch(openSidebar());
                }}
                href="#"
                className={`flex pl-12 items-center p-2 rounded-lg group ${
                  window.location.pathname === "/dashboard"
                    ? "bg-gray-50 text-blue-600 "
                    : "text-black"
                } `}
              >
                <svg
                  width="28px"
                  height="28px"
                  viewBox="0 -0.5 25 25"
                  fill="#FFFFFF"
                  className={`svg-icon ${
                    window.location.pathname === "/dashboard"
                      ? "svg-icon-active"
                      : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.918 10.0005H7.082C6.66587 9.99708 6.26541 10.1591 5.96873 10.4509C5.67204 10.7427 5.50343 11.1404 5.5 11.5565V17.4455C5.5077 18.3117 6.21584 19.0078 7.082 19.0005H9.918C10.3341 19.004 10.7346 18.842 11.0313 18.5502C11.328 18.2584 11.4966 17.8607 11.5 17.4445V11.5565C11.4966 11.1404 11.328 10.7427 11.0313 10.4509C10.7346 10.1591 10.3341 9.99708 9.918 10.0005Z"
                      stroke="#020617"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.918 4.0006H7.082C6.23326 3.97706 5.52559 4.64492 5.5 5.4936V6.5076C5.52559 7.35629 6.23326 8.02415 7.082 8.0006H9.918C10.7667 8.02415 11.4744 7.35629 11.5 6.5076V5.4936C11.4744 4.64492 10.7667 3.97706 9.918 4.0006Z"
                      stroke="#020617"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.082 13.0007H17.917C18.3333 13.0044 18.734 12.8425 19.0309 12.5507C19.3278 12.2588 19.4966 11.861 19.5 11.4447V5.55666C19.4966 5.14054 19.328 4.74282 19.0313 4.45101C18.7346 4.1592 18.3341 3.9972 17.918 4.00066H15.082C14.6659 3.9972 14.2654 4.1592 13.9687 4.45101C13.672 4.74282 13.5034 5.14054 13.5 5.55666V11.4447C13.5034 11.8608 13.672 12.2585 13.9687 12.5503C14.2654 12.8421 14.6659 13.0041 15.082 13.0007Z"
                      stroke="#020617"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.082 19.0006H17.917C18.7661 19.0247 19.4744 18.3567 19.5 17.5076V16.4936C19.4744 15.6449 18.7667 14.9771 17.918 15.0006H15.082C14.2333 14.9771 13.5256 15.6449 13.5 16.4936V17.5066C13.525 18.3557 14.2329 19.0241 15.082 19.0006Z"
                      stroke="#020617"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />{" "}
                  </g>
                </svg>

                <span className="ms-3 ">Dashboard</span>
              </a>
            </li>
            {/* <DropDown
            title="Booking"
            dropdowndata={[
              { title: "all Booking", link: "/all-booking" },
              { title: "add Booking", link: "/add-booking" },
              { title: "Edit Booing", link: "/edit-booking" },
            ]}
            setCurrentRoute={setCurrentRoute}
            currentRoute={currentRoute}
          /> */}

            <li className="pt-1">
              <a
                onClick={() => {
                  localStorage.removeItem("Userdata");

                  navigate("/login");
                }}
                href="#"
                class={`flex items-center p-2 pl-12   rounded-lg       group ${
                  currentRoute === "" ? "bg-white text-black " : "text-red-500"
                } `}
              >
                <svg
                  width="30"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15"
                      stroke="#d41633"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827"
                      stroke="#d41633"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                  </g>
                </svg>

                <span class="ms-3 ">logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default SideBar;
