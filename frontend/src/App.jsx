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
          draggable
          rtl={false}
          closeOnClick
          pauseOnHover
          theme="colored"
          autoClose={4000}
          pauseOnFocusLoss
          transition:Bounce
          newestOnTop={false}
          position="top-right"
          hideProgressBar={false}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
