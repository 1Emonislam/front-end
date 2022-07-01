import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import BillingDash from "./components/BillingDash.js/BillingDash";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/billing-dash" element={<BillingDash />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
