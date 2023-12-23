import { NavLink } from "react-router-dom";
import Header from "./header/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <NavLink to="/dashboard">Dashboard</NavLink>
    </div>
  );
};

export default HomePage;
