import {  useSelector } from 'react-redux';
import BreadCrumb from './BreadCrumb';

const ProductHeader = ({ submitHandler }: any) => {
    const { category } = useSelector((state: any) => state?.category)
    return (
        <>
            <div className="pl-0 w-full border-b-[1px] border-[#eee] flex items-stretch justify-center flex-wrap mb-[80px]">
                <div className="w-full flex p-[20px] flex-col items-start flex-nowrap pl-[0] ">
                    <div>
                        <BreadCrumb submitHandler={submitHandler}/>
                    </div>
                </div>
            </div>
            <div className='mb-[50px]'>
                <p className="text-base font-normal font-poppins text-[#404040]">{category?.[category?.length - 1]?.description}</p>
            </div>
        </>
    );
}

export default ProductHeader