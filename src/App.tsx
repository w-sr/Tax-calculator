import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import "./i18n/config";
import { renderRoutes } from "./routes";
import { store } from "./stores";
import { theme } from "./styles/themes";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>{renderRoutes()}</BrowserRouter>
      </ThemeProvider>
      <ToastContainer />
    </Provider>
  );
};

export default App;
