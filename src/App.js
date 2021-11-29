import "./App.css";
import { HashRouter,Routes,Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
function App() {
  return (
    <HashRouter>
     <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/signin" element={<SigninPage />} />

     </Routes>
    </HashRouter>
  );
}

export default App;
