
import useApi from '@/hooks/useApi'
import { apiPath } from '@/lib/api-path'
import  { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BreadCrumb from '../common/BreadCrumb'
import { useDispatch, useSelector } from 'react-redux'
import { showToast } from '@/lib/utils'
import { addCartProduct, setOpenCart } from '@/redux/reducer/cart'
import { productType } from '@/lib/interfaces/category'

const ProductDetailsComponent = () => {
    const { apiAction } = useApi()
    const { id } = useParams()
    const {cart:{cartProduct},auth:{user,token}} = useSelector((state: any) => state)
    console.log("🚀 ~ ProductDetailsComponent ~ cartProducts:", cartProduct)
    let cartProductIds = cartProduct?.map((product: any) => product?.product?.id||product?.id)
    const [product, setProduct] = useState<productType>({})
    const [currentImage, setCurrentImage] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    console.log("🚀 ~ ProductDetailsComponent ~ product:", product)
    console.log("🚀 ~ ProductDetailsComponent ~ id:", id)

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
    const checkUser =  () => {
        if (user?.id)
            return true
      
        showToast("Please login to enhance experience")
        navigate("/login")
    }


    const addToCart = async () => {
        if(cartProductIds?.includes(product?.id)){
            dispatch(setOpenCart())
        } else {
            if(checkUser()){
                const data = await apiAction({ method: "post", url: `${apiPath?.product?.addToCart}`, data: { userid: user?.id, productid: product?.id ,quantity:1}, headers: { "Authorization": `Bearer ${token}` } })
                if (!data?.data?.error){
                    dispatch(addCartProduct(data?.data))
                    // setCartProducts([...cartProducts||[], id])
        
                }
    
            }

        }
    }

    return (


        <div className="flex flex-col  ">

            <span className="self-center flex w-full container flex-col mt-24 max-md:max-w-full max-md:mt-10">
                <div className="justify-center text-neutral-500 text-base font-semibold leading-6 ml-80 self-start max-md:max-w-full">
                <BreadCrumb submitHandler={() => navigate("/product-category")} />
                    {/* Home<span className=""> / </span>Diamonds<span className=""> / </span>
                    Natural Diamonds<span className=""> / 71341 1.91 Carat Round</span> */}
                </div>
                <div className=' mt-20 self-start max-md:ml-2.5 max-md:mt-10'>
                    <div className='border  border-[#211c50] min-w-[500px] h-[500px] '>
                        <img
                            loading="lazy"
                            src={currentImage}
                            className="aspect-square object-cover object-center w-full shadow-sm overflow-hidden max-w-full  self-end max-md:mt-10"
                        />
                    </div>
                    <div className='my-4'>
                        {product?.productimage && product?.productimage?.map((image: string) => {
                            return <div className='border  border-[#211c50] w-[80px]  '>
                                <img
                                    loading="lazy"
                                    src={image}
                                    className="aspect-square object-cover object-center w-[80px] h-[42px] shadow-sm overflow-hidden max-w-full  self-end max-md:mt-10"
                                />
                            </div>
                        })}
                    </div>

                </div>
                {/* <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/30bc26bf754827d0808794e2288d579f01330a5e5aee81a9869d85beb7a09ce3?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                    className="aspect-square object-contain object-center w-[60px] shadow-sm overflow-hidden max-w-full mt-[563px] self-end max-md:mt-10"
                /> */}
                <div className="text-neutral-700 text-3xl font-bold leading-10 whitespace-nowrap  mt-10 self-start max-md:ml-2.5 max-md:mt-10">
                    {product?.maintitle}
                </div>
                <div className=" text-black text-base font-semibold leading-6 whitespace-nowrap  mt-5 self-start max-md:ml-2.5">
                    price:
                </div>
                <div className=" text-lime-400 text-xl leading-8 whitespace-nowrap  mt-8 self-start max-md:ml-2.5">
                    ${product?.price}
                </div>
                <span onClick={addToCart} className="cursor-pointer text-white text-center text-base font-bold leading-4 whitespace-nowrap items-stretch border bg-purple-800  mt-7 px-5 py-3.5 rounded border-solid border-indigo-950 self-start max-md:ml-2.5">
                    {cartProductIds?.includes(product?.id) ? "Go to cart": "Add to cart"}
                </span>
                <span className=" text-black text-center text-base font-semibold leading-5 tracking-wider whitespace-nowrap items-stretch border bg-white  mt-8 px-7 py-4 rounded-lg border-solid border-indigo-950 self-start max-md:ml-2.5 max-md:px-5">
                    Get GIA Report
                </span>
                <span className="flex  max-w-full items-stretch justify-between gap-0.5  mt-7 self-start max-md:flex-wrap">
                    <div className=" text-neutral-700 text-4xl font-bold leading-[57.6px] grow max-md:max-w-full">
                        {product?.title}
                    </div>

                    <div className="stroke-[1px] stroke-indigo-950 self-center flex aspect-square flex-col  items-stretch my-auto px-1.5 py-2.5">
                        <div className="bg-black flex shrink-0 h-0.5 flex-col rounded-none" />
                    </div>
                </span>
                <span className=" text-black text-center text-base font-semibold leading-5 tracking-wider whitespace-nowrap items-stretch border bg-white  mt-2 px-7 py-4 rounded-lg border-solid border-indigo-950 self-start max-md:ml-2.5 max-md:px-5">
                    Contact
                </span>
                <div className=" text-neutral-700 text-2xl font-bold leading-10 whitespace-nowrap  mt-10 self-start max-md:ml-2.5">
                    Share this product
                </div>
                <div className="flex w-[201px] max-w-full items-stretch gap-1  mt-2 self-start max-md:ml-2.5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ed313dc0943d74d1cd06306416d9fd81779fae534cf02fa33dc4f5513d5c062?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                        className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden shrink-0 flex-1"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a821787d499c1d4b2b958ecb3eb8f936207d4f0db01eef898933d690c461817?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                        className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden shrink-0 flex-1"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/49441f90835a0a9740bd0ca50df5288e38eb2c502f43c2706142e8229c22cbd4?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                        className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden shrink-0 flex-1"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/18f336aae467a95bfaf56e2f68bd4a6cfeb85db73018e9714afd54de7af33015?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                        className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden shrink-0 flex-1"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a92925048654b5dceaed239e42b7fcf2f7410185e697411358fb1d569b3ba81b?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                        className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden shrink-0 flex-1"
                    />
                </div>
                <div className="justify-center text-neutral-700 text-3xl font-bold leading-10 self-center whitespace-nowrap mt-56 max-md:mt-10">
                    Diamond Details
                </div>
                <div className="justify-center text-neutral-700 text-lg font-bold leading-7 self-center whitespace-nowrap mt-16 max-md:mt-10">
                    Shape
                </div>
                <div className="justify-center text-neutral-700 text-base leading-6 self-center whitespace-nowrap mt-2.5">
                    {product?.shape}
                </div>
                <div className="justify-center text-neutral-700 text-lg font-bold leading-7 self-center whitespace-nowrap mt-4">
                    Carat
                </div>
                <div className="justify-center text-neutral-700 text-base leading-6 self-center whitespace-nowrap mt-3.5">
                    {product?.carat}
                </div>
                <div className="justify-center text-neutral-700 text-lg font-bold leading-7 self-center whitespace-nowrap mt-4">
                    Colour
                </div>
                <div className="justify-center text-neutral-700 text-base leading-6 self-center whitespace-nowrap mt-4">
                    {product?.colour}
                </div>
                <div className="justify-center text-neutral-700 text-lg font-bold leading-7 self-center whitespace-nowrap mt-3.5">
                    Clarity
                </div>
                <div className="justify-center text-neutral-700 text-base leading-6 self-center whitespace-nowrap mt-2.5">
                    {product?.clarity}
                </div>
                <div className="justify-center text-neutral-700 text-lg font-bold leading-7 self-center whitespace-nowrap mt-4">
                    Cut
                </div>
                <div className="justify-center text-neutral-700 text-base leading-6 self-center whitespace-nowrap mt-4">
                    {product?.cut}
                </div>
                <div className="justify-center text-neutral-700 text-lg font-bold leading-7 self-center whitespace-nowrap mt-3.5">
                    Polish
                </div>
                <div className="justify-center text-neutral-700 text-base leading-6 self-center whitespace-nowrap mt-3.5">
                    {product?.polish}
                </div>
                <div className="justify-center text-neutral-700 text-lg font-bold leading-7 self-center whitespace-nowrap mt-4">
                    Symmetry
                </div>
                <div className="justify-center text-neutral-700 text-base leading-6 self-center whitespace-nowrap mt-2.5">
                    {product?.symmetry}
                </div>
                <div className="justify-center text-neutral-700 text-lg font-bold leading-7 self-center whitespace-nowrap mt-4">
                    Flourescence
                </div>
                <div className="justify-center text-neutral-700 text-base leading-6 self-center whitespace-nowrap mt-4">
                    {product?.flourescence}
                </div>
                <div className="justify-center text-neutral-700 text-lg font-bold leading-7 self-center whitespace-nowrap mt-4">
                    Measurements
                </div>
                <div className="justify-center text-neutral-700 text-base leading-6 self-center whitespace-nowrap mt-3.5">
                    {product?.measurements}
                </div>
                <div className="justify-center text-neutral-700 text-lg font-bold leading-7 self-center whitespace-nowrap mt-10 max-md:mt-10">
                    Cert Number
                </div>
                <div className="justify-center text-neutral-700 text-base leading-6 self-center whitespace-nowrap mt-3.5">
                    {product?.cert_number}
                </div>
                <div className="justify-center text-neutral-700 text-lg font-bold leading-7 self-center whitespace-nowrap mt-4">
                    Table
                </div>
                <div className="justify-center text-neutral-700 text-base leading-6 self-center whitespace-nowrap mt-3.5">
                    {product?.table}
                </div>
                <div className="justify-center text-neutral-700 text-lg font-bold leading-7 self-center whitespace-nowrap mt-3.5">
                    Crown Height
                </div>
                <div className="justify-center text-neutral-700 text-base leading-6 self-center whitespace-nowrap mt-3.5">
                    {product?.crown_height}
                </div>
                <div className="justify-center text-neutral-700 text-lg font-bold leading-7 self-center whitespace-nowrap mt-9">
                    Pavilian Depth
                </div>
                <div className="justify-center text-neutral-700 text-base leading-6 self-center whitespace-nowrap mt-3.5">
                    {product?.pavilian_depth}
                </div>
                <div className="justify-center text-neutral-700 text-lg font-bold leading-7 self-center whitespace-nowrap mt-9">
                    Depth
                </div>
                <div className="justify-center text-neutral-700 text-base leading-6 self-center whitespace-nowrap mt-2.5">
                    {product?.depth}
                </div>
                <div className="justify-center text-neutral-700 text-lg font-bold leading-7 self-center whitespace-nowrap mt-4">
                    Crown Angle
                </div>
                <div className="justify-center text-neutral-700 text-base leading-6 self-center whitespace-nowrap mt-2.5">
                    {product?.crown_angle}
                </div>
                <div className="justify-center text-neutral-700 text-lg font-bold leading-7 self-center whitespace-nowrap mt-9">
                    Pavilian Angle
                </div>
                <div className="justify-center text-neutral-700 text-base leading-6 self-center whitespace-nowrap mt-2.5">
                    {product?.pavilian_angle}
                </div>
                <span className="flex flex-col px-5">
                    <div className="justify-center text-neutral-700 text-3xl font-bold leading-10 self-stretch w-full max-md:max-w-full">
                        Diamond Size
                    </div>
                    <div className="justify-center text-neutral-700 text-base leading-7 self-stretch mr-3.5 mt-4 max-md:max-w-full max-md:mr-2.5">
                        {product?.diamond_size?.size_desc}
                    </div>{" "}
                    <img
                        loading="lazy"
                        srcSet={product?.diamond_size?.sizeimages}
                        className="aspect-[0.96] object-contain object-center w-[182px] overflow-hidden max-w-full mt-1 self-start"
                    />{" "}
                    <div className="justify-center text-neutral-700 text-3xl font-bold leading-10 self-stretch w-full mt-3 max-md:max-w-full">
                        Color
                    </div>{" "}
                    <div className="justify-center text-neutral-700 text-base leading-7 self-stretch mt-5 max-md:max-w-full">
                        {product?.diamond_color?.color_desc}
                    </div>{" "}
                    <img
                        loading="lazy"
                        srcSet={product?.diamond_color?.colorimage}
                        className="aspect-[1.82] object-contain object-center w-full overflow-hidden self-center max-w-[760px] max-md:max-w-full"
                    />{" "}
                    <div className="justify-center text-neutral-700 text-3xl font-bold leading-10 self-stretch w-full mt-3 max-md:max-w-full">
                        Clarity
                    </div>{" "}
                    <div className="justify-center text-neutral-700 text-base leading-7 self-stretch mt-2 max-md:max-w-full">
                        {product?.diamond_clarity?.clarity_desc}
                    </div>{" "}
                    <img
                        loading="lazy"
                        srcSet={product?.diamond_clarity?.clarityimage}
                        className="aspect-[5.67] object-contain object-center w-[391px] overflow-hidden max-w-full self-start"
                    />{" "}
                    <div className="justify-center text-neutral-700 text-3xl font-bold leading-10 self-stretch w-full mt-3.5 max-md:max-w-full">
                        Cut
                    </div>{" "}
                    <div className="justify-center text-neutral-700 text-base leading-7 self-stretch w-full mt-5 max-md:max-w-full">
                        {product?.diamond_cut?.diamond_cut}
                    </div>{" "}
                    <img
                        loading="lazy"
                        srcSet={product?.diamond_cut?.cutimage}
                        className="aspect-[3.3] object-contain object-center w-full overflow-hidden self-stretch mt-1 max-md:max-w-full"
                    />
                </span>
                <span className="flex flex-col items-stretch px-5">
                    <div className="justify-center text-neutral-700 text-3xl font-bold leading-10 w-full max-md:max-w-full">
                        Trending Diamonds
                    </div>
                    <div className="justify-center text-neutral-700 text-3xl font-bold leading-10 w-full mt-4 max-md:max-w-full">
                        Related products
                    </div>
                    <div className="w-full mt-4 max-md:max-w-full max-md:pr-5">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                                <span className="shadow-sm bg-white bg-opacity-0 flex grow flex-col items-center w-full pb-6 rounded-3xl max-md:mt-10">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8177b657e1f457b507aedeaa2ce1eaf145558bf6e6926963dc68eb35d21ed5c5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8177b657e1f457b507aedeaa2ce1eaf145558bf6e6926963dc68eb35d21ed5c5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8177b657e1f457b507aedeaa2ce1eaf145558bf6e6926963dc68eb35d21ed5c5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8177b657e1f457b507aedeaa2ce1eaf145558bf6e6926963dc68eb35d21ed5c5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8177b657e1f457b507aedeaa2ce1eaf145558bf6e6926963dc68eb35d21ed5c5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8177b657e1f457b507aedeaa2ce1eaf145558bf6e6926963dc68eb35d21ed5c5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8177b657e1f457b507aedeaa2ce1eaf145558bf6e6926963dc68eb35d21ed5c5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8177b657e1f457b507aedeaa2ce1eaf145558bf6e6926963dc68eb35d21ed5c5?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                        className="aspect-[0.87] object-contain object-center w-[218px] overflow-hidden"
                                    />
                                    <div className="justify-center text-indigo-950 text-base font-bold leading-7 ml-4 mt-6 max-md:ml-2.5">
                                        90895 3.01 Carat
                                        <br />
                                        Round
                                    </div>
                                    <div className="justify-center text-lime-400 text-sm leading-6 self-stretch mt-3.5">
                                        $125,952.00
                                    </div>
                                </span>
                            </div>
                            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                                <span className="shadow-sm bg-white bg-opacity-0 flex grow flex-col w-full pt-12 pb-6 rounded-3xl items-start max-md:mt-10">
                                    <div className="justify-center text-indigo-950 text-base font-bold leading-7 ml-4 mt-56 max-md:ml-2.5 max-md:mt-10">
                                        91847 5.02 Carat
                                        <br />
                                        Round
                                    </div>
                                    <div className="justify-center text-lime-400 text-sm leading-6 self-stretch mt-3.5">
                                        $152,683.30
                                    </div>
                                </span>
                            </div>
                            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                                <span className="shadow-sm bg-white bg-opacity-0 flex grow flex-col items-center w-full pb-6 rounded-3xl max-md:mt-10">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2ac1522fabeefa4872372e157b6f5c474c5bc30a6d65d13bc5fefe149f1816d5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac1522fabeefa4872372e157b6f5c474c5bc30a6d65d13bc5fefe149f1816d5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac1522fabeefa4872372e157b6f5c474c5bc30a6d65d13bc5fefe149f1816d5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac1522fabeefa4872372e157b6f5c474c5bc30a6d65d13bc5fefe149f1816d5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac1522fabeefa4872372e157b6f5c474c5bc30a6d65d13bc5fefe149f1816d5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac1522fabeefa4872372e157b6f5c474c5bc30a6d65d13bc5fefe149f1816d5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac1522fabeefa4872372e157b6f5c474c5bc30a6d65d13bc5fefe149f1816d5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac1522fabeefa4872372e157b6f5c474c5bc30a6d65d13bc5fefe149f1816d5?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                        className="aspect-[0.87] object-contain object-center w-[218px] overflow-hidden"
                                    />
                                    <div className="justify-center text-indigo-950 text-base font-bold leading-7 ml-4 mt-6 max-md:ml-2.5">
                                        93636 1.50 Carat
                                        <br />
                                        Cushion
                                    </div>
                                    <div className="justify-center text-lime-400 text-sm leading-6 self-stretch mt-3.5">
                                        $10,044.00
                                    </div>
                                </span>
                            </div>
                            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                                <span className="shadow-sm bg-white bg-opacity-0 flex grow flex-col items-center w-full pb-6 rounded-3xl max-md:mt-10">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d8e1655e527333a905edae8a63e836b3ce802d37b64299a4c409c36c0e839f5f?apiKey=d15e42286684479bbc853a10c1e3f3db&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8e1655e527333a905edae8a63e836b3ce802d37b64299a4c409c36c0e839f5f?apiKey=d15e42286684479bbc853a10c1e3f3db&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8e1655e527333a905edae8a63e836b3ce802d37b64299a4c409c36c0e839f5f?apiKey=d15e42286684479bbc853a10c1e3f3db&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8e1655e527333a905edae8a63e836b3ce802d37b64299a4c409c36c0e839f5f?apiKey=d15e42286684479bbc853a10c1e3f3db&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8e1655e527333a905edae8a63e836b3ce802d37b64299a4c409c36c0e839f5f?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8e1655e527333a905edae8a63e836b3ce802d37b64299a4c409c36c0e839f5f?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8e1655e527333a905edae8a63e836b3ce802d37b64299a4c409c36c0e839f5f?apiKey=d15e42286684479bbc853a10c1e3f3db&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8e1655e527333a905edae8a63e836b3ce802d37b64299a4c409c36c0e839f5f?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                        className="aspect-[0.88] object-contain object-center w-[219px] overflow-hidden"
                                    />
                                    <div className="justify-center text-indigo-950 text-base font-bold leading-7 ml-4 mt-6 max-md:ml-2.5">
                                        92378 2.00 Carat
                                        <br />
                                        Round
                                    </div>
                                    <div className="justify-center text-lime-400 text-sm leading-6 self-stretch mt-3.5">
                                        $19,890.00
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-stretch mt-3.5 pl-11 max-md:max-w-full max-md:pl-5">
                        <div className="flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                            <div className="flex items-stretch justify-between gap-1">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/781895e5a49cd8409c143dc881d78561730fd03a8420227ae1b84e3449e5d25b?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0527c4a4f45474d6f3f2fa397cd276854a260c1e38a441de7cfad5d66cbafbf?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dd4ba8336526e51d0d34d6f573a814f62e7a5824df2b345eec341e714474d44?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5fd6145a-8012-4051-b299-2239bf9e8d48?apiKey=d15e42286684479bbc853a10c1e3f3db&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fd6145a-8012-4051-b299-2239bf9e8d48?apiKey=d15e42286684479bbc853a10c1e3f3db&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fd6145a-8012-4051-b299-2239bf9e8d48?apiKey=d15e42286684479bbc853a10c1e3f3db&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fd6145a-8012-4051-b299-2239bf9e8d48?apiKey=d15e42286684479bbc853a10c1e3f3db&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fd6145a-8012-4051-b299-2239bf9e8d48?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fd6145a-8012-4051-b299-2239bf9e8d48?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fd6145a-8012-4051-b299-2239bf9e8d48?apiKey=d15e42286684479bbc853a10c1e3f3db&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fd6145a-8012-4051-b299-2239bf9e8d48?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-[2.86] object-contain object-center w-[106px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />
                            </div>
                            <div className="flex items-stretch justify-between gap-1">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe71d722e6fc7cb08c227110736b1fc443a943df55413ca49a13f5e7b009a93c?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f67a08735b4283e46c7ab244ca4789a5d37ac813a3a73cbda0ff615f5e279681?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb2c2446580a640e22bf30a8a711628a4d224adca8d675c6f532daa10cb0fbb9?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/733241b9-d2f9-4652-911f-dd2532b1bf43?apiKey=d15e42286684479bbc853a10c1e3f3db&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/733241b9-d2f9-4652-911f-dd2532b1bf43?apiKey=d15e42286684479bbc853a10c1e3f3db&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/733241b9-d2f9-4652-911f-dd2532b1bf43?apiKey=d15e42286684479bbc853a10c1e3f3db&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/733241b9-d2f9-4652-911f-dd2532b1bf43?apiKey=d15e42286684479bbc853a10c1e3f3db&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/733241b9-d2f9-4652-911f-dd2532b1bf43?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/733241b9-d2f9-4652-911f-dd2532b1bf43?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/733241b9-d2f9-4652-911f-dd2532b1bf43?apiKey=d15e42286684479bbc853a10c1e3f3db&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/733241b9-d2f9-4652-911f-dd2532b1bf43?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-[2.86] object-contain object-center w-[106px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />
                            </div>
                            <div className="flex items-stretch justify-between gap-1">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bfe8b84b0d3ac397fb13c9cc4f36c22047c5c458be36f8f3a1cd8481c637dbc?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/12bc3028856c512ab4544a23cbda76bac729f1e5c4a7e186026c2c184e68da23?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c29f65155efccf3872c60c43623a4c44081bf5ff4c6bb5cbaa0fbb281bfb02b?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d91139e2-d6eb-4c84-ab8d-eac7d9f1e0aa?apiKey=d15e42286684479bbc853a10c1e3f3db&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d91139e2-d6eb-4c84-ab8d-eac7d9f1e0aa?apiKey=d15e42286684479bbc853a10c1e3f3db&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d91139e2-d6eb-4c84-ab8d-eac7d9f1e0aa?apiKey=d15e42286684479bbc853a10c1e3f3db&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d91139e2-d6eb-4c84-ab8d-eac7d9f1e0aa?apiKey=d15e42286684479bbc853a10c1e3f3db&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d91139e2-d6eb-4c84-ab8d-eac7d9f1e0aa?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d91139e2-d6eb-4c84-ab8d-eac7d9f1e0aa?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d91139e2-d6eb-4c84-ab8d-eac7d9f1e0aa?apiKey=d15e42286684479bbc853a10c1e3f3db&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d91139e2-d6eb-4c84-ab8d-eac7d9f1e0aa?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-[2.86] object-contain object-center w-[106px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />
                            </div>
                            <div className="flex items-stretch justify-between gap-1">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/507aa69c4a6d82a99c6be60737034c58459fbba9e007e75b7a1028c28423b6c1?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/50575aa54069d3e660bdc38452f43b0ac5a9d3d559487ece30ec4d79a17c03fe?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/03479193fb1f18cc7d970c2fe50e6403b386e9b8d7193aba5d7006eba2cdf53f?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/91b6bb39-1fc5-45bd-bd21-20237d9497d7?apiKey=d15e42286684479bbc853a10c1e3f3db&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/91b6bb39-1fc5-45bd-bd21-20237d9497d7?apiKey=d15e42286684479bbc853a10c1e3f3db&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91b6bb39-1fc5-45bd-bd21-20237d9497d7?apiKey=d15e42286684479bbc853a10c1e3f3db&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/91b6bb39-1fc5-45bd-bd21-20237d9497d7?apiKey=d15e42286684479bbc853a10c1e3f3db&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/91b6bb39-1fc5-45bd-bd21-20237d9497d7?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91b6bb39-1fc5-45bd-bd21-20237d9497d7?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/91b6bb39-1fc5-45bd-bd21-20237d9497d7?apiKey=d15e42286684479bbc853a10c1e3f3db&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/91b6bb39-1fc5-45bd-bd21-20237d9497d7?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-[2.62] object-contain object-center w-[97px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />
                            </div>
                        </div>
                        <div className="flex items-stretch justify-between gap-5 mt-1 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/446af5e84e450ab9accc582051cd4dfac4fa9c2bebd27b472a9c4d612de73bd2?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/60dc97205a70cc2b6e83897002d6b8917e03b931c92364947c776597f94fafa8?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e094ba5e65ba8f781bb833fa3ac5a16e13900b6bb84026e7eb9f89580959500?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1bf702c9f0eb0c8510777919f3b437c90bca654fd8ee906336159d25cb3057a?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                            />
                        </div>
                    </div>
                </span>
                {/* <div className=' max-w-[1120px] mx-auto flex flex-col flex-nowrap items-center'>
                    <div className="justify-center text-neutral-700 text-3xl font-bold leading-10 whitespace-nowrap ml-5 mt-20 self-start max-md:ml-2.5 max-md:mt-10">
                        Diamond Size
                    </div>

                    <div className="justify-center text-neutral-700 text-base leading-7 max-w-[1007px] ml-9 mt-4 self-start max-md:max-w-full">
                        {product?.diamond_size?.size_desc}
                    </div>{" "}
                    <img
                        loading="lazy"
                        srcSet={product?.diamond_size?.sizeimages}
                        className="aspect-[0.96] object-contain object-center w-[182px] overflow-hidden max-w-full ml-5 mt-1 self-start max-md:ml-2.5"
                    />{" "}
                    <div className="justify-center text-neutral-700 text-3xl font-bold leading-10 whitespace-nowrap ml-5 mt-3 self-start max-md:ml-2.5">
                        Color
                    </div>{" "}
                    <div className="justify-center text-neutral-700 text-base leading-7 max-w-[1027px] ml-7 mt-5 self-start max-md:max-w-full">
                        {product?.diamond_color?.color_desc}
                    </div>{" "}
                    <img
                        loading="lazy"
                        srcSet={product?.diamond_color?.colorimage}
                        className="aspect-[1.82] object-contain object-center w-[760px] overflow-hidden max-w-full ml-5 self-start"
                    />{" "}
                    <div className="justify-center text-neutral-700 text-3xl font-bold leading-10 whitespace-nowrap ml-5 mt-3 self-start max-md:ml-2.5">
                        Clarity
                    </div>{" "}
                    <div className="justify-center text-neutral-700 text-base leading-7 max-w-[1029px] ml-7 mt-2 self-start max-md:max-w-full">
                        {product?.diamond_clarity?.clarity_desc}
                    </div>{" "}
                    <img
                        loading="lazy"
                        srcSet={product?.diamond_clarity?.clarityimage}
                        className="aspect-[5.67] object-contain object-center w-[391px] overflow-hidden max-w-full ml-5 self-start max-md:ml-2.5"
                    />{" "}
                    <div className="justify-center text-neutral-700 text-3xl font-bold leading-10 whitespace-nowrap ml-5 mt-3.5 self-start max-md:ml-2.5">
                        Cut
                    </div>{" "}
                    <div className="justify-center text-neutral-700 text-base leading-7 max-w-[1020px] ml-8 mt-5 self-start max-md:max-w-full">
                        {product?.diamond_color?.diamond_cut}
                    </div>{" "}
                    <img
                        loading="lazy"
                        srcSet={product?.diamond_color?.cutimage}
                        className="aspect-[3.3] object-contain object-center w-[1040px] overflow-hidden max-w-full ml-5 mt-1 self-start"
                    />{" "}
                <div className="justify-center text-neutral-700 text-3xl font-bold leading-10 self-stretch mt-44 max-md:max-w-full max-md:mt-10">
                    Trending Diamonds
                </div>{" "}
                <div className="justify-center text-neutral-700 text-3xl font-bold leading-10 self-stretch mt-4 max-md:max-w-full">
                    Related products
                </div>{" "}
                <div className="w-[1056px] max-w-full ml-3 mt-4 self-start">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                            <span className="shadow-sm bg-white bg-opacity-0 flex grow flex-col items-center w-full pb-6 rounded-3xl max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8177b657e1f457b507aedeaa2ce1eaf145558bf6e6926963dc68eb35d21ed5c5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8177b657e1f457b507aedeaa2ce1eaf145558bf6e6926963dc68eb35d21ed5c5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8177b657e1f457b507aedeaa2ce1eaf145558bf6e6926963dc68eb35d21ed5c5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8177b657e1f457b507aedeaa2ce1eaf145558bf6e6926963dc68eb35d21ed5c5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8177b657e1f457b507aedeaa2ce1eaf145558bf6e6926963dc68eb35d21ed5c5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8177b657e1f457b507aedeaa2ce1eaf145558bf6e6926963dc68eb35d21ed5c5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8177b657e1f457b507aedeaa2ce1eaf145558bf6e6926963dc68eb35d21ed5c5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8177b657e1f457b507aedeaa2ce1eaf145558bf6e6926963dc68eb35d21ed5c5?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-[0.87] object-contain object-center w-[218px] overflow-hidden"
                                />{" "}
                                <div className="justify-center text-indigo-950 text-base font-bold leading-7 ml-4 mt-6 max-md:ml-2.5">
                                    90895 3.01 Carat
                                    <br />
                                    Round
                                </div>{" "}
                                <div className="justify-center text-lime-400 text-sm leading-6 self-stretch mt-3.5">
                                    $125,952.00
                                </div>
                            </span>
                        </div>{" "}
                        <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                            <span className="shadow-sm bg-white bg-opacity-0 flex grow flex-col w-full pt-12 pb-6 rounded-3xl items-start max-md:mt-10">
                                <div className="justify-center text-indigo-950 text-base font-bold leading-7 ml-4 mt-56 max-md:ml-2.5 max-md:mt-10">
                                    91847 5.02 Carat
                                    <br />
                                    Round
                                </div>{" "}
                                <div className="justify-center text-lime-400 text-sm leading-6 self-stretch mt-3.5">
                                    $152,683.30
                                </div>
                            </span>
                        </div>{" "}
                        <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                            <span className="shadow-sm bg-white bg-opacity-0 flex grow flex-col items-center w-full pb-6 rounded-3xl max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2ac1522fabeefa4872372e157b6f5c474c5bc30a6d65d13bc5fefe149f1816d5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac1522fabeefa4872372e157b6f5c474c5bc30a6d65d13bc5fefe149f1816d5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac1522fabeefa4872372e157b6f5c474c5bc30a6d65d13bc5fefe149f1816d5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac1522fabeefa4872372e157b6f5c474c5bc30a6d65d13bc5fefe149f1816d5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac1522fabeefa4872372e157b6f5c474c5bc30a6d65d13bc5fefe149f1816d5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac1522fabeefa4872372e157b6f5c474c5bc30a6d65d13bc5fefe149f1816d5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac1522fabeefa4872372e157b6f5c474c5bc30a6d65d13bc5fefe149f1816d5?apiKey=d15e42286684479bbc853a10c1e3f3db&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ac1522fabeefa4872372e157b6f5c474c5bc30a6d65d13bc5fefe149f1816d5?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-[0.87] object-contain object-center w-[218px] overflow-hidden"
                                />{" "}
                                <div className="justify-center text-indigo-950 text-base font-bold leading-7 ml-4 mt-6 max-md:ml-2.5">
                                    93636 1.50 Carat
                                    <br />
                                    Cushion
                                </div>{" "}
                                <div className="justify-center text-lime-400 text-sm leading-6 self-stretch mt-3.5">
                                    $10,044.00
                                </div>
                            </span>
                        </div>{" "}
                        <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                            <span className="shadow-sm bg-white bg-opacity-0 flex grow flex-col items-center w-full pb-6 rounded-3xl max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d8e1655e527333a905edae8a63e836b3ce802d37b64299a4c409c36c0e839f5f?apiKey=d15e42286684479bbc853a10c1e3f3db&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8e1655e527333a905edae8a63e836b3ce802d37b64299a4c409c36c0e839f5f?apiKey=d15e42286684479bbc853a10c1e3f3db&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8e1655e527333a905edae8a63e836b3ce802d37b64299a4c409c36c0e839f5f?apiKey=d15e42286684479bbc853a10c1e3f3db&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8e1655e527333a905edae8a63e836b3ce802d37b64299a4c409c36c0e839f5f?apiKey=d15e42286684479bbc853a10c1e3f3db&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8e1655e527333a905edae8a63e836b3ce802d37b64299a4c409c36c0e839f5f?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8e1655e527333a905edae8a63e836b3ce802d37b64299a4c409c36c0e839f5f?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8e1655e527333a905edae8a63e836b3ce802d37b64299a4c409c36c0e839f5f?apiKey=d15e42286684479bbc853a10c1e3f3db&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8e1655e527333a905edae8a63e836b3ce802d37b64299a4c409c36c0e839f5f?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-[0.88] object-contain object-center w-[219px] overflow-hidden"
                                />{" "}
                                <div className="justify-center text-indigo-950 text-base font-bold leading-7 ml-4 mt-6 max-md:ml-2.5">
                                    92378 2.00 Carat
                                    <br />
                                    Round
                                </div>{" "}
                                <div className="justify-center text-lime-400 text-sm leading-6 self-stretch mt-3.5">
                                    $19,890.00
                                </div>
                            </span>
                        </div>
                    </div>
                </div>{" "}
                <div className="self-stretch flex items-stretch justify-between gap-5 mt-3.5 max-md:max-w-full max-md:flex-wrap">
                    <div className="flex basis-[0%] flex-col items-stretch">
                        <div className="flex items-stretch justify-between gap-1 pr-20 max-md:pr-5">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/781895e5a49cd8409c143dc881d78561730fd03a8420227ae1b84e3449e5d25b?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                            />{" "}
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0527c4a4f45474d6f3f2fa397cd276854a260c1e38a441de7cfad5d66cbafbf?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                            />{" "}
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dd4ba8336526e51d0d34d6f573a814f62e7a5824df2b345eec341e714474d44?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                            />{" "}
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/20d7bc83-60d2-4122-bca5-1ba85b5a344f?apiKey=d15e42286684479bbc853a10c1e3f3db&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/20d7bc83-60d2-4122-bca5-1ba85b5a344f?apiKey=d15e42286684479bbc853a10c1e3f3db&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/20d7bc83-60d2-4122-bca5-1ba85b5a344f?apiKey=d15e42286684479bbc853a10c1e3f3db&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/20d7bc83-60d2-4122-bca5-1ba85b5a344f?apiKey=d15e42286684479bbc853a10c1e3f3db&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/20d7bc83-60d2-4122-bca5-1ba85b5a344f?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/20d7bc83-60d2-4122-bca5-1ba85b5a344f?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/20d7bc83-60d2-4122-bca5-1ba85b5a344f?apiKey=d15e42286684479bbc853a10c1e3f3db&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/20d7bc83-60d2-4122-bca5-1ba85b5a344f?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                className="aspect-[2.86] object-contain object-center w-[106px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                            />
                        </div>{" "}
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/446af5e84e450ab9accc582051cd4dfac4fa9c2bebd27b472a9c4d612de73bd2?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                            className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden max-w-full mt-1 self-start"
                        />
                    </div>{" "}
                    <div className="flex grow basis-[0%] flex-col items-stretch max-md:max-w-full">
                        <div className="flex w-full items-stretch justify-between gap-5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                            <div className="flex items-stretch justify-between gap-1">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe71d722e6fc7cb08c227110736b1fc443a943df55413ca49a13f5e7b009a93c?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />{" "}
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f67a08735b4283e46c7ab244ca4789a5d37ac813a3a73cbda0ff615f5e279681?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />{" "}
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb2c2446580a640e22bf30a8a711628a4d224adca8d675c6f532daa10cb0fbb9?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />{" "}
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/48f28698-ad99-4a4a-8215-70ce86a1fcc3?apiKey=d15e42286684479bbc853a10c1e3f3db&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/48f28698-ad99-4a4a-8215-70ce86a1fcc3?apiKey=d15e42286684479bbc853a10c1e3f3db&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/48f28698-ad99-4a4a-8215-70ce86a1fcc3?apiKey=d15e42286684479bbc853a10c1e3f3db&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/48f28698-ad99-4a4a-8215-70ce86a1fcc3?apiKey=d15e42286684479bbc853a10c1e3f3db&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/48f28698-ad99-4a4a-8215-70ce86a1fcc3?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/48f28698-ad99-4a4a-8215-70ce86a1fcc3?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/48f28698-ad99-4a4a-8215-70ce86a1fcc3?apiKey=d15e42286684479bbc853a10c1e3f3db&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/48f28698-ad99-4a4a-8215-70ce86a1fcc3?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-[2.86] object-contain object-center w-[106px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />
                            </div>{" "}
                            <div className="flex items-stretch justify-between gap-1">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bfe8b84b0d3ac397fb13c9cc4f36c22047c5c458be36f8f3a1cd8481c637dbc?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />{" "}
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/12bc3028856c512ab4544a23cbda76bac729f1e5c4a7e186026c2c184e68da23?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />{" "}
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c29f65155efccf3872c60c43623a4c44081bf5ff4c6bb5cbaa0fbb281bfb02b?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />{" "}
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1e6a1b8f-0bef-45b7-b71c-936edce23903?apiKey=d15e42286684479bbc853a10c1e3f3db&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e6a1b8f-0bef-45b7-b71c-936edce23903?apiKey=d15e42286684479bbc853a10c1e3f3db&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e6a1b8f-0bef-45b7-b71c-936edce23903?apiKey=d15e42286684479bbc853a10c1e3f3db&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e6a1b8f-0bef-45b7-b71c-936edce23903?apiKey=d15e42286684479bbc853a10c1e3f3db&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e6a1b8f-0bef-45b7-b71c-936edce23903?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e6a1b8f-0bef-45b7-b71c-936edce23903?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e6a1b8f-0bef-45b7-b71c-936edce23903?apiKey=d15e42286684479bbc853a10c1e3f3db&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e6a1b8f-0bef-45b7-b71c-936edce23903?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-[2.86] object-contain object-center w-[106px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />
                            </div>{" "}
                            <div className="flex items-stretch justify-between gap-1">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/507aa69c4a6d82a99c6be60737034c58459fbba9e007e75b7a1028c28423b6c1?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />{" "}
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/50575aa54069d3e660bdc38452f43b0ac5a9d3d559487ece30ec4d79a17c03fe?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />{" "}
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/03479193fb1f18cc7d970c2fe50e6403b386e9b8d7193aba5d7006eba2cdf53f?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />{" "}
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f403dfd2-469a-44df-85c6-a312fa06853d?apiKey=d15e42286684479bbc853a10c1e3f3db&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f403dfd2-469a-44df-85c6-a312fa06853d?apiKey=d15e42286684479bbc853a10c1e3f3db&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f403dfd2-469a-44df-85c6-a312fa06853d?apiKey=d15e42286684479bbc853a10c1e3f3db&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f403dfd2-469a-44df-85c6-a312fa06853d?apiKey=d15e42286684479bbc853a10c1e3f3db&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f403dfd2-469a-44df-85c6-a312fa06853d?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f403dfd2-469a-44df-85c6-a312fa06853d?apiKey=d15e42286684479bbc853a10c1e3f3db&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f403dfd2-469a-44df-85c6-a312fa06853d?apiKey=d15e42286684479bbc853a10c1e3f3db&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f403dfd2-469a-44df-85c6-a312fa06853d?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                    className="aspect-[2.86] object-contain object-center w-[106px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                                />
                            </div>
                        </div>{" "}
                        <div className="flex items-stretch justify-between gap-5 mt-1 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/60dc97205a70cc2b6e83897002d6b8917e03b931c92364947c776597f94fafa8?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                            />{" "}
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e094ba5e65ba8f781bb833fa3ac5a16e13900b6bb84026e7eb9f89580959500?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                            />{" "}
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1bf702c9f0eb0c8510777919f3b437c90bca654fd8ee906336159d25cb3057a?apiKey=d15e42286684479bbc853a10c1e3f3db&"
                                className="aspect-square object-contain object-center w-[37px] justify-center items-center shadow-sm overflow-hidden shrink-0 max-w-full"
                            />
                        </div>
                    </div>
                </div>{" "}
                </div> */}
                <div className="justify-center text-neutral-700 text-2xl font-bold leading-10 self-center whitespace-nowrap mt-20 max-md:mt-10">
                    Want Customize Diamonds?
                </div>{" "}
                <span className="justify-center text-white text-center text-base font-semibold leading-6 whitespace-nowrap items-stretch border bg-sky-600 ml-96 my-3 px-5 py-2 rounded border-solid border-sky-600 self-start max-md:ml-2.5">
                    Contact Us
                </span>
            </span>{" "}


        </div>

    )
}

export default ProductDetailsComponent