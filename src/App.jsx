import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepages, DetailPage } from "./pages/PagesComponents";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepages />} />
          <Route path="/detail/:movieId" element={<DetailPage />} />
        </Routes>
      </Router>
    </>
  );
}
