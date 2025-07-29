import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function MainLayouts() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}
