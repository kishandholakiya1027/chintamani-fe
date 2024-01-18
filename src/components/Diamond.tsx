import { FC, useEffect, useState } from 'react'
import Slider from "react-slick";
import { Button } from './ui/button';
import useApi from '@/hooks/useApi';
import { apiPath } from '@/lib/api-path';
import { bannerType } from '@/lib/interfaces/category';
import { useDispatch } from "react-redux";
import { setCategory } from '@/redux/reducer/category';
import { useNavigate } from 'react-router-dom';

const Diamond: FC = () => {
    const { apiAction } = useApi()
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [banners, setBanners] = useState([])
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
                {banners?.map((banner: bannerType, index: number) => {
                    return (
                        <div key={index}>
                            <div className={`lg:h-[631px] md:h-[400px] h-[400px] bg-no-repeat bg-cover !flex flex-col justify-center bg-center`} style={{ backgroundImage: `url('${banner?.image}')` }}>
                                <div className='lg:px-[15%] md:px-[12%] sm:px-[9%] px-[20px]'>
                                    <h1 className='text-[#fff] lg:text-[55px] md:text-[30px] text-[30px] font-medium'>{banner?.title}</h1>
                                    <div className='text-[#fff] lg:text-[16px] md:text-[14px] text-[14px] font-medium pt-[10px] lg:w-[440px] md:w-[440px] sm:w-[440px] w-full'>{banner?.description}</div>
                                    <Button variant={"secondary"} className='mt-[25px] hover:bg-[#211c50] font-poppins text-[17px] font-medium rounded-[10px] py-2 px-[25px] text-[#000] bg-[#fff] border-[1px] border-[#fff] outline-none hover:text-[#fff] hover:border-[#211c50]' onClick={() => {
                                        navigate('/product-category');
                                        dispatch(setCategory([{ path: banner?.title, name: "categoryid" }]));
                                    }}>Purchase Now</Button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Diamond
