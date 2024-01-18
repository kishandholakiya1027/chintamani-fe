import useApi from '@/hooks/useApi'
import { apiPath } from '@/lib/api-path'
import { useEffect, useState } from 'react'
import ProductList from './common/ProductList'

const TrendingDiamond = ({ product }: { product: any }) => {
    const { apiAction } = useApi()
    const [products, setProducts] = useState([])
    console.log("🚀 ~ TrendingDiamond ~ products:", products)
    useEffect(() => {
        getTrendingProducts()
    }, [])


    const getTrendingProducts = async () => {
        let params:any = {}

        if(product?.colour ||  product?.shape){
            params = {
                Color : JSON.stringify([product?.colour || ""]),
                shape: product?.shape
            }
        }else {
            params = {
                categoryid: product?.categoryid?.id
            }
        }
        let data = await apiAction({ method: "get", url: `${apiPath?.product?.trendingProduct}` , params })
        setProducts(data?.data?.[0])
    }

    return (
        <span className="flex flex-col items-stretch mt-28 trending-diamonds">
            <div className="justify-center text-neutral-700 text-3xl font-bold leading-10 w-full max-md:max-w-full">
                Trending Diamonds
            </div>
            {/* <div className="justify-center text-neutral-700 text-3xl font-bold leading-10 w-full mt-4 max-md:max-w-full">
                Related products
            </div> */}

            <div className="w-full mt-10 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <ProductList products={products} width="21%" slider={true} />
                </div>
            </div>
        </span>
    )
}

export default TrendingDiamond