
import useApi from '@/hooks/useApi'
import { apiPath } from '@/lib/api-path'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BreadCrumb from '../common/BreadCrumb'
import { useDispatch, useSelector } from 'react-redux'
import { showToast } from '@/lib/utils'
import { addCartProduct, setOpenCart } from '@/redux/reducer/cart'
import { productType } from '@/lib/interfaces/category'
import TrendingDiamond from '../TrendingDiamond'
import SocialShare from '../social-share'


function Demo() {

}


const ProductDetailsComponent = () => {
    const { apiAction } = useApi()
    const { id } = useParams()
    const { cart: { cartProduct }, auth: { user, token } } = useSelector((state: any) => state)
    let cartProductIds = cartProduct?.map((product: any) => product?.product?.id || product?.id)

    const [product, setProduct] = useState<productType>({})
    const [currentImage, setCurrentImage] = useState<any>("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {

        let data = await apiAction({ method: "get", url: `${apiPath?.product?.product}/${id}` })
        if (!data?.data?.error) {
            setProduct(data?.data)
            setCurrentImage(data?.data?.productimage[0])
        }
    }
    const checkUser = () => {
        if (user?.id)
            return true

        showToast("Please login to enhance experience")
        navigate("/login")
    }

    const addToCart = async () => {
        if (cartProductIds?.includes(product?.id)) {
            dispatch(setOpenCart())
        } else {
            if (checkUser()) {
                const data = await apiAction({ method: "post", url: `${apiPath?.product?.addToCart}`, data: { userid: user?.id, productid: product?.id, quantity: 1 }, headers: { "Authorization": `Bearer ${token}` } })
                if (!data?.data?.error) {
                    dispatch(addCartProduct(data?.data))
                    // setCartProducts([...cartProducts||[], id])
                }

            }
        }
    }

    const diamondsDetails = [{
        title: "Diamond Size",
        description: product?.diamond_size?.size_desc,
        img: product?.diamond_size?.sizeimages
    }, {
        title: "Color",
        description: product?.diamond_color?.color_desc,
        img: product?.diamond_color?.colorimage
    }, {
        title: "Clarity",
        description: product?.diamond_clarity?.clarity_desc,
        img: product?.diamond_clarity?.clarityimage
    }, {
        title: "Cut",
        description: product?.diamond_cut?.diamond_cut,
        img: product?.diamond_cut?.cutimage
    }]

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
    ];



    return (
        <div className="flex flex-col">
            <span className="self-center flex w-full container flex-col mt-24 max-md:max-w-full max-md:mt-10">
                <div className="justify-center text-neutral-500 text-base font-semibold leading-6 self-center max-md:max-w-full">
                    <BreadCrumb submitHandler={() => navigate("/product-category")} />
                </div>
                <div className='lg:w-[500px] md:w-[500px] w-full'>
                    <div className='mt-8 self-start lg:ml-2.5 md:ml-2.5 ml-0 max-md:mt-4'>
                        <div className='border border-[#211c50] rounded-md overflow-hidden'>
                            <img
                                loading="lazy"
                                src={currentImage || ""}
                                className="aspect-square lg:h-[500px] md:h-[500px] h-[300px] w-full shadow-sm overflow-hidden max-w-full  self-end"
                            />
                        </div>
                        <div className='my-4 flex gap-4 overflow-auto max-w-full'>
                            {product?.productimage && product?.productimage?.map((image: string, index: number) => {
                                return (
                                    <div key={index} className='border border-[#211c50] w-[80px] rounded-md  overflow-hidden' onClick={() => setCurrentImage(image)}>
                                        <img
                                            loading="lazy"
                                            src={image}
                                            className="aspect-square object-fill object-center w-[80px] h-[80px] shadow-sm overflow-hidden max-w-full self-end"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="text-neutral-700 lg:text-3xl md:text-4xl text-2xl font-bold lg:leading-10 md:leading-10 leading-8 font-bold leading-10  mt-10 self-start lg:ml-2.5 md:ml-2.5 ml-0 max-md:mt-10">
                    {product?.maintitle}
                </div>
                <div className=" text-black text-base font-semibold leading-6  mt-5 self-start lg:ml-2.5 md:ml-2.5 ml-0">
                    price:
                </div>
                <div className=" text-lime-400 text-xl leading-8 lg:mt-8 md:mt-8 mt-4 self-start lg:ml-2.5 md:ml-2.5 ml-0">
                    ${product?.price}
                </div>
                <span onClick={addToCart} className="cursor-pointer text-white text-center text-base font-bold leading-4 items-stretch border bg-purple-800  mt-7 px-5 py-3.5 rounded border-solid border-indigo-950 self-start lg:ml-2.5 md:ml-2.5 ml-0">
                    {cartProductIds?.includes(product?.id) ? "Go to cart" : "Add to cart"}
                </span>
                <span className=" text-black text-center text-base font-semibold leading-5 tracking-wider items-stretch border bg-white  mt-8 px-7 py-4 rounded-lg border-solid border-indigo-950 self-start lg:ml-2.5 md:ml-2.5 ml-0 max-md:px-5">
                    Get GIA Report
                </span>
                <span className="flex  max-w-full items-stretch justify-between gap-0.5  mt-7 self-start max-md:flex-wrap">
                    <div className="text-neutral-700 lg:text-4xl md:text-4xl text-2xl font-bold lg:leading-[57.6px] md:leading-[57.6px] leading-[34px] max-md:max-w-full">
                        {product?.title}
                    </div>

                    <div className="stroke-[1px] stroke-indigo-950 self-center flex aspect-square flex-col  items-stretch my-auto px-1.5 py-2.5">
                        <div className="bg-black flex shrink-0 h-0.5 flex-col rounded-none" />
                    </div>
                </span>
                <span className=" text-black text-center text-base font-semibold leading-5 tracking-wider items-stretch border bg-white  mt-2 px-7 py-4 rounded-lg border-solid border-indigo-950 self-start lg:ml-2.5 md:ml-2.5 ml-0 max-md:px-5">
                    Contact
                </span>
                <SocialShare />
                <div className="text-center">
                    <div className="text-3xl font-bold mt-8 mb-4">Diamond Details</div>
                    <table className="table-auto mx-auto mb-8 border-collapse border border-slate-400 lg:w-[500px] md:w-[500px] w-full">
                        <tbody>
                            {diamondetailsArr.map((item, index) => (
                                <tr key={index} className="border border-slate-300">
                                    <td className="font-bold py-2 px-4 text-start">{item.title}</td>
                                    <td className="px-4 text-start">{item.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <span className="flex flex-col">
                    {diamondsDetails?.map((item, index) => {
                        return (
                            <div key={index} className='pb-4'>
                                <div className="justify-center text-neutral-700 lg:text-3xl md:text-3xl text-xl font-bold leading-10 self-stretch w-full max-md:max-w-full">
                                    {item.title}
                                </div>
                                <div className="justify-center text-neutral-700 text-base leading-7 self-stretch lg:mt-4 md:mt-4 mt-0 max-md:max-w-full">
                                    {item.description}
                                </div>{" "}
                                <img
                                    loading="lazy"
                                    srcSet={item.img}
                                    className="aspect-[0.96] object-contain object-center w-full h-[182px] overflow-hidden mt-1 self-center mx-auto"
                                />
                            </div>
                        )
                    })}
                </span>
                <TrendingDiamond product={product} />
                <div className="justify-center text-neutral-700 text-2xl font-bold leading-10 self-center mt-20 max-md:mt-10">
                    Want Customize Diamonds?
                </div>
                <span className="justify-center text-white text-center text-base font-semibold leading-6 items-stretch border bg-sky-600 my-3 px-5 py-2 rounded border-solid border-sky-600 self-center">
                    Contact Us
                </span>
            </span>
        </div>
    )
}

export default ProductDetailsComponent