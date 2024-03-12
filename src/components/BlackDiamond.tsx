import neklessImg from "/assests/Images/nekless.png";
import { Button } from "./ui/button";
import blackDImg from "/assests/Images/blackD.png";

const BlackDiamond = () => {
  return (
    <section className=" bg-[#f5f5f5]">
      <div className="p-0 flex flex-col items-start max-w-full">
        <div className="py-[40px] flex items-stretch justify-center flex-wrap w-full sm:flex-row flex-col">
          <div className="md:w-[33.33%] w-full p-0 flex text-left items-center justify-center">
            <img src={neklessImg} alt="neklessImg" className="w-[400px]" />
          </div>
          <div className="md:w-[33.33%] w-full  px-[20px] pl-[20px] flex-nowrap text-center flex-col pt-[47px] items-center justify-center">
            <h2 className="w-full text-center text-[#000] font-poppins text-[25px] mb-[40px]">
              BLACK DIAMONDS
            </h2>
            <div className="text-center text-[#000] font-poppins text-[14px] mb-[35px]">
              Black Diamonds From Chintanami Gems. It’s providing a huge
              collection of 100% Natural Loose Black Diamond. Black color stone
              is modern-day trends in the diamond and fashion world. The trend
              for black stone is growing faster worldwide and the momentum just
              picked up in recent years.
            </div>
            <Button
              variant={"secondary"}
              className="mt-[25px] hover:bg-[#211c50] font-poppins text-[17px] font-medium rounded-[10px] py-2 px-[25px] text-[#211c50] bg-[#fff] border-[1px] outline-none hover:text-[#fff] border-[#211c50]"
            >
              Purchase Now
            </Button>
          </div>
          <div className="md:w-[33.33%] w-full py-[20px] flex-col flex text-right px-[0] flex-nowrap items-end  justify-center">
            <img src={blackDImg} alt="blackDImg" className="w-[500px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlackDiamond;
