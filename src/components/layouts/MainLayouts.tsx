import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import ScrollToTop from "../scrolltotop/ScrollToTop";

export default function MainLayouts() {
  return (
    <>
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}
