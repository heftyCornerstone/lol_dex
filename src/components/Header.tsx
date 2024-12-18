import React, { useEffect, useState } from "react";
import Navigationbar from "./Navigationbar";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {

  return (
    <header className="fixed w-screen max-w-screen-2xl h-14 border-b border-black bg-white dark:bg-black dark:border-white">
      <div className="px-10 flex items-center justify-between gap-10 h-full">
        <div>
          <ThemeSwitcher/>
        </div>
        <Navigationbar />
      </div>
    </header>
  );
};

export default Header;
