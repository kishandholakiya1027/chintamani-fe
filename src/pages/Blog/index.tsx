import useApi from '@/hooks/useApi'
import { apiPath } from '@/lib/api-path'
import  { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { blogType } from '@/lib/interfaces/category'
const Index = () => {
    const { apiAction } = useApi()
    const [totalRecords, setTotalRecords] = useState(0);
    const [limit] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);
    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        getAllBlogs()
    }, [currentPage])

    const getAllBlogs = async () => {
        let data = await apiAction({ method: "get", url: `${apiPath?.blogs?.all}?page=${currentPage}&pageSize=${limit}` })
        if (data) {
            setBlogs(data?.data?.Blogdata)
            setTotalRecords(data?.data?.total)
        }
        console.log("🚀 ~ getAllBlogs ~ data:", data)
    }

    return (
        <div>

            <div className="flex flex-col container mx-auto px-5">

                <div className="self-center flex w-full max-w-[1490px] flex-col mt-9 items-end max-md:max-w-full">
                    <span className="justify-center text-indigo-950 text-base font-semibold leading-6 items-stretch self-stretch py-6 border-b-zinc-300 border-b border-solid max-md:max-w-full">
                        Home<span className="font-medium"> / Blog</span>
                    </span>
                    <div className="self-stretch mt-10 max-md:max-w-full max-md:mt-10 max-md:pr-5">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 flex-wrap">
                            {blogs?.map((blog:blogType) => {
                                return (
                                    <Link to={`/blog-details/${blog?.id}`}  className="flex flex-col mt-5 items-stretch w-[32%] max-md:w-full max-md:ml-0">
                                        <div className="shadow-lg bg-white flex grow flex-col items-stretch w-full pb-8 max-md:mt-3.5">
                                            <div className="flex flex-col justify-center items-stretch">
                                                <div className="flex-col overflow-hidden relative flex aspect-[1.5333333333333334] w-full pl-16 pr-3 pt-3 pb-12 items-end max-md:pl-5">
                                                    <img
                                                        loading="lazy"
                                                        srcSet={blog?.image}
                                                        className="absolute h-full w-full object-cover object-center inset-0"
                                                    />
                                                    <span className="relative justify-center text-white text-xs font-bold leading-4 whitespace-nowrap items-stretch bg-indigo-950 mb-24 px-3 py-3.5 max-md:mb-10">
                                                      {moment(blog?.createdAt).format('MMMM DD , YYYY')} 
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="flex flex-col items-stretch mt-5 px-5 max-md:pl-5">
                                                <div className="justify-center text-black text-2xl font-semibold leading-7">
                                                {blog?.heading}
                                                </div>
                                                <div className="justify-center text-indigo-950 text-sm font-medium leading-6 mt-3">
                                                {blog?.title}

                                                </div>
                                                <div className="justify-center text-black text-sm font-medium leading-5 mt-3">
                                                {blog?.description}
                                                </div>
                                                <div className=" text-indigo-950 text-sm font-medium leading-5 mt-6">
                                                <span className="justify-center text-indigo-950 hover:text-white hover:bg-indigo-950 cursor-pointer text-base font-semibold leading-4 items-stretch border mt-3.5 px-5 py-2 rounded-[20px] border-solid border-indigo-950 max-md:px-5">
                                                    Read More
                                                </span>

                                                </div>
                                            </span>
                                        </div>
                                    </Link>

                                )
                            })}
                            {/* <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                                <div className="shadow-lg bg-white flex grow flex-col items-stretch w-full pb-8 max-md:mt-3.5">
                                    <div className="flex flex-col justify-center items-stretch">
                                        <div className="flex-col overflow-hidden relative flex aspect-[1.5377777777777777] w-full pl-16 pr-3 pt-3 pb-12 items-end max-md:pl-5">
                                            <img
                                                loading="lazy"
                                                srcSet="..."
                                                className="absolute h-full w-full object-cover object-center inset-0"
                                            />
                                            <span className="relative justify-center text-white text-xs font-bold leading-4 whitespace-nowrap items-stretch bg-indigo-950 mb-24 px-3 py-3.5 max-md:mb-10">
                                                December 2, 2020
                                            </span>
                                        </div>
                                    </div>
                                    <span className="flex flex-col items-stretch mt-5 px-6 max-md:px-5">
                                        <div className="justify-center text-black text-2xl font-semibold leading-7">
                                            New Collection
                                        </div>
                                        <div className="justify-center text-indigo-950 text-sm font-medium leading-6 mt-5">
                                            Chintamanigems
                                        </div>
                                        <div className="justify-center text-black text-sm font-medium leading-5 max-w-[295px] mt-5">
                                            Jewellery or jewelry consists of decorative
                                            <br />
                                            items worn for personal adornment, such
                                            <br />
                                            as brooches, rings, necklaces, earrings,
                                            <br />
                                            pendants, bracelets, and cufflinks.
                                            <br />
                                            Jewellery may be attached to the body or
                                        </div>
                                        <span className="justify-center text-indigo-950 text-base font-semibold leading-4 items-stretch border mt-3.5 px-6 py-4 rounded-3xl border-solid border-indigo-950 max-md:px-5">
                                            Read More
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                                <div className="shadow-lg bg-white flex grow flex-col items-stretch w-full pb-8 max-md:mt-3.5">
                                    <div className="flex flex-col justify-center items-stretch">
                                        <div className="flex-col overflow-hidden relative flex aspect-[1.5377777777777777] w-full pl-16 pr-3 pt-3 pb-12 items-end max-md:pl-5">
                                            <img
                                                loading="lazy"
                                                srcSet="..."
                                                className="absolute h-full w-full object-cover object-center inset-0"
                                            />
                                            <span className="relative justify-center text-white text-xs font-bold leading-4 whitespace-nowrap items-stretch bg-indigo-950 mb-24 px-3 py-3.5 max-md:mb-10">
                                                December 2, 2020
                                            </span>
                                        </div>
                                    </div>
                                    <span className="flex flex-col items-stretch mt-5 px-6 max-md:px-5">
                                        <div className="justify-center text-black text-2xl font-semibold leading-7 whitespace-nowrap">
                                            Ruby on Rose Accessories
                                        </div>
                                        <div className="justify-center text-indigo-950 text-sm font-medium leading-6 mt-3.5">
                                            Chintamanigems
                                        </div>
                                        <div className="justify-center text-black text-sm font-medium leading-5 mt-5">
                                            A ruby is a pink to blood-red colored
                                            <br />
                                            gemstone, a variety of the mineral
                                            <br />
                                            corundum (aluminium oxide). Other
                                            <br />
                                            varieties of gem-quality corundum are
                                            <br />
                                            called sapphires. Ruby is one of the
                                        </div>
                                        <span className="justify-center text-indigo-950 text-base font-semibold leading-4 items-stretch border mt-3.5 px-6 py-4 rounded-3xl border-solid border-indigo-950 max-md:px-5">
                                            Read More
                                        </span>
                                    </span>
                                </div>
                            </div> */}
                        </div>
                    </div>

                </div>


            </div>





            <div className='mt-10'>
                <nav
                    aria-label="Page navigation"
                    className="flex justify-center items-center mb-[75px]"
                >
                    <ul className="flex items-center -space-x-px h-8 text-sm">
                        <ReactPaginate
                            previousLabel={"<"}
                            nextLabel={">"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={Math.ceil(totalRecords / limit)}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={4}
                            onPageChange={(val) => setCurrentPage(val.selected + 1)}
                            containerClassName={"pagination"}
                            activeClassName={"active"}
                        // forcePage={offset - 1}
                        />

                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Index