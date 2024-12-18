"use client"

import { ThemeProvider } from 'next-themes'
import React from 'react'

interface DarkThemeProviderProps {
    children: React.ReactNode;
}
const DarkThemeProvider = ({ children }: DarkThemeProviderProps) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default DarkThemeProvider