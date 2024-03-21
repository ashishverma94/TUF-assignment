import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllCodesPage, CodeSubmitPage } from "./pages/index.js";

import "react-toastify/dist/ReactToastify.css";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CodeSubmitPage />} />
          <Route path="/all-codes" element={<AllCodesPage />} />
        </Routes>

        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition:Bounce
        />
      </BrowserRouter>
    </>
  );
}

export default App;
