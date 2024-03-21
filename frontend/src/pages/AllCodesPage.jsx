import CodeRow from "../components/CodeRow";
import { useDispatch, useSelector } from "react-redux";
import { loadCodes } from "../redux/actions/code";
import { useEffect } from "react";

const AllCodesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCodes());
  }, [dispatch]);

  const { Codes } = useSelector((state) => state.code);
  console.log(Codes);
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="w-[100%] px-[20px] flex items-center justify-between h-[70px] bg-[#8ca5f3]">
        <h1 className="text-[20px] font-[600] text-[#161617]">
          Details of all Submissions
        </h1>
        <button>Go Back</button>
      </div>
      <div className="w-[90%] overflow-y-scroll flex flex-col items-center m-[20px]  border-[2px] border-[#5b585b] h-[82vh] ">
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
              />
            );
          })}
      </div>
    </div>
  );
};

export default AllCodesPage;
