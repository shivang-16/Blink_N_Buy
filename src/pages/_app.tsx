import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material";


export default function App({ Component, pageProps }: AppProps) {

  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(244 67 54)",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
   )
}
