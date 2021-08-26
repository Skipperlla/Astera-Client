import { useRouter } from "next/router";
import Link from "next/link";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import Image from "next/image";
import Logo from "../../public/astera-logo.webp";
import SidebarItems from "../../config/Sidebar.json";
import { ISideBar } from "types/events";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
const Sidebar = ({ isSidebarOpen, openSideBar }: ISideBar) => {
  const router = useRouter();
  return (
    <>
      {/* Sidebar Overlay */}
      <div
        suppressHydrationWarning
        onClick={openSideBar}
        className={`fixed inset-0 z-20 block   bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white dark:bg-gray-900  lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
      >
        <div className="py-4 text-gray-500 dark:text-gray-400">
          <div className="px-6 py-3">
            <Image src={Logo} alt="Logo" />
          </div>
          <ul>
            {SidebarItems.Items.map((ListItems: any, index) => {
              return (
                <li className="relative px-6 py-3" key={index}>
                  {router.pathname === ListItems.target && (
                    <span
                      className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                      aria-hidden="true"
                    />
                  )}
                  <Link href={ListItems.target}>
                    <a
                      className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${
                        router.pathname == ListItems.target &&
                        "text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                      }`}
                      onClick={openSideBar}
                    >
                      <FontAwesomeIcon
                        icon={["fas", ListItems.svg] as IconProp}
                        className="w-5 h-5"
                      />
                      <span className="ml-4">{ListItems.title}</span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
