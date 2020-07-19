import React from "react";
import {createMuiTheme, CssBaseline, ThemeProvider} from "@material-ui/core";
import {ThemeBtn} from "./components";
import {useStore} from "./stores/Store";
import {observer} from "mobx-react-lite";

const App = observer(() => {
  const { themeStore } = useStore();
  const { isDarkMode } = themeStore;

  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? "dark" : "light",
    },
  });

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <ThemeBtn />
      </ThemeProvider>
  );
});

export default App;
