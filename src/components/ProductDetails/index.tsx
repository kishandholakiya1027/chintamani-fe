import useApi from "@/hooks/useApi";
import { apiPath } from "@/lib/api-path";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BreadCrumb from "../common/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "@/lib/utils";
import { addCartProduct, setOpenCart } from "@/redux/reducer/cart";
import { productType } from "@/lib/interfaces/category";
import TrendingDiamond from "../TrendingDiamond";
import SocialShare from "../social-share";

const ProductDetailsComponent = () => {
	const { apiAction } = useApi();
	const { id } = useParams();
	const {
		cart: { cartProduct },
		auth: { user, token },
	} = useSelector((state: any) => state);
	let cartProductIds = cartProduct?.map(
		(product: any) => product?.product?.id || product?.id
	);

	const [product, setProduct] = useState<productType | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [currentImage, setCurrentImage] = useState<any>("");
	const [currentVideo, setCurrentVideo] = useState<any>("");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		getProduct();
	}, [id]);

	const getProduct = async () => {
		let data = await apiAction({
			method: "get",
			url: `${apiPath?.product?.product}/${id}`,
		});
		if (!data?.data?.error) {
			setProduct(data?.data);
			setCurrentImage(data?.data?.productimage[0]);
		}
	};
	const checkUser = () => {
		if (user?.id) return true;

		showToast("Please login to enhance experience");
		navigate("/login");
	};

	const addToCart = async () => {
		if (cartProductIds?.includes(product?.id)) {
			dispatch(setOpenCart());
		} else {
			if (checkUser()) {
				setIsLoading(true);
				const data = await apiAction({
					method: "post",
					url: `${apiPath?.product?.addToCart}`,
					data: { userid: user?.id, productid: product?.id, quantity: 1 },
					headers: { Authorization: `Bearer ${token}` },
				});
				if (!data?.data?.error) {
					setIsLoading(false);
					dispatch(addCartProduct(data?.data));
					// setCartProducts([...cartProducts||[], id])
				}
			}
		}
	};

	const diamondsDetails = [
		{
			title: "Diamond Size",
			description: product?.diamond_size?.size_desc,
			img: product?.diamond_size?.sizeimages,
		},
		{
			title: "Color",
			description: product?.diamond_color?.color_desc,
			img: product?.diamond_color?.colorimage,
		},
		{
			title: "Clarity",
			description: product?.diamond_clarity?.clarity_desc,
			img: product?.diamond_clarity?.clarityimage,
		},
		{
			title: "Cut",
			description: product?.diamond_cut?.cut_desc,
			img: product?.diamond_cut?.cutimage,
		},
	];

	const diamondetailsArr = [
		{ title: "Shape", description: product?.shape },
		{ title: "Carat", description: product?.carat },
		{ title: "Colour", description: product?.colour },
		{ title: "Clarity", description: product?.clarity },
		{ title: "Cut", description: product?.cut },
		{ title: "Polish", description: product?.polish },
		{ title: "Symmetry", description: product?.symmetry },
		{ title: "Flourescence", description: product?.flourescence },
		{ title: "Measurements", description: product?.measurements },
		{ title: "Cert Number", description: product?.cert_number },
		{ title: "Table", description: product?.table },
		{ title: "Crown Height", description: product?.crown_height },
		{ title: "Pavilian Depth", description: product?.pavilian_depth },
		{ title: "Depth", description: product?.depth },
		{ title: "Crown Angle", description: product?.crown_angle },
		{ title: "Pavilian Angle", description: product?.pavilian_angle },
		{ title: "srno", description: product?.srno },
		{ title: "Location", description: product?.location },
		{ title: "Stock", description: product?.stock },
		{ title: "Stone", description: product?.stone },
		{ title: "Price", description: product?.price },
		{ title: "Rap", description: product?.rap },
		{ title: "Rap Disccount", description: product?.rap_disccount },
		{ title: "Per CT", description: product?.per_ct },
		{ title: "Disccount Price", description: product?.disccount_price },
		{ title: "FlourescenceColor", description: product?.flourescence_Color },
		{ title: "Table Inclusion", description: product?.table_inclusion },
		{ title: "Side Inclusion", description: product?.side_inclusion },
		{ title: "Feather Inclusion", description: product?.feather_inclusion },
		{ title: "Tinge", description: product?.tinge },
		{ title: "Eyeclean", description: product?.eyeclean },
		{ title: "Girdle", description: product?.girdle },
		{ title: "Girdle Con", description: product?.girdle_con },
		{ title: "Girdle Per", description: product?.girdle_per },
		{ title: "Culet", description: product?.culet },
		{ title: "Report", description: product?.report },
		{ title: "Report Date", description: product?.report_date },
		{ title: "Laser Inscription", description: product?.laser_inscription },
		{ title: "Lab", description: product?.lab },
		{ title: "Star Length", description: product?.star_length },
		{ title: "Lower", description: product?.lower },
		{
			title: "Disccount Percentage",
			description: product?.disccount_percentage,
		},
		{ title: "Diamond Size", description: product?.diamond_size?.size },
	];

	return (
		<div className="flex flex-col">
			<span className="self-center flex w-full container flex-col mt-24 max-md:max-w-full max-md:mt-10">
				<div className="justify-center text-neutral-500 text-base font-semibold leading-6 self-center max-md:max-w-full">
					<BreadCrumb submitHandler={() => navigate("/product-category")} />
				</div>
				<div className="flex flex-col gap-8 md:flex-row">
					<div className="lg:w-[500px] md:w-[500px] sm:w-[500px] w-full">
						<div className="mt-8 self-start lg:ml-2.5 md:ml-2.5 ml-0 max-md:mt-4">
							<div className="border relative border-[#211c50] rounded-md overflow-hidden lg:w-[500px] md:w-[500px] sm:w-[500px] w-full">
								{product?.disccount_price && (
									<div className="w-[100px] h-[100px]  absolute top-0 -left-[20px]">
										<span className="absolute w-[175px] bg-[#211c50] h-[86px] -left-[36px] -top-[12px] -rotate-45 flex justify-center items-center text-center text-white text-base">
											Sale
										</span>
									</div>
								)}
								{currentVideo ? (
									currentVideo.endsWith(".mp4") ? (
										<video
											controls
											width="80"
											height="80"
											className="aspect-square lg:h-[500px] md:h-[500px] h-[300px] w-full shadow-sm overflow-hidden max-w-full  self-end">
											<source src={currentVideo} type="video/mp4" />
										</video>
									) : (
										<iframe
											title="Embedded Content"
											src={currentVideo}
											className="aspect-square lg:h-[500px] md:h-[500px] h-[300px] w-full shadow-sm overflow-hidden max-w-full  self-end"
										/>
									)
								) : (
									<img
										loading="lazy"
										src={currentImage || ""}
										className="aspect-square lg:h-[500px] md:h-[500px] h-[300px] w-full shadow-sm overflow-hidden max-w-full  self-end"
									/>
								)}
							</div>
							<div className="my-4 flex gap-4 overflow-auto max-w-full">
								{product?.productimage &&
									product?.productimage?.map((image: string, index: number) => {
										return (
											<div
												key={index}
												className="border border-[#211c50] w-[80px] rounded-md  overflow-hidden cursor-pointer"
												onClick={() => {
													setCurrentVideo("");
													setCurrentImage(image);
												}}>
												<img
													loading="lazy"
													src={image}
													className="aspect-square object-fill object-center w-[80px] h-[80px] shadow-sm overflow-hidden max-w-full self-end"
												/>
											</div>
										);
									})}
								{product?.productvideo && (
									<div
										className="border border-[#211c50] w-[80px] rounded-md overflow-hidden cursor-pointer relative"
										onClick={() => {
											setCurrentImage("");
											setCurrentVideo(product?.productvideo);
										}}>
										{product?.productvideo.endsWith(".mp4") ? (
											<video
												controls
												width="80"
												height="80"
												className="aspect-square object-fill object-center w-[80px] h-[80px] shadow-sm overflow-hidden max-w-full self-end">
												<source src={product?.productvideo} type="video/mp4" />
											</video>
										) : (
											<>
												<iframe
													title="Embedded Content"
													src={product?.productvideo}
													className="aspect-square object-fill object-center w-[80px] h-[80px] shadow-sm overflow-hidden max-w-full self-end"
												/>
												<div
													className="absolute top-0 left-0 w-full h-full"
													onClick={() => {
														setCurrentImage("");
														setCurrentVideo(product?.productvideo);
													}}></div>
											</>
										)}
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="flex flex-col">
						<div className="text-neutral-700start lg:ml-2.5 md:ml-2.5 ml-0 lg:text-[25px] md:text-[25px] text-[23px] font-bold lg:leading-10 md:leading-10 leading-8 self-start lg:mt-10 md:mt-10 mt-0">
							{product?.maintitle}
						</div>
						<div className="flex max-w-fullstart lg:ml-2.5 md:ml-2.5 ml-0 items-stretch justify-between gap-0.5 lg:mt-4 md:mt-4 mt-4 self-start max-md:flex-wrap">
							<div className="text-neutral-700 lg:text-[20px] md:text-[20px] text-xl font-bold lg:leading-[35px] md:leading-[35px] leading-[34px] max-md:max-w-full">
								{product?.title} -
							</div>
						</div>
						<div className=" text-gray-600  mt-4 self-start lg:ml-2.5 md:ml-2.5 ml-0">
							{product?.disccount_price ? (
								<>
									<del>${product?.price}</del>&nbsp;
									<span className="font-semibold text-gray-600 text-xl">
										${product?.disccount_price}
									</span>
								</>
							) : (
								<>
									<span className="font-semibold text-gray-600 text-xl">
										${product?.price}
									</span>
								</>
							)}
						</div>
						<button
							disabled={isLoading}
							onClick={addToCart}
							className="text-white text-center text-base font-bold leading-4 items-stretch border outline-none bg-purple-800 disabled:bg-purple-400  mt-7 px-5 py-3.5 rounded border-solid border-indigo-950 self-start lg:ml-2.5 md:ml-2.5 ml-0">
							{isLoading
								? "Adding to cart"
								: cartProductIds?.includes(product?.id)
								? "Go to cart"
								: "Add to cart"}
						</button>
						{product?.diamond_certificate && (
							<span
								onClick={() =>
									window.open(product?.diamond_certificate, "_blank")
								}
								className="text-black text-center text-base font-semibold leading-5 tracking-wider items-stretch border bg-white  mt-8 px-7 py-4 rounded-lg border-solid border-indigo-950 self-start lg:ml-2.5 md:ml-2.5 ml-0 max-md:px-5 cursor-pointer">
								Get GIA Report
							</span>
						)}

						{product?.customized && (
							<span
								onClick={() => navigate("/contact")}
								className=" text-black text-center text-base font-semibold leading-5 tracking-wider items-stretch border bg-white  mt-2 px-7 py-4 rounded-lg border-solid border-indigo-950 self-start lg:ml-2.5 md:ml-2.5 ml-0 max-md:px-5 cursor-pointer">
								Contact
							</span>
						)}
						<SocialShare />
					</div>
				</div>
				<div className="text-center">
					<div className="text-3xl font-bold mt-8 mb-4">Diamond Details</div>
					<table className="table-auto mx-auto mb-8 border-collapse border border-slate-400 lg:w-[500px] md:w-[500px] w-full">
						<tbody>
							{diamondetailsArr.map(
								(item, index) =>
									item?.description && (
										<tr key={index} className="border border-slate-300">
											<td className="font-bold py-2 px-4 text-start">
												{item.title}
											</td>
											<td className="px-4 text-start">{item.description}</td>
										</tr>
									)
							)}
						</tbody>
					</table>
				</div>
				<span className="flex flex-col">
					{diamondsDetails?.map((item, index) => {
						return (
							item.img &&
							item.description && (
								<div key={index} className="pb-4">
									<div className="justify-center text-neutral-700 lg:text-3xl md:text-3xl text-xl font-bold leading-10 self-stretch w-full max-md:max-w-full">
										{item.title}
									</div>
									{item.description && (
										<div className="justify-center text-neutral-700 text-base leading-7 self-stretch lg:mt-4 md:mt-4 mt-0 max-md:max-w-full">
											{item.description}
										</div>
									)}
									{item.img && (
										<img
											loading="lazy"
											srcSet={item.img}
											className="aspect-[0.96] object-contain object-center w-full h-[182px] overflow-hidden mt-1 self-center mx-auto"
										/>
									)}
								</div>
							)
						);
					})}
				</span>
				<TrendingDiamond product={product} />
				<div className="text-neutral-700 text-2xl font-bold leading-10 mt-20 max-md:mt-10 text-center">
					Want Customize Diamonds?
				</div>
				<span
					onClick={() => navigate("/contact")}
					className="justify-center text-white text-center text-base font-semibold leading-6 items-stretch border bg-sky-600 my-3 px-5 py-2 rounded border-solid border-sky-600 self-center cursor-pointer">
					Contact Us
				</span>
			</span>
		</div>
	);
};

export default ProductDetailsComponent;
