import { lang_no } from "../static/data";

const CodeRow = ({ name, code, input, time, lang, output }) => {
  return (
    <div className=" border-b-2   mt-1 mx-1 overflow-hidden w-full flex">
      <div className="bg-[#f1bfbf] rounded-md p-[3px] m-[2px] w-[20%]  ">
        <div> UserName : {name}</div>
        <div> Language: {lang_no[lang]}</div>
        <div> Timestamp : {time}</div>
      </div>
      <div className="bg-[#d1ed97] rounded-md p-[3px] m-[2px] w-[20%]  ">
        <div> STDIN  {input} </div>
      </div>
      <div className="bg-[#7281e6] rounded-md p-[3px] m-[2px] w-[50%]  ">
        <div>
          <p>{code}</p>
        </div>
      </div>
      <div className="bg-[#c0eedf] rounded-md p-[3px] m-[2px] w-[10%]  ">
        <div>
          <p>Output</p>
          <p>{output}</p>
        </div>
      </div>
    </div>
  );
};

export default CodeRow;
