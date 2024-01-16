import RoundedDiamond from "../../../public/assests/Images/roundedDiamon.png";
import { apiPath } from "@/lib/api-path";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useApi from "@/hooks/useApi";
import { productType } from "@/lib/interfaces/category";
import { showToast } from "@/lib/utils";
import {
  addCartProduct,
  addWishLishProduct,
  setOpenCart,
} from "@/redux/reducer/cart";
import { useNavigate } from "react-router-dom";
import { setCategory } from "@/redux/reducer/category";
import { toast } from "react-toastify";

const ProductList = ({ products = []}: any) => {
  const { user, token } = useSelector((state: { auth: any }) => state.auth);
  const { category } = useSelector((state: any) => state?.category);

  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartProducts, setCartProducts] = useState<string[]>([]);
  console.log("cartProducts", cartProducts);
  const [productLoading, setProductLoading] = useState<string[]>([]);

  const { apiAction } = useApi();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.id) {
      fetchCartData();
      fetchWishlistData();
    }
  }, []);

  const checkUser = () => {
    if (user?.id) return true;

    toast("Please login to enhance experience");
    navigate("/login");
  };

  const fetchCartData = async () => {
    const data = await apiAction({
      method: "get",
      url: `${apiPath?.user?.allCart}/${user?.id}`,
      headers: { Authorization: `Bearer ${token}` },
    });
    if (data) {
      setCartProducts(
        data?.data?.products?.map(
          (product: any) => product?.product?.id
        )
      );
    }
  };

  const fetchWishlistData = async () => {
    const data = await apiAction({
      method: "get",
      url: `${apiPath?.user?.allWishlist}/${user?.id}`,
      headers: { Authorization: `Bearer ${token}` },
    });
    if (data)
      setWishlist(
        data?.data?.whishlist_products_id?.map(
          (product: productType) => product?.id
        )
      );
  };

  const addToWishList = async (id: string) => {
    if (checkUser()) {
      const data = await apiAction({
        method: "post",
        url: `${apiPath?.product?.addWishlist}`,
        data: { userid: user?.id, productid: id },
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!data?.data?.error && data) {
        dispatch(addWishLishProduct(data?.data));
        showToast("Added to your wishlist");
        setWishlist([...wishlist, id]);
      }
    }
  };

  const removeFromWishList = async (id: string) => {
    if (checkUser()) {
      const data = await apiAction({
        method: "post",
        url: `${apiPath?.product?.removeWishlist}`,
        data: { userid: user?.id, productid: id },
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!data?.data?.error && data) {
        dispatch(addWishLishProduct(data?.data));
        showToast("Removed to your wishlist");
        setWishlist(wishlist?.filter((item: string) => item !== id));
      }
    }
  };

  const addToCart = async (id: string) => {
    if (checkUser()) {
      try {
        setProductLoading((prevLoading) => [...prevLoading, id]);
        const data = await apiAction({
          method: "post",
          url: `${apiPath?.product?.addToCart}`,
          data: { userid: user?.id, productid: id, quantity: 1 },
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!data?.data?.error) {
          dispatch(addCartProduct(data?.data));
          setCartProducts([...(cartProducts || []), id]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setProductLoading((prevLoading) =>
          prevLoading.filter((productId) => productId !== id)
        );
      }
    }
  };

 

  const setMenu = async (productName: string, productid: string) => {
    dispatch(
      setCategory([...category, { path: productName, name: productName }])
    );
    navigate(`/product/${productid}`);
  };

  return (
    <ul className="p-0 list-none clear-both after:table flex items-center flex-wrap gap-[3.5rem] cursor-pointer mb-[75px]">
      {products?.length ? (
        products?.map((product: productType) => {
          return (
            <li className="max-w-full sm:max-w-[30%] float-left relative ml-0 bg-[#f1f1f1] rounded-[20px]">
              <div onClick={() => setMenu(product?.title||"", product?.id||"")}>
                <div className="flex text-center items-center flex-col relative rounded-t-lg overflow-hidden p-0 h-full decoration-none text-[#211c50] font-semibold">
                  <img
                    src={RoundedDiamond}
                    alt="RoundedDiamond"
                    className=" block shadow-none min-w-[250px]  h-[250px]"
                  />
                </div>
                <div className="my-3 ml-3 border-b-[1px]">
                  <div className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-[16px] font-bold text-[#211c50]">
                    {product?.title}
                  </div>
                  <div className="text-yellow-800">${product?.price}</div>
                </div>
              </div>
              <div className="mb-3 mx-3 flex items-center justify-between">
                {!wishlist?.includes(product?.id||"") ? (
                  <div onClick={() => addToWishList(product?.id||"")}>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.89346 2.35248C3.49195 2.35248 2.35248 3.49359 2.35248 4.90532C2.35248 6.38164 3.20954 7.9168 4.37255 9.33522C5.39396 10.581 6.59464 11.6702 7.50002 12.4778C8.4054 11.6702 9.60608 10.581 10.6275 9.33522C11.7905 7.9168 12.6476 6.38164 12.6476 4.90532C12.6476 3.49359 11.5081 2.35248 10.1066 2.35248C9.27059 2.35248 8.81894 2.64323 8.5397 2.95843C8.27877 3.25295 8.14623 3.58566 8.02501 3.88993C8.00391 3.9429 7.98315 3.99501 7.96211 4.04591C7.88482 4.23294 7.7024 4.35494 7.50002 4.35494C7.29765 4.35494 7.11523 4.23295 7.03793 4.04592C7.01689 3.99501 6.99612 3.94289 6.97502 3.8899C6.8538 3.58564 6.72126 3.25294 6.46034 2.95843C6.18109 2.64323 5.72945 2.35248 4.89346 2.35248ZM1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.0084 1.35248 6.73504 1.76049 7.20884 2.2953C7.32062 2.42147 7.41686 2.55382 7.50002 2.68545C7.58318 2.55382 7.67941 2.42147 7.79119 2.2953C8.265 1.76049 8.99164 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                ) : (
                  <div onClick={() => removeFromWishList(product?.id||"")}>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                )}
                {/* <FontAwesomeIcon icon={faHeart} onClick={() => addToWishList(product?.id)} />
                    <FontAwesomeIcon icon={regular("heart")} /> */}
                {cartProducts?.includes(product?.id||"") ? (
                  <button onClick={() => dispatch(setOpenCart())}>
                    Go to Cart
                  </button>
                ) : (
                  <button
                    onClick={() => addToCart(product?.id||"")}
                    className={` ${
                      productLoading.includes(product?.id||"")
                        ? "cursor-not-allowed opacity-50"
                        : ""
                    }`}
                  >
                    {productLoading.includes(product?.id||"")
                      ? "Adding to Cart..."
                      : "Add to Cart"}
                  </button>
                )}{" "}
              </div>
            </li>
          );
        })
      ) : (
        <div className="flex justify-center w-full mt-14">
          No Products Found
        </div>
      )}
    </ul>
  );
};

export default ProductList;
