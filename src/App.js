import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./views/login";
import Signup from "./views/signup";
import HomePage from "./views/homepage";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
