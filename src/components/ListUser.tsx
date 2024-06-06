import React from "react";

const ListUser: React.FC = () => {
  const users = [
    {
      name: "quoc thanh",
      image:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      online: true,
    },
    {
      name: "quoc thanh",
      image:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      online: false,
    },
    {
      name: "quoc thanh",
      image:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      online: false,
    },
    {
      name: "quoc thanh",
      image:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      online: true,
    },
  ];

  return (
    <aside className="">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-200"
      >
        <div className="collapse-title text-xl font-medium ml-1">
          All Friends
        </div>
        <ul className="collapse-content">
          {users.map((a, i) => (
            <li
              className="flex items-center gap-3 mt-3 hover:bg-greenLight hover:opacity-70"
              key={i}
            >
              <div className={`avatar ${a.online && "online"}`}>
                <div className="w-10 rounded-full">
                  <img src={a.image} />
                </div>
              </div>
              <span>{a.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default ListUser;
