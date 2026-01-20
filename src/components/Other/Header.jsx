import { memo } from "react";

const Header = ({ data }) => {

  const username = data?.firstName || "Admin";

  const logOut = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">
          {username} 👋
        </span>
      </h1>

      <button
        onClick={logOut}
        className="bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium hover:bg-red-600 cursor-pointer active:scale-95"
      >
        Log Out
      </button>
    </div>
  );
};

export default memo(Header);
