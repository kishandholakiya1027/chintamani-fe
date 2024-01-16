import useApi from '@/hooks/useApi'
import { apiPath } from '@/lib/api-path'
import { addWishLishProduct } from '@/redux/reducer/cart'
import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const WishListProducts = () => {
  const [openPopup, setOpenPopup] = useState<string | undefined>('')
  const { cart: { wishListProduct }, auth: { token, user } } = useSelector((state: { cart: any, auth: any }) => state)
  console.log("🚀 ~ wishListProduct:", wishListProduct)
  const { apiAction } = useApi()
  const dispatch = useDispatch()
  const removeFromWishList = async (id: string) => {
    const data = await apiAction({ method: "post", url: `${apiPath?.product?.removeWishlist}`, data: { userid: user?.id, productid: id }, headers: { "Authorization": `Bearer ${token}` } })
    if (!data?.data?.error) {
      dispatch(addWishLishProduct(data?.data))
      // showToast("Removed to your wishlist")
      // setWishlist(wishlist?.filter((item: string) => item !== id))

    }

  }

  return (
    <div className='container mx-auto py-6'>
      <div className='my-8'>
        <p className=' text-[30px] text-[#404040] font-bold line-height-[20px]'>My wishlist</p>
      </div>
      <div className="rounded-lg md:w-full rounded-[10px]   border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] ">
        {wishListProduct?.length ? wishListProduct?.map((products: any) => {
          let product = products?.product || products
          return <div className="justify-between  rounded-lg bg-white p-4 border-b-[1px] border-gray-200 sm:flex sm:justify-start items-center">
            <img src={product?.productimage[0]} alt="product-image" className="w-[100px] rounded-lg h-[90px] " />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0 flex flex-col gap-2">
                <h2 className="text-lg font-bold text-gray-900">{product?.title}</h2>
                <p className="text-sm">${product?.price}</p>
                {/* <div className="flex items-center border-gray-100 justify-start my-2">
                        <button onClick={() => handleProductQuantity(product?.id, product?.quantity - 1)} disabled={product?.quantity === "undefined" || !product?.quantity || product?.quantity === 1 ? true : false} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </button>
                        <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={product?.quantity?.toString() || ""} min="1" onChange={(e) => handleProductQuantity(product?.id, Number(e.target.value ? e.target.value : ""))} />
                        <button onClick={() => handleProductQuantity(product?.id, (product?.quantity) + 1)} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </button>
                      </div> */}
              </div>
              <div className="mt-1 ml-2 flex relative justify-between sm:space-y-6  sm:block sm:space-x-6">
                <div className="flex items-center space-x-4" onClick={() => setOpenPopup(product?.id || "")}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c2c2c2" className="w-5 h-5">
                    <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                  </svg>
                </div>
               {openPopup === product?.id && <div className="absolute top-2 w-screen left-0 z-50 mt-0 flex max-w-max -translate-x-1/2 px-4">
                  <div className=' border-[1px]  border-gray-200 text-[14px] p-4 bg-white bg-clip-border rounded-lg '>
                  Are you sure you want to remove this product?
                  <div className=" px-4  flex pt-2 justify-center items-center gap-4">
                    <button onClick={() => setOpenPopup("")} className="px-3  border-[#211c50]  text-[#211c50]  rounded-md w-full sm:w-auto"> Cancel </button>
                    <button onClick={() => removeFromWishList(product?.id || "")} className="px-3   text-rose-500  rounded-md w-full sm:w-auto"> Remove </button>
                  </div>
                  </div>
                </div>}
              </div>
            </div>
          </div>

        }) :
          <div className='flex justify-center items-center mb-10'>
            <h2 >No products added to the wishlist</h2>
          </div>
        }

      </div>


    </div>
  )
}

export default WishListProducts