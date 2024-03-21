import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { languages, lang_id } from "../static/data";
import axios from "axios";

const CodeSubmitPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [stdin, setStdin] = useState("");
  const [lang, setLang] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      code: code,
      input: stdin,
      language_id: lang_id[lang],
    };

    axios
      .post("http://localhost:3000/api/v1/user/runcode", data)
      .then((response) => {
        console.log("Response:", response.data);
        toast.success("Code Submitted Successfully!");
        navigate("/all-users");
      })
      .catch((error) => {
        toast.error("Something went wrong !");
      });
  };

  return (
    <div className="w-full h-screen items-center flex flex-col">
      <div className="w-full px-[20px] flex items-center justify-between h-[70px] bg-[#8ca5f3]">
        <h1 className="text-[20px] font-[600] text-[#161617]">
          Make your submission
        </h1>
      </div>
      <div className="h-[80vh] w-[80%] 800px:w-[50%] flex items-center justify-center bg-[white] shadow mt-5 mb-5 rounded-[4px] p-3 ">
        <form className=" w-[60%]" onSubmit={handleSubmit}>
          <br />
          <div>
            <label className="pb-2">
              Name <span className="text-red-500">*</span>
              <input
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm"
                type="text"
                name="name"
                value={name}
                placeholder="Enter your event product name..."
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <br />

          <div>
            <label className="pb-2">
              Language <span className="text-red-500">*</span>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="w-full mt-2 border h-[35px] rounded-[5px]"
              >
                <option value="Choose a category">Choose a Language</option>
                {languages &&
                  languages.map((i) => (
                    <option key={i.language_id} value={i.title}>
                      {i.title}
                    </option>
                  ))}
              </select>
            </label>
          </div>
          <br />

          <div>
            <label className="pb-2">
              Source Code <span className="text-red-500">*</span>
              <textarea
                cols="30"
                rows="8"
                required
                type="text"
                name="description"
                value={code}
                placeholder="Enter your event product description..."
                onChange={(e) => setCode(e.target.value)}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm"
              ></textarea>
            </label>
          </div>
          <br />

          <div>
            <label className="pb-2">
              Standard Input (STDIN) 
              <textarea
                cols= {30}
                rows={8}
                required
                type="text"
                name="description"
                value={stdin}
                placeholder="Enter your event product description..."
                onChange={(e) => setStdin(e.target.value)}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm"
              ></textarea>
            </label>
          </div>
          <br />

          <div>
            <button
              onClick={handleSubmit}
              className="mt-2 cursor-pointer hover:bg-red-600 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm"
            >
              Submit Code
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CodeSubmitPage;
