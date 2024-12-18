"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
     const [mounted, setMounted] = useState(false);
     const { theme, setTheme } = useTheme();

     const handleOnSwitch = () =>{
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
     }

    
     useEffect(() => {
       setMounted(true);
     }, []);

     if (!mounted) {
       return null;
     }
  return (
    <button type="button" className="modeToggleBtn" onClick={handleOnSwitch}>
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}

export default ThemeSwitcher