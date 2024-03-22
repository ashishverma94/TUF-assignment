import { lang_no } from "../static/data";

const CodeRow = ({ name, code, input, time, lang, output, setShowCode, setMyCode, setShowOutput, setMyOutput }) => {
  
  const openCode = () => {
    setShowCode(true)
    setMyCode(code)
  };

  const openOutput = () => {
    setShowOutput(true)
    setMyOutput(output)
  };

  return (
    <div className=" flex  h-[40px] w-full">
      <div className="  border text-[13px] md:text-[16px] flex items-center justify-center w-[10%] h-[40px]">
        {name}
      </div>
      <div className=" border text-[13px] md:text-[16px] flex items-center justify-center w-[12%] h-[40px]">
        {time.slice(0, 10)} {time.slice(11, 16)}
      </div>
      <div className=" border text-[13px] md:text-[16px] flex items-center justify-center w-[9%] h-[40px]">
        {lang_no[lang]}
      </div>
      <div className="pl-5 text-[13px] md:text-[16px] border flex items-center  w-[49%] h-[40px]">
        <div className="w-[90%]">{code.slice(0, 90)}</div>
        <div
          className="w-[10%] text-[10px] bg-[green] text-[white] flex items-center justify-center rounded-[10px] cursor-pointer  "
          onClick={() => openCode()}
        >
          open
        </div>
      </div>
      <div className=" border text-[13px] md:text-[16px] flex items-center justify-center w-[10%] h-[40px]">
        {input}
      </div>
      <div
        onClick={() => openOutput()}
        className=" cursor-pointer  border text-[13px] md:text-[16px] flex items-center justify-center w-[10%] h-[40px]"
      >
        <u>{output}</u>
      </div>
    </div>
  );
};

export default CodeRow;
