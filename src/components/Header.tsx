import React, { useEffect, useState } from "react";
import Navigationbar from "./Navigationbar";
import { useModeContext } from "@/app/providers/ModeStoreProvider";

interface HeaderProps {
  mode:string;
}
const Header = () => {
  //const { mode, changeMode } = useModeContext((state) => state);

  // const handleMode = async () => {
  // };

  return (
    <header className='darkHeader'>
      <div className="px-10 flex items-center justify-between gap-10 h-full">
        <div>
          <button type="button" className="modeToggleBtn">
            Dark
          </button>
        </div>
        <Navigationbar />
      </div>
    </header>
  );
};

export default Header;
