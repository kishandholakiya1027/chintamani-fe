import { FC } from "react";
import KImg from "/assests/Images/k.png";
import { Link, useNavigate } from "react-router-dom";
import { shapeType } from "@/lib/interfaces/category";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "@/redux/reducer/category";

const PrevalentDiamonds: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const shapes = useSelector((state: any) => state?.category?.shape);

  return (
    <section className="w-full bg-cover mt-[25px]">
      <div className="py-[54px] flex flex-col items-start px-5 container">
        <div className="w-full flex flex-nowrap items-center text-center flex-col">
          <h1 className="font-poppins text-[35px] font-bold w-full text-center text-[#211c50]">
            Prevalent Diamonds
          </h1>
          <img src={KImg} alt="KImg" className="max-w-[100%]" />
        </div>
        <div className="mt-[40px] hidden"></div>
        <div className="py-[54px] flex w-full lg:flex-row flex-row items-stretch justify-center flex-wrap gap-4">
          {shapes?.map((shape: shapeType) => {
            return (
              <div
                className="lg:w-[9.5%] md:w-[17.5%] w-[29%] flex flex-col items-center mb-2.5"
                key={shape?.name}
              >
                <Link
                  to={"#"}
                  onClick={() => {
                    dispatch(
                      setCategory([
                        { path: "Shape" },
                        { path: shape?.name, name: "shape", id: shape?.name },
                      ])
                    );
                    navigate("/product-category");
                  }}
                  className="text-center"
                >
                  <img
                    src={shape?.image}
                    alt="shapeImg"
                    className="max-w-full h-[72px] mx-auto"
                  />
                  <h6 className="text-base font-normal pt-2 break-words break-all">
                    {shape?.name}
                  </h6>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PrevalentDiamonds;
