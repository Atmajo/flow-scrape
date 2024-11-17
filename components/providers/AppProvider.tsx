"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

function AppProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}

export default AppProvider;
