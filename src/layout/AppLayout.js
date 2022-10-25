import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="mt-32 sm:mt-24">{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
