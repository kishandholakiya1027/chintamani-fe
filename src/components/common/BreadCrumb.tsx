import { breadCrumbType } from '@/lib/interfaces/category';
import { setCategory } from '@/redux/reducer/category';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BreadCrumb = ({ submitHandler }: any) => {
    const { category } = useSelector((state: any) => state?.category)
    const dispatch = useDispatch()
    const handleChange = async (item: breadCrumbType, index: number) => {
        dispatch(setCategory(category?.filter((_: any, i: number) => i <= index)))
        submitHandler(item, index)
    }
    return (<nav className="font-poppins text-[15px] text-[#211c50] font-medium before:table">
        <Link to={"/"}>Home</Link>
        {category?.map((item: breadCrumbType, index: number) => {
            return <>
                <span className="text-sm text-[#767676]">/</span>
                <button className={`font-poppins text-[15px] text-[#211c50] ${!item?.id ? "font-normal":"font-medium"} before:table ${category?.length === index + 1 || !item?.id ? "cursor-default" : "cursor-pointer"}  `} onClick={() => category?.length === index + 1 || !item?.id ? {} : handleChange(item, index)}>
                    {
                        /* <Link to={category?.path1 ? "/" : ""}> */
                    }
                    {item?.path}

                    {
                        /* </Link> */
                    }
                </button>
            </>;
        })}
    </nav>);
}

export default BreadCrumb