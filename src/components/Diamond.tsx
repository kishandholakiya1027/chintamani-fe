import { FC, useEffect, useState } from 'react'
import Slider from "react-slick";
import { Button } from './ui/button';
import useApi from '@/hooks/useApi';
import { apiPath } from '@/lib/api-path';
import { bannerType } from '@/lib/interfaces/category';

const Diamond: FC = () => {
    const {apiAction} = useApi()
    const [ banners, setBanners ] = useState([])
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };

    useEffect(() => {
        getBanners()
    }, [])

    const getBanners = async () => {
        let data = await apiAction({ method: "get", url: `${apiPath?.banners?.all}` })
        if (data) {
            setBanners(data?.data?.Blogdata)

        }
    }

    return (
        <div className='w-full diamond-sec'>
            <Slider {...settings}>
                {banners?.map((banner:bannerType)=>{
                    return (
                        <div>
                            <div className={` h-[631px] bg-no-repeat bg-cover !flex flex-col justify-center bg-center`} style={{ backgroundImage: `url('${banner?.image}')` }}>
                                <div className='lg:pl-[15%] md:pl-[12%] sm:pl-[9%] pl-[20px]'>
                                    <h1 className='text-[#fff] lg:text-[55px] md:text-[30px] text-[30px] font-medium'>{banner?.title}</h1>
                                    <div className='text-[#fff] text-[16px font-medium pt-[10px] lg:w-[440px] md:w-[440px] sm:w-[440px] w-full'>{banner?.description}</div>
                                    <Button variant={"secondary"} className='mt-[25px] hover:bg-[#211c50] font-poppins text-[17px] font-medium rounded-[10px] py-2 px-[25px] text-[#000] bg-[#fff] border-[1px] border-[#fff] outline-none hover:text-[#fff] hover:border-[#211c50]'>Purchase Now</Button>
                                </div>
                            </div>

                        </div>
                    )
                })}
                {/* <div className='bg-[url("../../public/assests/Images/b1slider.jpg")] min-h-[631px] bg-no-repeat bg-cover !flex flex-col justify-center bg-center'>
                    <div className='lg:pl-[15%] md:pl-[12%] sm:pl-[9%] pl-[20px]'>
                        <h1 className='text-[#fff] text-[55px] font-medium'>Diamond Jewelry</h1>
                        <div className='text-[#fff] text-[16px font-medium pt-[10px] lg:w-[440px] md:w-[440px] sm:w-[440px] w-full'>Chintamani Gems is presenting you with the best and Awesome collection of Diamond Jewelry in massive range. We have a unique collection of Engagement Rings, Wedding rings, Birthstone rings, Earrings for men, Bracelets, Pendants, Men’s jewelry, and Hip hop jewelry.</div>
                        <Button variant={"secondary"} className='mt-[25px] hover:bg-[#211c50] font-poppins text-[17px] font-medium rounded-[10px] py-2 px-[25px] text-[#000] bg-[#fff] border-[1px] border-[#fff] outline-none hover:text-[#fff] hover:border-[#211c50]'>Purchase Now</Button>
                    </div>
                </div>
                <div className='bg-[url("../../public/assests/Images/b2slider.jpg")] min-h-[631px] bg-no-repeat bg-cover !flex flex-col justify-center'>
                    <div className='lg:pl-[15%] md:pl-[12%] sm:pl-[9%] pl-[20px]'>
                        <h1 className='text-[#fff] text-[55px] font-medium'>Natural Diamonds</h1>
                        <div className='text-[#fff] text-[16px font-medium pt-[10px] lg:w-[440px] md:w-[440px] sm:w-[440px] w-full'>Beautiful, rare and formed billions years ago, directs from second generation diamond manufactorer & gemologists.
                            Calibrated & Assorted Natural diamonds that are perfect match for all kinds of find jewelry</div>
                        <Button variant={"secondary"} className='mt-[25px] font-poppins text-[17px] font-medium rounded-[10px] py-2 px-[25px] text-[#000] bg-[#fff] border-[1px] border-[#fff] outline-none hover:bg-[#211c50] hover:text-[#fff] hover:border-[#211c50]'>Purchase Now</Button>
                    </div>
                </div>
                <div className='bg-[url("../../public/assests/Images/bn-2slider.jpg")] min-h-[631px] bg-no-repeat bg-cover !flex flex-col justify-center'>
                    <div className='lg:pl-[15%] md:pl-[12%] sm:pl-[9%] pl-[20px]'>
                        <h1 className='text-[#fff] text-[55px] font-medium'>Diamond</h1>
                        <div className='text-[#fff] text-[16px font-medium pt-[10px] lg:w-[440px] md:w-[440px] sm:w-[440px] w-full'>Diamond, a mineral composed of pure carbon. It is the hardest naturally occurring substance known; it is also the most popular diamond. Because of their extreme hardness, diamonds have a number of important industrial applications.</div>
                        <Button variant={"secondary"} className='mt-[25px] font-poppins text-[17px] font-medium rounded-[10px] py-2 px-[25px] text-[#000] bg-[#fff] border-[1px] border-[#fff] outline-none hover:bg-[#211c50] hover:text-[#fff] hover:border-[#211c50]'>Purchase Now</Button>
                    </div>
                </div> */}
            </Slider>
        </div>
    )
}

export default Diamond
