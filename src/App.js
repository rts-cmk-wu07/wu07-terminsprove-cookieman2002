import { Outlet } from "react-router";
import useCookie from "react-use-cookie";
import { TokenContext } from "./contexts/TokenContext";

function App() {

const [token, setToken] = useCookie("")
  return (
    <TokenContext.Provider value={{token, setToken}}>
    <div className="App">
     <Outlet/>
    </div>
    </TokenContext.Provider>
  );
}

export default App;
