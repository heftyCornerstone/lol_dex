"use client";

import React, { useEffect, useState } from "react";
import Navigationbar from "./Navigationbar";

const Header = () => {
  const [mode, setMode] = useState<boolean>(false);

  const handleMode = async () => {
    setMode((prev) => !prev);
  };

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === null) window.localStorage.setItem("isDarkMode", "false");
    isDarkMode === "false" ? setMode(false) : setMode(true);
  }, []);

  return (
    <header className="lightHeader">
      <div className="px-10 flex items-center justify-between gap-10 h-full">
        <div>
          <button type="button" className="modeToggleBtn">
            {mode ? "Dark" : "Light"}
          </button>
        </div>
        <Navigationbar />
      </div>
    </header>
  );
};

export default Header;
