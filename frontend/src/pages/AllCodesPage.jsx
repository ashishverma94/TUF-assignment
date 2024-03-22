import CodeRow from "../components/CodeRow";
import { useDispatch, useSelector } from "react-redux";
import { loadCodes } from "../redux/actions/code";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllCodesPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showCode, setShowCode] = useState(false);
  const [mycode, setMyCode] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [myOutput, setMyOutput] = useState("");

  useEffect(() => {
    dispatch(loadCodes());
  }, [dispatch]);

  const { Codes } = useSelector((state) => state.code);
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="w-[100%] px-[20px] flex items-center justify-between h-[70px] bg-[#8ca5f3]">
        <h1 className="text-[20px] font-[600] text-[#161617]">
          Details of all Submissions
        </h1>
        <div
          onClick={() => navigate("/")}
          className="bg-[#f27575] px-3 py-2 rounded-lg font-[600] hover:bg-[#f52121] cursor-pointer"
        >
          Go Back
        </div>
      </div>
      <div className="md:w-[90%] overflow-y-scroll flex flex-col items-center m-[20px]  border-[2px] border-[#5b585b] h-[82vh] ">
        <div className=" bg-[#545252] text-white flex  h-[40px] w-full">
          <div className=" border flex items-center justify-center w-[10%] h-[40px]">
            Username
          </div>
          <div className=" border flex items-center justify-center w-[12%] h-[40px]">
            Timestamp
          </div>
          <div className=" border flex items-center justify-center w-[9%] h-[40px]">
            Language
          </div>
          <div className=" border flex items-center justify-center w-[49%] h-[40px]">
            Source Code
          </div>
          <div className=" border flex items-center justify-center w-[10%] h-[40px]">
            Input
          </div>
          <div className=" border flex items-center justify-center w-[10%] h-[40px]">
            Output
          </div>
        </div>

        {Codes &&
          Codes.map((i, index) => {
            return (
              <CodeRow
                key={index}
                name={i.name}
                code={i.code}
                input={i.input}
                time={i.createdAt}
                lang={i.language_id}
                output={i.output}
                setShowCode={setShowCode}
                mycode={mycode}
                setMyCode={setMyCode}
                setShowOutput={setShowOutput}
                myOutput={myOutput}
                setMyOutput={setMyOutput}
              />
            );
          })}
      </div>

      {showCode && (
        <div className="bg-[#84808060] w-full h-screen absolute flex items-center justify-center">
          <div className="md:h-[60%] bg-white md:w-[56%] w-[70%] h-[80%] overflow-x-scroll overflow-y-scroll rounded-[5px] border-[black] border-[2px]">
            <div className=" w-full  flex justify-end pr-4 pt-4">
              <div
                className="bg-[red] cursor-pointer text-white w-[20px] h-[20px] flex justify-center items-center rounded-[50%]"
                onClick={() => setShowCode(false)}
              >
                X
              </div>
            </div>
            <div className="p-5">{mycode}</div>
          </div>
        </div>
      )}

      {showOutput && (
        <div className="bg-[#84808060] w-full h-screen absolute flex items-center justify-center">
          <div className="md:h-[50%] bg-white md:w-[46%] w-[60%] h-[70%] overflow-x-scroll overflow-y-scroll rounded-[5px] border-[black] border-[2px]">
            <div className=" w-full  flex justify-end pr-4 pt-4">
              <div
                className="bg-[red] cursor-pointer text-white w-[20px] h-[20px] flex justify-center items-center rounded-[50%]"
                onClick={() => setShowOutput(false)}
              >
                X
              </div>
            </div>
            <div className="p-5">{myOutput}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllCodesPage;
