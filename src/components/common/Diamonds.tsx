import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import ProductHeader from "./ProductHeader";
import { convertObjectToURL } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import ProductList from "./ProductList";
import { apiPath } from "@/lib/api-path";
import useApi from "@/hooks/useApi";
import Loader from "./Loader";
import { setCategory, setFilterProduct } from "@/redux/reducer/category";

const Diamonds = () => {
	const [totalRecords, setTotalRecords] = useState(0);
	const [limit] = useState(10);
	const [filter, setFilter] = useState<any>({});

	const [products, setProducts] = useState([]);
	const {
		category: { category, filterProduct = {} },
	} = useSelector((state: any) => state);
	const dispatch = useDispatch();
	// const { token, user } = useCheckPermission()
	const { loader, apiAction } = useApi();

	// useEffect(() => {
	//   if (Object.keys(filterProduct)?.length)
	//     setFilter(filterProduct)
	// }, [filterProduct])

	useEffect(() => {
		if (category?.length) {
			window.scrollTo(0, 0);
			let currCategory = category?.[category?.length - 1];
			if (currCategory.path === " FANCY DIAMOND") {
				dispatch(
					setCategory([
						{ path: "Shape" },
						{ path: "ROUND", name: "shape", id: "ROUND" },
					])
				);
			} else {
				if (currCategory?.id)
					setFilter({
						[`${currCategory?.name?.toLowerCase()}`]: currCategory?.id,
						page: 1,
						pageSize: limit,
						...filterProduct,
					});
				else {
					setFilter({ page: 1, pageSize: limit, ...filterProduct });
				}
				// setFilter({ [`${currCategory?.name?.toLowerCase()}`]: currCategory?.id,mincarat:1,maxcarat:100 })
				dispatch(setFilterProduct({}));
			}
		}
	}, [category]);

	useEffect(() => {
		if (Object.keys(filter)?.length) {
			fetchProducts();
		}
	}, [
		filter?.mincarat,
		filter?.maxcarat,
		filter?.maxprice,
		filter?.minprice,
		filter?.Color,
		filter?.Clarity,
		filter?.Cuts,
		filter?.page,
		filter?.pageSize,
		filter,
	]);

	const fetchProducts = async () => {
		let params = convertObjectToURL(filter);
		// const data = await useApi({ method: "get", url: `${apiPath?.categories?.product}?${params}` })
		const data = await apiAction({
			method: "get",
			url: `${apiPath?.categories?.product}?${params}`,
		});
		// const data = await api({ method: "get", url: "product/product?subcategoryid=53eaeb3d-cf32-4ca5-9945-8e1dbd4bdf80&Clarity=['SI2']&Cuts=['IF']" })
		setProducts(data?.data?.product);
		setTotalRecords(data?.data?.total);
	};

	const isJewellery = category
		? !!category.find((item: any) => item.path === "JEWELLERY")
		: false;

	return (
		<section className="w-full">
			<div className="pt-[35px] pb-[20px] flex flex-col items-start px-[20px] container">
				<ProductHeader submitHandler={() => {}} />
				<div className="flex w-full items-stretch justify-center flex-wrap">
					<Sidebar
						setFilter={setFilter}
						isJewellery={isJewellery}
						filter={filter}></Sidebar>
					<div className="pt-0 lg:w-[80%] md:w-[70%] w-[100%] flex flex-col flex-nowrap items-start p-[20px] lg:pl-[20px] md:pl-[20px] sm:pl-0 pl-0 pr-[0]">
						<div className="w-full">
							{/* <Loader />  */}
							{!!products?.length && (
								<p className="py-[8px] text-base font-poppins font-normal text-[#404040] mb-[16px] float-left">
									showing {totalRecords ? filter?.page || 1 : 0}-
									{Math.ceil(totalRecords / limit) ?? 0} of {totalRecords ?? 0}
									results
								</p>
							)}
							<form action="" className="float-right mb-[16px] relative">
								<select
									name="orderby"
									id="orderby"
									value={filter?.sort}
									onChange={(e) => {
										if (!e?.target?.value) {
											delete filter?.sort;
											setFilter({ ...filter });
										} else {
											setFilter({ ...filter, sort: Number(e?.target?.value) });
										}
									}}
									className="cursor-pointer text-xs py-[8px] pl-1 pr-[12px] outline-none text-[#000] border border-[#000]">
									<option value="">Default sorting</option>
									{/* <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option> */}
									<option value={3}>Sort by latest</option>
									<option value={2}>Sort by price: low to high</option>
									<option value={1}>Sort by price: high to low</option>
								</select>
							</form>
							{loader ? (
								<div className="mt-32 flex justify-center items-center">
									<Loader />
								</div>
							) : null}

							{!loader && (
								<ProductList
									products={products}
									fetchProducts={fetchProducts}
									loader={loader}
								/>
							)}

							{!!products?.length && !loader && (
								<nav
									aria-label="Page navigation"
									className="flex justify-center items-center mb-[75px]">
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
												setFilter({ ...filter, page: val.selected + 1 });
											}}
											containerClassName={"pagination"}
											activeClassName={"active"}
											forcePage={filter.page - 1}
										/>
									</ul>
								</nav>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Diamonds;
