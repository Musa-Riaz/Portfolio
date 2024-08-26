const DottedButton = ({children}) => {
    return (
      <button className="rounded-2xl border-2 border-dashed border-[#A53DFF] bg-white px-6 py-3 font-semibold uppercase text-[#A53DFF] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#A53DFF] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
        {children}
      </button>
    );
  };
  
  export default DottedButton;