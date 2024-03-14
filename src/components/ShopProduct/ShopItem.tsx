import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RoundedDiamond from "/assests/Images/roundedDiamon.png";
import MultiRangeSlider from "multi-range-slider-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import api from "@/services/api";
import { apiPath } from "@/lib/api-path";
import { breadCrumbType, diamondProperty } from "@/lib/interfaces/category";
import ReactPaginate from "react-paginate";

const ShopItem: FC = () => {
  // const [ setMinValue] = useState(0);
  // const [ setMaxValue] = useState(0);
  // const [ setMinValue2] = useState(0);
  // const [ setMaxValue2] = useState(0);
  const [filter, setFilter] = useState<any>({});
  const [products, setProducts] = useState([]);
  const [colors, setColors] = useState([]);
  const [cuts, setCuts] = useState([]);
  const [clarities, setClarities] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [limit] = useState(10);
  const [currentPage] = useState(1);

  const { category } = useSelector((state: any) => state?.category)

  const fetchProducts = async (id: string, name: string) => {
    const data = await api({ method: "get", url: `${apiPath?.categories?.product}?${name?.toLowerCase()}=${id}` })
    setProducts(data?.data?.product)
    setTotalRecords(data?.data?.total)
  }

  useEffect(() => {
    getColors()
    getCuts()
    getClarity()
  }, [])

  const getColors = async () => {
    const data = await api({ method: "get", url: `${apiPath?.color?.all}` })
    setColors(data?.data?.Colordata)
  }
  const getCuts = async () => {
    const data = await api({ method: "get", url: `${apiPath?.cuts?.all}` })
    setCuts(data?.data?.Cutdata)
  }
  const getClarity = async () => {
    const data = await api({ method: "get", url: `${apiPath?.clarity?.all}` })
    setClarities(data?.data?.Claritydata)
  }

  useEffect(() => {
    if (category?.length) {
      let currCategory = category?.[category?.length - 1]
      setFilter({ [`${currCategory?.name?.toLowerCase()}`]: currCategory?.id })
      fetchProducts(currCategory?.id, currCategory?.name)
    }
  }, [category])

  const submitHandler = async (item: breadCrumbType) => {

    fetchProducts(item?.id, item?.name)

  }
  return (
    <>
      <section className="w-full">
        <div className="lg:flex md:flex block flex-col items-start">
          <div className="lg:flex md:flex block flex-wrap w-full items-stretch justify-center">
            <div className="lg:flex md:flex block flex-nowrap flex-col items-start">
              <div className="p-[20px]">
                <div className="px-0 py-[75px] flex w-full flex-row items-stretch flex-wrap border-b-[1px]">
                  <button className="text-sm font-poppins text-[#767676] font-semibold mr-1">
                    <Link to={"/"}>Home</Link>
                  </button>
                  {category?.map((item: breadCrumbType) => {
                    return (
                      <>
                        <span className="text-sm text-[#767676]">/</span>
                        <button className="text-sm font-poppins text-[#767676] font-normal mr-1" onClick={() => submitHandler(item)}>
                          {/* <Link to={category?.path1 ? "/" : ""}> */}
                          {item?.path}

                          {/* </Link> */}
                        </button>
                      </>
                    )
                  })}


                  {category?.path1 ?
                    <>
                      <span className="text-sm text-[#767676]">/</span>{"  "}
                      <button className="text-sm font-poppins text-[#767676] font-normal mr-1">
                        <Link to={category?.path2 ? "/" : ""}>
                          {category?.path1}

                        </Link>
                      </button>
                    </> : null}
                  {category?.path2 ?
                    <>
                      <span className="text-sm text-[#767676]">/</span>
                      <button className="text-sm font-poppins text-[#767676] font-normal mr-1">
                        <Link to={category?.path3 ? "/" : ""}>
                          {category?.path2}

                        </Link>
                      </button>
                    </> : null}
                  {/* <span className="text-sm text-[#767676]">/</span>
                  <button className="text-sm font-poppins text-[#767676] font-normal">
                    Shop
                  </button> */}
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
                      onInput={() => {
                        // setMinValue(e.minValue);
                        // setMaxValue(e.maxValue);
                      }}
                      onChange={() => {
                        // setMinValue2(e.minValue);
                        // setMaxValue2(e.maxValue);
                      }}
                    />
                  </div>
                </div>
                <div className="py-[15px] border-t-[1px] border-b-[1px] border-[#eee]">
                  <div>
                    <div className="mt-[20px] text-left text-[16px] text-[#000] font-poppins font-medium uppercasemb mb-[15px]">
                      Cart
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
                <div className="py-[15px] border-b-[1px] border-[#eee]">
                  <div>
                    <div className="mt-[20px] text-left text-[16px] text-[#000] font-poppins font-medium uppercasemb mb-[15px]">
                      CLARITY
                    </div>
                    <div className="grid grid-cols-3 gap-[5px]">
                      {clarities?.map((clarity: diamondProperty) => {
                        const extractedString = clarity?.name?.substring(0, 5);
                        return <Button
                          onClick={() => setFilter({ ...filter, Clarity: [...filter?.Clarity || [], clarity?.id] })}
                          variant={"outline"}
                          className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] w-[97px] py-[8px] px-[16px]"
                        >
                          {extractedString}
                        </Button>
                      })}
                    </div>
                    {/* <div className="flex gap-[5px] mt-[10px]">
                      <Button
                        variant={"outline"}
                        className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] w-[97px] py-[8px] px-[16px]"
                      >
                        VS1
                      </Button>
                      <Button
                        variant={"outline"}
                        className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] py-[8px] px-[16px] w-[97px]"
                      >
                        VS2
                      </Button>
                      <Button
                        variant={"outline"}
                        className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] py-[8px] px-[16px] w-[97px]"
                      >
                        VVS1
                      </Button>
                    </div>
                    <div className="flex gap-[5px] mt-[10px]">
                      <Button
                        variant={"outline"}
                        className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] w-[97px] py-[8px] px-[16px]"
                      >
                        VVS2
                      </Button>
                    </div> */}
                  </div>
                </div>
                <div className="py-[15px] border-b-[1px] border-[#eee]">
                  <div>
                    <div className="mt-[20px] text-left text-[16px] text-[#000] font-poppins font-medium uppercasemb mb-[15px]">
                      CUT
                    </div>
                    <div className="grid grid-cols-3 gap-[5px]">
                      {cuts?.map((cut: diamondProperty) => {
                        const extractedString = cut?.name?.substring(0, 5);
                        return <Button
                          onClick={() => setFilter({ ...filter, Cuts: [...filter?.Cuts || [], cut?.id] })}
                          variant={"outline"}
                          className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] w-[97px] py-[8px] px-[16px]"
                        >
                          {extractedString}
                        </Button>
                      })}
                    </div>
                  </div>
                </div>
                <div className="py-[15px] border-b-[1px] border-[#eee]">
                  <div>
                    <div className="mt-[20px] text-left text-[16px] text-[#000] font-poppins font-medium uppercasemb mb-[15px]">
                      COLOR
                    </div>
                    <div className="grid grid-cols-4 gap-[5px]">
                      {colors?.map((color: diamondProperty) => {
                        const extractedString = color?.name?.substring(0, 5);
                        return <Button
                          variant={"outline"}
                          className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] w-[58px] py-[8px] px-[16px]"
                        >
                          {extractedString}
                        </Button>
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container w-full">
          <div className="w-full sm:mb-0 mb-3">
            <div className="mt-[48px] sm:flex"></div>
            <div className="w-full">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="font-poppins font-semibold text-[#000] text-2xl mb-2">
                    Shop
                  </h1>
                  <span className="text-xs font-poppins">
                    showing {limit * currentPage - 9}-{limit * currentPage < totalRecords ? limit * currentPage : totalRecords} of {totalRecords} results
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
                <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-0 list-none clear-both after:table flex items-center flex-wrap gap-[3.5rem] cursor-pointer mb-[75px]">
                  {
                    products?.map((product: any) => {
                      return <li className="float-left relative ml-0 bg-[#f1f1f1] rounded-[20px]">
                        <div className="flex text-center items-center flex-col relative rounded-t-lg overflow-hidden p-0 h-full decoration-none text-[#211c50] font-semibold">
                          <img
                            src={RoundedDiamond}
                            alt="RoundedDiamond"
                            className="w-full block shadow-none  h-[250px]"
                          />
                        </div>
                        <div className="my-3 ml-3 border-b-[1px]">
                          <div className="text-[16px] font-bold text-[#211c50]">
                            {product?.title}
                          </div>
                          <div className="text-yellow-800">${product?.price}</div>
                        </div>
                        <div className="mb-3 mx-3 flex items-center justify-between">
                          <FontAwesomeIcon icon={faHeart} />
                          <button>add to cart</button>
                        </div>
                      </li>
                    })
                  }
                  {/* <li className="max-w-full sm:max-w-[20%] float-left relative ml-0 bg-[#f1f1f1] rounded-[20px]">
                    <div className="flex text-center items-center flex-col relative rounded-t-lg overflow-hidden p-0 h-full decoration-none text-[#211c50] font-semibold">
                      <img
                        src={Yellow}
                        alt="Yellow"
                        className="w-[250px] block shadow-none  h-[250px]"
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
                        className="w-full block shadow-none  h-[250px]"
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
                        src={WhiteDiamond}
                        alt="WhiteDiamond"
                        className="w-full block shadow-none  h-[250px]"
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
                        src={Arrive}
                        alt="Arrive"
                        className="w-full block shadow-none  h-[250px]"
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
                        src={Arrive}
                        alt="Arrive"
                        className="w-full block shadow-none  h-[250px]"
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
                        src={Arrive}
                        alt="Arrive"
                        className="w-full block shadow-none  h-[250px]"
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
                        src={Arrive}
                        alt="Arrive"
                        className="w-full block shadow-none  h-[250px]"
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
                  </li> */}
                </ul>
                <nav
                  aria-label="Page navigation"
                  className="flex justify-center items-center mb-[75px]"
                >
                  <ul className="flex items-center -space-x-px h-8 text-sm">
                    <ReactPaginate
                      previousLabel={"<"}
                      nextLabel={">"}
                      breakLabel={"..."}
                      breakClassName={"break-me"}
                      pageCount={Math.ceil(totalRecords / limit)}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={4}
                      onPageChange={(val) => {
                        setFilter({ ...filter, page: val?.selected + 1 })
                      }}
                      containerClassName={"pagination"}
                      activeClassName={"active"}
                    // forcePage={offset - 1}
                    />

                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopItem;
