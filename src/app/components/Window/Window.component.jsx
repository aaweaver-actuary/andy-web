const Window = ({ children }) => {
  return (
    <div className="absolute bg-gradient-to-br from-slate-200 to-slate-500 border-[1px] border-black h-[92vh] w-[99vw] top-[7vh]">
      <div className="absolute bg-gradient-radial from-current via-blue-400 to-current h-[calc(100%-6px)] w-[calc(100%-6px)] top-[3px] left-[3px] opacity-80">
        <div className="absolute border-[1px] border-black h-[100%] w-[100%] bg-slate-200 opacity-90">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Window;
