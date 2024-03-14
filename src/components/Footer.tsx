import { FC } from "react";
import footerLogo from "/assests/Images/LogoFooter.png";
import Payment from "/assests/Images/Payment.png";
import { Link, useNavigate } from "react-router-dom";
import { setCategory } from "@/redux/reducer/category";
import { useDispatch, useSelector } from "react-redux";
import bgImage from "/assests/Images/BgFooter.png";

const Footer: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allCategory = useSelector((state: any) => state?.category?.allCategory);

  const handleRoute = (category: any) => {
    dispatch(setCategory(category));
    navigate("/product-category");
  };

  return (
    <>
      <div className="w-full flex items-center text-center flex-nowrap flex-col bg-[#211c50] p-7">
        <div className="flex items-center md:flex-row flex-col">
          <div className="text-[#fff] font-medium text-[20px] md:mr-[130px] text-center w-full md:mb-0 mb-[10px]">
            Sign in for the latest Offer and deals
          </div>
          <div>
            <div className="relative">
              <p className="m-0 block">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="bg-[#fff] border-none px-[15px] py-[10px] sm:w-[520px] max-[520px] w-full rounded-[4px]"
                />
              </p>
              <p className="m-0 block">
                <input
                  type="submit"
                  value="Join"
                  className="absolute right-0 top-[50%] translate-y-[-50%] translate-x-[0] bg-[#fff] px-[15px] py-[10px] border-l-[1px] border-[#211c50] text-[#211c50] font-medium font-poppins"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer
        className={`relative z-0 after:bg-[#000] after:-z-[1] after:absolute after:top-0 after:left-0 after:opacity-[0.7] after:w-full after:h-full bg-no-repeat w-full bg-cover h-full sm:h-full flex items-center`}
        style={{
          backgroundImage: `url(${bgImage || "/assests/Images/BgFooter.png"})`,
        }}
      >
        <div className="container mx-auto">
          <div className="lg:flex md:block block justify-between mb-6 lg:text-start md:text-center text-center lg:pt-[75px] lg:pb-[40px]">
            <div className="lg:mt-0 md:mt-[116px] mt-[116px] lg:pb-[0] md:pb-[40px] pb-[40px]">
              <Link to={""}>
                <img
                  src={footerLogo}
                  alt="footerLogo"
                  className="w-[150px] md:mx-auto mx-auto"
                />
              </Link>
            </div>
            <div className="sm:mb-0 mb-[10px] text-[#fff] lg:pb-[0] md:pb-[40px] pb-[40px]">
              <div>
                <h3 className="text-xl font-medium mb-4">CUSTOMER SERVICE</h3>
                <ul className="text-[15px] flex flex-col gap-1 font-poppins">
                  <li className="mb-[5px]">
                    <Link to={"tel:+1(647)321-4620"}>+1 (647) 321-4620</Link>
                  </li>
                  <li className="mb-[5px]">
                    <Link to={"tel:+447425380174"}>+44 7425 380174</Link>
                  </li>
                  <li className="mb-[5px]">
                    <Link to={"tel: +919737070030"}>+91 97370 70030</Link>
                  </li>
                  <li className="mb-[5px]">
                    <Link to={"mailto:info@chintamanigems.com"}>
                      info@chintamanigems.com
                    </Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sm:mb-0 mb-[10px] text-[#fff] lg:pb-[0] md:pb-[40px] pb-[40px]">
              {allCategory?.map((category: any) => {
                return (
                  <div>
                    <h3
                      className="text-xl font-medium mb-4"
                      onClick={() =>
                        handleRoute([
                          {
                            path: category?.name,
                            id: category?.id,
                            name: "categoryid",
                          },
                        ])
                      }
                    >
                      {category?.name}
                    </h3>
                    <ul className="text-[15px] flex flex-col gap-1 font-poppins capitalize">
                      {category?.subCategories
                        .filter((subCategory: any) => subCategory.status === 1)
                        .map((subCategory: any) => (
                          <li
                            key={subCategory.id}
                            className="mb-[5px]"
                            onClick={() =>
                              handleRoute([
                                {
                                  path: category?.name,
                                  id: category?.id,
                                  name: "categoryid",
                                },
                                {
                                  description: subCategory?.description,
                                  path: subCategory?.name,
                                  id: subCategory?.id,
                                  name: "subCategoryid",
                                },
                              ])
                            }
                          >
                            <Link to={""}>
                              {subCategory?.name?.toLowerCase()}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                );
              })}
              {/* <ul className="text-[15px] flex flex-col gap-1">
                <li>
                  <Link to={""}>Natural Diamonds</Link>
                </li>
                <li>
                  <Link to={""}>Lab Grown Diamonds</Link>
                </li>
                <li>
                  <Link to={""}>Fancy Diamonds</Link>
                </li>
                <li>
                  <Link to={""}>Maissanite Diamonds</Link>
                </li>
                <li>
                  <Link to={""}>Black Diamonds</Link>
                </li>
              </ul> */}
            </div>
            <div className="text-[#fff] lg:pb-[0] md:pb-[40px] pb-[40px]">
              <h3 className="text-xl font-medium mb-4">Others</h3>
              <ul className="text-[15px] flex flex-col gap-1 font-poppins">
                <li className="mb-[5px]">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="mb-[5px]">
                  <Link to={"/faq"}>FAQ</Link>
                </li>
                <li className="mb-[5px]">
                  <Link to={"/blog"}>Blog</Link>
                </li>
                <li className="mb-[5px]">
                  <Link to={"/contact"}>Contact Us</Link>
                </li>
                <li>
                  <Link to={"/terms-condition"}>Terms Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:flex md:block block text-center flex-wrap items-center justify-between text-[#fff] pb-[75px]">
            <div className="text-[15px] font-poppins font-normal lg:pb-0 md:pb-[40px] pb-[40px]">
              © Copyright {new Date().getFullYear()}. Chintamani Gems. All
              Rights Reserved.
            </div>
            <div className="lg:mx-0 md:mx-auto mx-auto">
              <img
                src={Payment}
                alt="Payment"
                className="w-[300px] lg:mx-0 md:mx-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
