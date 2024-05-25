import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const SharedPage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedPage;
