import { ThemeProvider } from "@mui/material";
import RouterPage from "./router/Router";
import "react-toastify/dist/ReactToastify.css";
import theme from "./mui/theme";
import { UserContextProvider } from "./context/userContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <RouterPage />
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
