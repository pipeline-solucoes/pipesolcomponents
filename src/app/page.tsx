"use client";

import { themePS } from "@/index";
import { ThemeProvider } from "styled-components";

export default function Home() {
  return (
    <ThemeProvider theme={themePS}>
      <p>teste</p>
    </ThemeProvider>    
  );
}
