import React from "react";

import { Outlet } from "react-router-dom";

import ToastMessage from "../components/ToastMessage";
import Header from "./Header";

const MainLayout: React.FC = () => {
  return (
    <div className="l-container">
      <>
        <Header />
        <Outlet />
      </>
      <ToastMessage />
    </div>
  );
};

export default MainLayout;
