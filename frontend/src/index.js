import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Home from "./routes/home";
import Login from "./routes/login";
import Register from "./routes/register";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);