import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastMessage: React.FC = () => {
  return (
    <div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default ToastMessage;
