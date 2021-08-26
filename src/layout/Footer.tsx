import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-white dark:bg-gray-900 w-full py-4">
      <div className="px-6 w-full 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg	md:max-w-screen-md	sm:max-w-screen-sm	">
        <span className="font-semibold">
          Copyright © 2021{" "}
          <Link href="https://astera.com.tr/">
            <a style={{ color: "#199ff6" }}>Astera</a>
          </Link>
          .
        </span>{" "}
        Tüm Hakları Saklıdır.
      </div>
    </div>
  );
};

export default Footer;