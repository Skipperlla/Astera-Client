import { motion } from "framer-motion";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useTheme } from "next-themes";
import { ISideBar } from "types/events";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = ({ openSideBar }: ISideBar) => {
  const { theme, setTheme } = useTheme();
  const logout = () => {
    localStorage.removeItem("authUser");
    Cookies.remove("token");
    window.location.replace("/");
  };

  return (
    <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-900 ">
      <Menu
        as="div"
        className={`container flex items-center justify-between md:justify-end h-full  mx-auto text-purple-600 transition-opacity`}
      >
        <button
          className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple "
          onClick={openSideBar}
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {theme === "dark" ? (
            <li className="flex" onClick={() => setTheme("light")}>
              <button
                className="rounded-md focus:outline-none focus:shadow-outline-purple"
                aria-label="Toggle color mode"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
          ) : (
            <li className="flex" onClick={() => setTheme("dark")}>
              <button className="rounded-md focus:outline-none focus:shadow-outline-purple">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </button>
            </li>
          )}

          <li className="relative">
            <Menu.Button className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none flex items-center justify-center">
              <motion.img
                src="https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png"
                className="object-cover w-8 h-8 rounded-full"
              />
            </Menu.Button>{" "}
            <Transition
              as={Fragment}
              enter="transition ease-out duration-25"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-25"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                as="ul"
                className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-transparent dark:text-gray-300 dark:bg-gray-900"
              >
                <li className="flex">
                  <Menu.Item>
                    {({ active }) => (
                      <div className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                        <FontAwesomeIcon icon="user" className="w-4 h-4 mr-3" />
                        <span>
                          {"adi"} &nbsp; {"soyadi"}
                        </span>
                      </div>
                    )}
                  </Menu.Item>
                </li>{" "}
                <li className="flex">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => logout()}
                        className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                      >
                        <svg
                          className="w-4 h-4 mr-3"
                          aria-hidden="true"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        <span>Çıkış</span>
                      </button>
                    )}
                  </Menu.Item>
                </li>
              </Menu.Items>
            </Transition>
          </li>
        </ul>
      </Menu>
    </header>
  );
};

export default Navbar;
