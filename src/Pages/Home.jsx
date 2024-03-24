import React from "react";
import { useNavigate } from "react-router-dom";

import Content from "../components/Navbar/Content";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/Navbar/TopNavbar";
import SideBar from "../components/Navbar/Sidebar";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <SideBar />
      <Content>
        <Outlet />
      </Content>
    </>
  );
}

export default Home;
