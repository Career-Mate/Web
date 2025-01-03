import { Outlet } from "react-router-dom";
import Navbar from "../components/Menu/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
