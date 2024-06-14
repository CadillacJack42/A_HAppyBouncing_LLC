import "./App.css";
import { Nav } from "./routes/Nav";
import { Home } from "./routes/Home";
import { Admin } from "./routes/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
