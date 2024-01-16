import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import J1 from "../../../public/assests/Images/j-1.jpg";
import J2 from "../../../public/assests/Images/j-2.jpg";
import J3 from "../../../public/assests/Images/j-3.jpg";
import Crown from "../../../public/assests/Images/crown.png";
import MultiRangeSlider from "multi-range-slider-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {  useSelector } from "react-redux";
import { apiPath } from "@/lib/api-path";
import api from "@/services/api";
// import { setCategory } from "@/redux/reducer/category";

const JewelleryProduct: FC = () => {
  // const [minValue, setMinValue] = useState(0);
  // const [maxValue, setMaxValue] = useState(0);
  // const [minValue2, setMinValue2] = useState(0);
  // const [maxValue2, setMaxValue2] = useState(0);



  // const [filter, setFilter] = useState<any>({});
  // const [products, setProducts] = useState([]);
  // const [colors, setColors] = useState([]);
  // const [cuts, setCuts] = useState([]);
  // const [clarities, setClarities] = useState([]);
  // const [totalRecords, setTotalRecords] = useState(0);

  const { category } = useSelector((state: any) => state?.category)
  
  const fetchProducts = async (id: string, name: string) => {
    const data = await api({ method: "get", url: `${apiPath?.categories?.product}?${name?.toLowerCase()}=${id}` })
    // setTotalRecords(data?.data?.total)
    console.log("🚀 ~ fetchProducts ~ data:", data)
    // setProducts(data?.data?.product)
  }

  // useEffect(() => {
  //   getColors()
  //   getCuts()
  //   getClarity()
  // }, [])

  // const getColors = async () => {
  //   const data = await api({ method: "get", url: `${apiPath?.color?.all}` })
  //   setColors(data?.data?.Colordata)
  // }
  // const getCuts = async () => {
  //   const data = await api({ method: "get", url: `${apiPath?.cuts?.all}` })
  //   setCuts(data?.data?.Cutdata)
  // }
  // const getClarity = async () => {
  //   const data = await api({ method: "get", url: `${apiPath?.clarity?.all}` })
  //   setClarities(data?.data?.Claritydata)
  // }

  useEffect(() => {
    if (category?.length) {
      let currCategory = category?.[category?.length - 1]
      // setFilter({[`${currCategory?.name?.toLowerCase()}`]:currCategory?.id})
      fetchProducts(currCategory?.id, currCategory?.name)

    }
  }, [category])

  // const submitHandler = async (item: breadCrumbType, index: number) => {
  //   dispatch(setCategory(category?.filter((_: any, i: number) => i <= index)))
  //   fetchProducts(item?.id, item?.name)

  // }

  return (
    <section className="w-full">
      <div className="flex flex-col items-start">
        <div className="flex flex-wrap w-full items-stretch justify-center">
          <div className="p-[20px] flex flex-nowrap flex-col items-start">
            <div>
              <div className="px-0 py-[75px] flex w-full flex-row items-stretch flex-wrap border-b-[1px]">
                <button className="text-sm font-poppins text-[#767676] font-semibold mr-1">
                  <Link to={"/"}>Home</Link>
                </button>{" "}
                <span className="text-sm text-[#767676]">/ </span>{" "}
                <button className="text-sm font-poppins text-[#767676] font-normal">
                  Jewellery
                </button>
              </div>
              <div className="py-[15px]  border-t-[1px] border-[#eee]">
                <div>
                  <div className="mt-[20px] text-left text-[16px] text-[#000] font-poppins font-medium uppercasemb mb-[15px]">
                    Price
                  </div>
                  <MultiRangeSlider
                    min={690}
                    max={13060}
                    step={1}
                    subSteps={true}
                    minValue={690}
                    maxValue={13060}
                    // onInput={(e: ChangeResult) => {
                    //   setMinValue(e.minValue);
                    //   setMaxValue(e.maxValue);
                    // }}
                    // onChange={(e: ChangeResult) => {
                    //   setMinValue2(e.minValue);
                    //   setMaxValue2(e.maxValue);
                    // }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container w-full">
        <div className="w-full sm:mb-0 mb-3">
          <div className="mt-[48px] sm:flex"></div>
          <div className="w-full ml-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="font-poppins font-semibold text-[#000] text-2xl mb-2">
                  Shop
                </h1>
                <span className="text-xs font-poppins">
                  showing 1-16 of 187 results
                </span>
              </div>
              <div className="font-arial text-xs text-left cursor-pointer overflow-hidden w-[198px] leading-0 mr-3">
                <select
                  id="countries"
                  className="text-sm rounded-sm block w-full dark:placeholder-gray-400 dark:text-white"
                >
                  <option selected>Deafault sorting</option>
                  <option value={"popularity"}>Sort by popularity</option>
                  <option value={"rating"}>Sort by average rating</option>
                  <option value={"date"}>Sort by latest</option>
                  <option value={"price"}>Sort by price: low to high</option>
                  <option value={"price-desc"}>
                    Sort by price: high to low
                  </option>
                </select>
              </div>
            </div>

            <div className="">
              <ul className="p-0 list-none clear-both after:table flex items-center flex-wrap gap-[3.5rem] cursor-pointer mb-[75px]">
                <li className="max-w-full sm:max-w-[20%] float-left relative ml-0 bg-[#f1f1f1] rounded-[20px]">
                  <div className="flex text-center items-center flex-col relative rounded-t-lg overflow-hidden p-0 h-full decoration-none text-[#211c50] font-semibold">
                    <img
                      src={J1}
                      alt="J1"
                      className="w-full block shadow-none h-[250px]"
                    />
                  </div>
                  <div className="my-3 ml-3 border-b-[1px]">
                    <div className="text-[16px] font-bold text-[#211c50]">
                      Product Name
                    </div>
                    <div className="text-yellow-800">$420.31</div>
                  </div>
                  <div className="mb-3 mx-3 flex items-center justify-between">
                    <FontAwesomeIcon icon={faHeart} />
                    <button>add to cart</button>
                  </div>
                </li>
                <li className="max-w-full sm:max-w-[20%] float-left relative ml-0 bg-[#f1f1f1] rounded-[20px]">
                  <div className="flex text-center items-center flex-col relative rounded-t-lg overflow-hidden p-0 h-full decoration-none text-[#211c50] font-semibold">
                    <img
                      src={J2}
                      alt="J2"
                      className="w-[250px] block shadow-none h-[250px]"
                    />
                  </div>
                  <div className="my-3 ml-3 border-b-[1px]">
                    <div className="text-[16px] font-bold text-[#211c50]">
                      Product Name
                    </div>
                    <div className="text-yellow-800">
                      <del>$440</del> $420.31
                    </div>
                  </div>
                  <div className="mb-3 mx-3 flex items-center justify-between">
                    <FontAwesomeIcon icon={faHeart} />
                    <button>add to cart</button>
                  </div>
                </li>
                <li className="max-w-full sm:max-w-[20%] float-left relative ml-0 bg-[#f1f1f1] rounded-[20px]">
                  <div className="flex text-center items-center flex-col relative rounded-t-lg overflow-hidden p-0 h-full decoration-none text-[#211c50] font-semibold">
                    <img
                      src={Crown}
                      alt="Crown"
                      className="w-full block shadow-none h-[250px]"
                    />
                  </div>
                  <div className="my-3 ml-3 border-b-[1px]">
                    <div className="text-[16px] font-bold text-[#211c50]">
                      Product Name
                    </div>
                    <div className="text-yellow-800">
                      <del>$430</del> $420.31
                    </div>
                  </div>
                  <div className="mb-3 mx-3 flex items-center justify-between">
                    <FontAwesomeIcon icon={faHeart} />
                    <button>add to cart</button>
                  </div>
                </li>
                <li className="max-w-full sm:max-w-[20%] float-left relative ml-0 bg-[#f1f1f1] rounded-[20px]">
                  <div className="flex text-center items-center flex-col relative rounded-t-lg overflow-hidden p-0 h-full decoration-none text-[#211c50] font-semibold">
                    <img
                      src={J3}
                      alt="J3"
                      className="w-full block shadow-none h-[250px]"
                    />
                  </div>
                  <div className="my-3 ml-3 border-b-[1px]">
                    <div className="text-[16px] font-bold text-[#211c50]">
                      Product Name
                    </div>
                    <div className="text-yellow-800">$420.31</div>
                  </div>
                  <div className="mb-3 mx-3 flex items-center justify-between">
                    <FontAwesomeIcon icon={faHeart} />
                    <button>add to cart</button>
                  </div>
                </li>
                <li className="max-w-full sm:max-w-[20%] float-left relative ml-0 bg-[#f1f1f1] rounded-[20px]">
                  <div className="flex text-center items-center flex-col relative rounded-t-lg overflow-hidden p-0 h-full decoration-none text-[#211c50] font-semibold">
                    <img
                      src={J3}
                      alt="J3"
                      className="w-full block shadow-none h-[250px]"
                    />
                  </div>
                  <div className="my-3 ml-3 border-b-[1px]">
                    <div className="text-[16px] font-bold text-[#211c50]">
                      Product Name
                    </div>
                    <div className="text-yellow-800">$420.31</div>
                  </div>
                  <div className="mb-3 mx-3 flex items-center justify-between">
                    <FontAwesomeIcon icon={faHeart} />
                    <button>add to cart</button>
                  </div>
                </li>
                <li className="max-w-full sm:max-w-[20%] float-left relative ml-0 bg-[#f1f1f1] rounded-[20px]">
                  <div className="flex text-center items-center flex-col relative rounded-t-lg overflow-hidden p-0 h-full decoration-none text-[#211c50] font-semibold">
                    <img
                      src={J2}
                      alt="J2"
                      className="w-full block shadow-none h-[250px]"
                    />
                  </div>
                  <div className="my-3 ml-3 border-b-[1px]">
                    <div className="text-[16px] font-bold text-[#211c50]">
                      Product Name
                    </div>
                    <div className="text-yellow-800">$420.31</div>
                  </div>
                  <div className="mb-3 mx-3 flex items-center justify-between">
                    <FontAwesomeIcon icon={faHeart} />
                    <button>add to cart</button>
                  </div>
                </li>
                <li className="max-w-full sm:max-w-[20%] float-left relative ml-0 bg-[#f1f1f1] rounded-[20px]">
                  <div className="flex text-center items-center flex-col relative rounded-t-lg overflow-hidden p-0 h-full decoration-none text-[#211c50] font-semibold">
                    <img
                      src={J1}
                      alt="J1"
                      className="w-full block shadow-none h-[250px]"
                    />
                  </div>
                  <div className="my-3 ml-3 border-b-[1px]">
                    <div className="text-[16px] font-bold text-[#211c50]">
                      Product Name
                    </div>
                    <div className="text-yellow-800">$420.31</div>
                  </div>
                  <div className="mb-3 mx-3 flex items-center justify-between">
                    <FontAwesomeIcon icon={faHeart} />
                    <button>add to cart</button>
                  </div>
                </li>
                <li className="max-w-full sm:max-w-[20%] float-left relative ml-0 bg-[#f1f1f1] rounded-[20px]">
                  <div className="flex text-center items-center flex-col relative rounded-t-lg overflow-hidden p-0 h-full decoration-none text-[#211c50] font-semibold">
                    <img
                      src={J3}
                      alt="J3"
                      className="w-full block shadow-none h-[250px]"
                    />
                  </div>
                  <div className="my-3 ml-3 border-b-[1px]">
                    <div className="text-[16px] font-bold text-[#211c50]">
                      Product Name
                    </div>
                    <div className="text-yellow-800">
                      <del>$450</del> $420.31
                    </div>
                  </div>
                  <div className="mb-3 mx-3 flex items-center justify-between">
                    <FontAwesomeIcon icon={faHeart} />
                    <button>add to cart</button>
                  </div>
                </li>
              </ul>
              <nav
                aria-label="Page navigation"
                className="flex justify-center items-center mb-[75px]"
              >
                <ul className="flex items-center -space-x-px h-8 text-sm">
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="w-2.5 h-2.5 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JewelleryProduct;
