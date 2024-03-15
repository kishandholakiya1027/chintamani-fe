import useApi from "@/hooks/useApi";
import { apiPath } from "@/lib/api-path";
import { fetchCartData, setOpenCart } from "@/redux/reducer/cart";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RemovePopup from "../alert/RemovePopup";
import { useNavigate } from "react-router";
import Loader from "../common/Loader";
import { toast } from "react-toastify";
import { AppDispatch } from "@/redux/store";

const Index = () => {
	const modalRef: any = useRef(null);
	const [ShowCart, setShowCart] = useState(false);
	const {
		cart: { cartProduct, openCart },
		auth: { token, user },
	} = useSelector((state: any) => state);
	const dispatch: AppDispatch = useDispatch();
	const { loader, apiAction } = useApi();
	const [openPopup, setOpenPopup] = useState("");

	const navigate = useNavigate();
	const addToCart = async (id: string, quantity: number) => {
		const data = await apiAction({
			method: "post",
			url: `${apiPath?.product?.updateCart}`,
			data: { userid: user?.id, productid: id, quantity: quantity },
			headers: { Authorization: `Bearer ${token}` },
		});
		if (!data?.data?.error) {
			// dispatch(addQuantity({ id, quantity: quantity || "" }));
			// dispatch(addCartProduct(data?.data))
			// setCartProducts([...cartProducts||[], id])
		}
	};

	const handleProductQuantity = (id: string, quantity: number) => {
		addToCart(id, quantity);
		// dispatch(addQuantity({ id, quantity: quantity || '' }))
	};

	const handleTotalAmount = () => {
		const totalAmount = cartProduct?.reduce((prev: number, products: any) => {
			let product = products?.product || products;
			let qty = products?.quantity;
			return prev + (qty || 1) * (product?.disccount_price || product?.price);
		}, 0);
		return totalAmount;
	};

	const removeFromCart = async () => {
		const data = await apiAction({
			method: "post",
			url: `${apiPath?.product?.removeFromCart}`,
			data: { userid: user?.id, productid: openPopup },
			headers: { Authorization: `Bearer ${token}` },
		});
		if (!data?.data?.error) {
			dispatch(fetchCartData(user?.id))
			// dispatch(addCartProduct(data?.data));
			setOpenPopup("");
		}
		// setCartProducts(cartProducts?.filter((item: string) => item !== id))
	};

	const handleOutsideClick = (e: any) => {
		if (modalRef.current && !modalRef?.current?.contains(e.target)) {
			setShowCart(false);
		}
	};

	useEffect(() => {
		setShowCart(openCart);
	}, [openCart]);

	useEffect(() => {
		if (ShowCart) {
			document.addEventListener("mousedown", handleOutsideClick);
		}
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [ShowCart]);

	useEffect(() => {
		const handleRouteChange = () => {
			setShowCart(false);
		};
		if (ShowCart) {
			document.body.classList.add("modal-open");
			window.addEventListener("popstate", handleRouteChange);
		}
		return () => {
			document.body.classList.remove("modal-open");
			window.removeEventListener("popstate", handleRouteChange);
		};
	}, [ShowCart]);

	return (
		<div className="min:w-[200px] relative ">
			{/* <label htmlFor="drawer-toggle" className="absolute top-0 left-0 inline-block p-4 transition-all duration-500 bg-indigo-500 rounded-lg peer-checked:rotate-180 peer-checked:left-64">
        <div className="w-6 h-1 mb-3 -rotate-45 bg-white rounded-lg">hello</div>
        <div className="w-6 h-1 rotate-45 bg-white rounded-lg"></div>
  
    
    </label> */}
			{openPopup ? (
				<RemovePopup
					open={openPopup}
					setOpen={(val: string) => setOpenPopup(val)}
					onSubmit={removeFromCart}
				/>
			) : null}
			{ShowCart && (
				<div
					className="fixed top-0 right-0 z-20 h-full shadow-lg bg-white max-w-[400px] z-[99999]"
					ref={modalRef}>
					<div
						className="flex mt-4 mx-5 items-end justify-start w-fit"
						onClick={() => dispatch(setOpenCart())}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="3"
							stroke="currentColor"
							className="h-7 w-7 cursor-pointer duration-150 hover:text-red-500">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</div>
				</div>
			)}
			{openPopup ? (
				<RemovePopup
					open={openPopup}
					setOpen={(val: string) => setOpenPopup(val)}
					onSubmit={removeFromCart}
				/>
			) : null}
			{ShowCart ? (
				<div
					className="fixed top-0 right-0 z-20 h-full shadow-lg bg-white lg:w-[400px] md:w-[400px] sm:w-[400px] w-full z-[99999]"
					ref={modalRef}>
					<div
						className="flex mt-4 mx-5 items-end justify-start w-fit"
						onClick={() => dispatch(setOpenCart())}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="3"
							stroke="currentColor"
							className="h-7 w-7 cursor-pointer duration-150 hover:text-red-500">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</div>
					<div className="mx-auto max-w-5xl justify-center px-6 h-[calc(100vh-64px)] md:space-x-6 xl:px-0 overflow-y-auto">
						<div className="px-6 py-4">
							<div className="rounded-lg md:w-full">
								{loader ? (
									<div className="mt-[10px]">
										<Loader />
									</div>
								) : null}
								{cartProduct?.length ? (
									(cartProduct || [])?.map((products: any) => {
										let product = products?.product || products;
										let qty = products?.quantity;
										return (
											<div className="justify-between mb-6 rounded-lg bg-white p-4 shadow-[0px_.125rem_.25rem_0px_rgba(0,0,0,0.075)] overflow-hidden sm:flex sm:justify-start">
												<img
													src={product?.productimage[0]}
													alt="product-image"
													className="w-[100px] h-[100px] rounded-lg border-gray-200"
												/>
												<div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
													<div className="mt-5 sm:mt-0">
														<h2 className="text-lg font-bold text-gray-900">
															{product?.title}
														</h2>
														<p className="text-sm">
															${product?.disccount_price || product?.price}
														</p>
														<div className="flex items-center border-gray-100 justify-start my-2">
															<button
																onClick={() =>
																	handleProductQuantity(product?.id, qty - 1)
																}
																disabled={
																	qty === "undefined" || !qty || qty === 1
																		? true
																		: false
																}
																className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
																-
															</button>
															<input
																className="h-8 w-8 border bg-white text-center text-xs outline-none"
																type="number"
																value={qty?.toString() || ""}
																min="1"
																onChange={(e) =>
																	handleProductQuantity(
																		product?.id,
																		Number(e.target.value ? e.target.value : "")
																	)
																}
															/>
															<button
																onClick={() =>
																	handleProductQuantity(
																		product?.id,
																		Number(qty) + 1
																	)
																}
																className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
																+
															</button>
														</div>
													</div>
													<div className="mt-1 ml-2 flex justify-between sm:space-y-6  sm:block sm:space-x-6">
														<div
															className="flex items-center space-x-4"
															onClick={() => {
																setOpenPopup(product?.id),
																	dispatch(setOpenCart());
															}}>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke-width="1.5"
																stroke="currentColor"
																className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	d="M6 18L18 6M6 6l12 12"
																/>
															</svg>
														</div>
													</div>
												</div>
											</div>
										);
									})
								) : (
									<div className="flex flex-col items-center justify-center my-6">
										<p className="text-[16px]">
											You have no items in your shopping cart
										</p>
										<button
											className="bg-[#e9e6ed] text-[#515151] rounded-[3px] my-6 px-3 py-1 font-bold"
											onClick={() => {
												setShowCart(false);
												navigate("/");
											}}>
											Return to Shop
										</button>
									</div>
								)}
							</div>
							{cartProduct?.length ? (
								<div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-full">
									<div className="mb-2 flex justify-between">
										<p className="text-gray-700">Subtotal</p>
										<p className="text-gray-700">${handleTotalAmount()}</p>
									</div>
									<div className="flex justify-between">
										<p className="text-gray-700">Shipping</p>
										<p className="text-gray-700">Free</p>
									</div>
									<hr className="my-4" />
									<div className="flex justify-between">
										<p className="text-lg font-bold">Total</p>
										<div className="">
											<p className="mb-1 text-lg font-bold">
												${handleTotalAmount()} USD
											</p>
										</div>
									</div>
									<button
										className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
										onClick={() => {
											if (user?.id) {
												navigate("/checkout"), dispatch(setOpenCart());
											} else {
												toast("Please login to enhance experience");
												navigate("/login");
											}
										}}>
										Check out
									</button>
								</div>
							) : null}
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default Index;
