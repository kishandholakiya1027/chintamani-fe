import { FC, useEffect, useState } from "react";
import K1 from "../../public/assests/Images/k1.png";
import { Button } from "./ui/button";
import useApi from "@/hooks/useApi";
import { apiPath } from "@/lib/api-path";
import { useDispatch } from "react-redux";
import { setCategory, setFilterProduct } from "@/redux/reducer/category";
import { useNavigate } from "react-router-dom";
import ProductList from "./common/ProductList";

const NewArrivals: FC = () => {
	const [latestProducts, setLatestProducts] = useState([]);
	const { apiAction } = useApi();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	// const { user, token } = useSelector((state: { auth: any }) => state.auth);
	// const {} = useSelector((state: { auth: any }) => state?.auth);

	useEffect(() => {
		getLatestProduct();
	}, []);

	const getLatestProduct = async () => {
		const data = await apiAction({
			method: "get",
			url: `${apiPath?.categories?.product}?sort=3`,
		});
		setLatestProducts(data?.data?.product);
	};

	const showMore = async () => {
		dispatch(setCategory([{ path: "Shop", name: "Shop" }]));
		dispatch(setFilterProduct({ sort: 3 }));
		navigate("/product-category");
	};

	return (
		<section className="w-full">
			<div className="flex flex-col items-center py-10 md:py-16 px-5 sm:container sm:mx-auto">
				<div className="pb-8 flex w-full flex-row items-center justify-center flex-wrap">
					<div className="w-full text-center flex flex-col items-center">
						<h1 className="font-poppins text-[#211c50] text-3xl md:text-4xl font-bold mb-4">
							New Arrivals
						</h1>
						<img src={K1} alt="k1" className="w-24 md:w-32" />
					</div>
				</div>
				<div className="mb-10 w-full">
					<h1 className="font-poppins font-semibold text-black text-xl md:text-2xl text-center mb-2 pb-6">
						Shop
					</h1>
					<div>
						<ProductList
							products={latestProducts?.slice(0, 4)}
							fetchProducts={getLatestProduct}
						/>
					</div>
				</div>
				<div className="flex items-center justify-center text-sm md:text-base font-medium font-poppins">
					<Button
						onClick={() => showMore()}
						variant="outline"
						className="border border-[#211c50] py-2 px-6 hover:text-white hover:bg-[#211c50]">
						View All Products
					</Button>
				</div>
			</div>
		</section>
	);
};

export default NewArrivals;
