const Loader = ({ colors }: any) => {
  return (
    <div className="relative  bg-white">
      <div className="absolute z-50 right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div
          className={`border-t-transparent border-solid animate-spin  rounded-full ${
            colors ? `${colors}` : "border-[#211c50]"
          } border-[3px] h-10 w-10`}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
