import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="sticky top-0 w-full">
        <Header />
      </div>
      <div className="grow min-h-96  mb-10 md:mb-28">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
