import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material";
import { useRef } from "react";
import "../styles/color.css";
import "../styles/font.css";
import "../styles/index.css";
import "../styles/tailwind.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export const server = "http://localhost:3000";

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(244 67 54)",
      },
    },
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
