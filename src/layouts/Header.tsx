import React from "react";

import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/img/logo-web-app.png";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userLocal");
    navigate("/sign-in");
  };

  const userLocal = JSON.parse(localStorage.getItem("userLocal")!);

  return (
    <header>
      <div className="flex justify-between items-center">
        <div>
          <div className="avatar flex items-center gap-2">
            <div className="w-16 rounded-full">
              <img src={logo} />
            </div>
            <span className="font-cursive text-3xl bg-gradient-to-r from-greenLight to-greenBold inline-block text-transparent bg-clip-text">
              Green Chat
            </span>
          </div>
        </div>
        <span>
          {!userLocal ? (
            <Link to="/sign-in">
              <button className="btn btn-outline btn-success">Account</button>
            </Link>
          ) : (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="avatar online">
                  <div className="w-8 rounded-full">
                    <img src={userLocal.image} />
                  </div>
                </div>
                <p className="text-light">{userLocal.userName}</p>
              </div>
              <button
                onClick={handleLogout}
                className="btn bg-gradient-to-r from-greenLight to-greenBold text-white hover:opacity-80 rounded-2xl px-4"
              >
                Log out
              </button>
            </div>
          )}
        </span>
      </div>
    </header>
  );
};

export default Header;
