import React, { useState } from "react";
import { IProps } from "types/events";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children, token }: IProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function openSideBar() {
    setIsSidebarOpen(!isSidebarOpen);
  }
  return (
    <>
      {token ? (
        <div
          suppressHydrationWarning
          className="flex h-screen bg-gray-50 dark:bg-gray-800  transition duration-300 ease-out transform translate-x-0"
        >
          <Sidebar isSidebarOpen={isSidebarOpen} openSideBar={openSideBar} />

          <div className="flex flex-col flex-1 w-full">
            <Navbar openSideBar={openSideBar} />
            <main className="h-full overflow-y-auto flex flex-col justify-between items-center">
              <div className=" px-2 sm:px-6 w-full 	sm:max-w-screen	mb-4">
                {children}
              </div>
              <Footer />
            </main>
          </div>
        </div>
      ) : (
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
          {children}
        </div>
      )}
    </>
  );
};
export default Layout;
