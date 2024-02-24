import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <div className="grow min-h-96">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
