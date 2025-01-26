"use client";

import { Button, themePS } from "@/index";
import { ThemeProvider } from "styled-components";

export default function Home() {
  return (
    <ThemeProvider theme={themePS}>
      <Button texto="funcionou..."></Button>
    </ThemeProvider>    
  );
}
