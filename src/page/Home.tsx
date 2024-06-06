import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import ChatBox from "../components/ChatBox";
import ListUser from "../components/ListUser";

const Home: React.FC = () => {
  const nav = [
    {
      page: "Home",
      path: "/",
    },
  ];
  return (
    <div>
      <Breadcrumbs nav={nav} />
      <div className="flex gap-5 mt-3 max-md:flex-col">
        <div className="max-w-80 w-full max-md:max-w-full">
          <ListUser />
        </div>
        <div className="flex-auto">
          <ChatBox />
        </div>
      </div>
    </div>
  );
};

export default Home;
