import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./admin";
import LoanForm from "./form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/form" element={<LoanForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
