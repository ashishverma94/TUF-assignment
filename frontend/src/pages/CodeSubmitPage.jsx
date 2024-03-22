import axios from "axios";
import { BACKEND_URL } from "../url";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { languages, lang_id } from "../static/data";

const CodeSubmitPage = () => {
  const navigate = useNavigate();
  const [lang, setLang] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [stdin, setStdin] = useState("");

  const RAPID_API_KEY = "a83a175960mshbd6609b5a9cd471p16fc1bjsn158b783543ae" ;

  async function findOutput ( code, language_id, stdin ) {
    const submissionResponse = await axios.post(
      "https://judge0-ce.p.rapidapi.com/submissions",
      {
        source_code: code,
        language_id: language_id,
        stdin: stdin || "",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
          "x-rapidapi-key": RAPID_API_KEY,
        },
      }
    );

    const submissionToken = submissionResponse.data.token;

    const resultResponse = await axios.get(
      `https://judge0-ce.p.rapidapi.com/submissions/${submissionToken}`,
      {
        headers: {
          "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
          "x-rapidapi-key": RAPID_API_KEY,
        },
      }
    );

    return resultResponse.data.stdout;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const language_id = lang_id[lang];
    const output = await findOutput(code, language_id, stdin);
    const data = {
      name,
      code,
      output,
      input: stdin,
      language_id,
    };

    axios
      .post(`${BACKEND_URL}/api/v1/code/runcode`, data)
      .then((response) => {
        console.log("Response:", response.data);
        toast.success("Code Submitted Successfully!");
        navigate("/all-codes");
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
                cols={30}
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
