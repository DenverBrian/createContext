import { useState, useEffect, createContext } from "react";
import { Homepage } from "./pages/Homepage";
import { About } from "./pages/About";
import { Menu } from "./pages/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { User } from "./libs/types";



export const AppContext = createContext<unknown>(" ");
export default function App() {
  const [userName, setUserName] = useState("DenverDev");
  const [loginData, setLoginData] = useState<User | undefined>(undefined);
  return (
    <>
      <AppContext.Provider value={{ userName, setUserName,loginData, setLoginData }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<h1>404 Page Not Found</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </>
  );
}
