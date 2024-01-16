import useApi from '@/hooks/useApi'
import { apiPath } from '@/lib/api-path'
import { productType } from '@/lib/interfaces/category'
import React, { useEffect, useState } from 'react'
import ProductList from './common/ProductList'

const TrendingDiamond = () => {
    const { apiAction } = useApi()
    const [products, setProducts] = useState([])
    console.log("🚀 ~ TrendingDiamond ~ products:", products)
    useEffect(() => {
        getTrendingProducts()
    }, [])


    const getTrendingProducts = async () => {
        let data = await apiAction({ method: "get", url: `${apiPath?.product?.trendingProduct}` })
        setProducts(data?.data?.[0])
        console.log("🚀 ~ getTrendingProducts ~ data:", data)
    }

    return (
        <span className="flex flex-col items-stretch mt-28 px-5">
            <div className="justify-center text-neutral-700 text-3xl font-bold leading-10 w-full max-md:max-w-full">
                Trending Diamonds
            </div>
            {/* <div className="justify-center text-neutral-700 text-3xl font-bold leading-10 w-full mt-4 max-md:max-w-full">
                Related products
            </div> */}

            <div className="w-full mt-10 max-md:max-w-full max-md:pr-5">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <ProductList products={products} width="21%"/>
                    {/* {products?.map((product: productType) => {
                        return (

                            <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                                <span className="shadow-sm bg-white bg-opacity-0 flex grow flex-col items-center w-full pb-6 rounded-3xl max-md:mt-10">
                                    <img
                                        loading="lazy"
                                        srcSet={`${product?.productimage?.[0]}`}
                                        className="aspect-[0.87] object-contain object-center w-[218px] overflow-hidden"
                                    />
                                    <div className="justify-center text-indigo-950 text-base font-bold leading-7 ml-4 mt-6 max-md:ml-2.5">
                                       {product?.maintitle}
                                    </div>
                                    <div className="justify-center text-lime-400 text-sm leading-6 self-stretch mt-3.5">
                                        ${product?.price    }
                                    </div>
                                </span>
                            </div>
                        )
                    })} */}
                    {/* <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
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
                    </div> */}
                </div>
            </div>
            {/* <div className="flex w-full flex-col items-stretch mt-3.5 pl-11 max-md:max-w-full max-md:pl-5">
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
            </div> */}
        </span>
    )
}

export default TrendingDiamond