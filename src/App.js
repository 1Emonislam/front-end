import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import BillingDash from "./components/BillingDash.js/BillingDash";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext} from "react";
import { useState } from "react";
export const GlobalContexts = createContext()
function App() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState('');
  const contexts = {
    page, setPage,
    limit, setLimit,
    search, setSearch
  }

  return (
    <div className="App">
      <GlobalContexts.Provider value={contexts}>
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/billing-dash" element={<BillingDash />} />
            <Route path="*" element={<h2>Not Founds</h2>} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </GlobalContexts.Provider>
    </div>
  );
}

export default App;
