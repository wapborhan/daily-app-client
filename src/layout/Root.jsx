import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

const Root = () => {
  return (
    <div id="mytask-layout">
      <SideBar />
      <div className="main px-lg-4 px-md-4">
        <Header />
        <div className="body d-flex py-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;
