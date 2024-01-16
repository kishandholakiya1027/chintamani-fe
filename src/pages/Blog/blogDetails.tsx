import useApi from '@/hooks/useApi'
import { apiPath } from '@/lib/api-path'
import { blogType } from '@/lib/interfaces/category'
import moment from 'moment'
import  { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const BlogDetails = () => {
    const { apiAction } = useApi()
    const { id } = useParams()
    const [blog, setBlog] = useState<blogType>({})
    const [blogs, setBlogs] = useState([]);
    console.log("🚀 ~ BlogDetails ~ blogs:", blogs)

    useEffect(() => {
        getBlog()
    }, [id])



    useEffect(() => {
        getAllBlogs()
    }, [])

    const getAllBlogs = async () => {
        let data = await apiAction({ method: "get", url: `${apiPath?.blogs?.all}?page=1&pageSize=5` })
        if (data) {
            setBlogs(data?.data?.Blogdata?.filter((item: any) => item?.id !== (blog?.id || id))?.slice(0,3))
        }
        console.log("🚀 ~ getAllBlogs ~ data:", data)
    }

    const getBlog = async () => {
        const data = await apiAction({ method: "get", url: `${apiPath?.blogs?.blog}${id}` })
        setBlog(data?.data)
    }
    return (

        <div className="flex flex-col mt-4">

            <div className="flex-col justify-center text-white text-6xl font-medium leading-[88px] relative overflow-hidden self-stretch min-h-[448px] w-full pt-52 pb-40 px-16 items-start max-md:max-w-full max-md:text-4xl max-md:px-5 max-md:py-10">
                <img
                    loading="lazy"
                    srcSet={blog?.image}
                    className="absolute h-full w-full object-cover object-center inset-0"
                />
                {blog?.heading}
            </div>
            <div className="self-center container mx-auto px-6 flex w-full  flex-col items-stretch mt-14 max-md:max-w-full max-md:mt-10">
                <div className="max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
                            <span className="flex grow flex-col items-stretch pr-6 py-4 border-r-zinc-100 border-r border-solid max-md:max-w-full max-md:mt-5 max-md:pr-5">
                                <div className="justify-center text-indigo-950 text-3xl font-semibold leading-10 max-md:max-w-full">
                                    {blog?.heading}
                                </div>
                                <div className="justify-center text-indigo-950 text-sm leading-6 mt-2.5 max-md:max-w-full">
                                    Posted by {blog?.author?.firstname || ""} {blog?.author?.lastname || ''} on  {moment(blog?.createdAt).format('MMMM DD , YYYY')}
                                </div>
                                <div className="justify-center text-black text-sm leading-6 mt-9 max-md:max-w-full">
                                    {blog?.description}
                                </div>
                                {/* <div className="justify-center text-black text-sm leading-6 mt-6 max-md:max-w-full">
                                   {blog?.content}
                                </div> */}
                            </span>
                        </div>{" "}
                        <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
                            <span className="flex flex-col mt-5 items-end max-md:max-w-full max-md:mt-10">
                                <div className="justify-center text-black text-2xl font-medium leading-10 self-stretch max-md:max-w-full">
                                    Related Post
                                </div>{" "}
                                <div className="justify-center text-indigo-950 text-base font-semibold leading-7 self-stretch mt-2 max-md:max-w-full">
                                {blogs?.map((blog:blogType) => {
                                    return(
                                        <Link to={`/blog-details/${blog?.id}`}  className='mb-1' >
                                            {blog?.heading}
                                            <br/>
                                        </Link>
                                    )
                                })}
                                    {/* The Engagement Ring
                                    New Collection
                                    <br />
                                    Ruby on Rose Accessories */}
                                </div>{" "}
                              
                            </span>
                        </div>
                    </div>
                </div>{" "}
                <div className="my-24 max-md:max-w-full max-md:mt-10 max-md:pr-5">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        {blogs?.map((blog:blogType) => {
                            return (
                                <Link to={`/blog-details/${blog?.id}`} className="flex flex-col mt-5 items-stretch w-[32%] max-md:w-full max-md:ml-0">
                                    <div className="shadow-lg bg-white flex grow flex-col items-stretch w-full pb-8 max-md:mt-3.5">
                                        <div className="flex flex-col justify-center items-stretch">
                                            <div className="flex-col overflow-hidden relative flex aspect-[1.5333333333333334] w-full pl-16 pr-3 pt-3 pb-12 items-end max-md:pl-5">
                                                <img
                                                    loading="lazy"
                                                    srcSet={blog?.image}
                                                    className="absolute h-full max-md:h-full max-md:w-full object-cover object-center inset-0"
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
                        {/* <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                            <div className="shadow-lg bg-white flex grow flex-col items-stretch w-full pb-8 max-md:mt-4">
                                <div className="flex flex-col justify-center items-stretch">
                                    <div className="flex-col overflow-hidden relative flex aspect-[1.536480686695279] w-full pl-16 pr-3 pt-3 pb-12 items-end max-md:pl-5">
                                        <img
                                            loading="lazy"
                                            srcSet="..."
                                            className="absolute h-full w-full object-cover object-center inset-0"
                                        />{" "}
                                        <span className="relative justify-center text-white text-xs font-bold leading-4 whitespace-nowrap items-stretch bg-indigo-950 mb-24 px-3 py-3.5 max-md:mb-10">
                                            December 2, 2020
                                        </span>
                                    </div>
                                </div>{" "}
                                <span className="flex flex-col mt-5 px-5 max-md:pl-5">
                                    <div className="justify-center text-black text-2xl font-semibold leading-7 self-stretch">
                                        The Engagement Ring
                                    </div>{" "}
                                    <div className="justify-center text-indigo-950 text-sm leading-6 self-stretch mt-3.5">
                                        Chintamanigems
                                    </div>{" "}
                                    <div className="justify-center text-black text-sm leading-5 self-stretch max-w-[316px] mt-5">
                                        An engagement ring is a ring indicating that
                                        <br />
                                        the person wearing it is engaged to be
                                        <br />
                                        married, especially in Western cultures. A ring
                                        <br />
                                        is presented as an engagement gift by a<br />
                                        partner to their prospective spouse when
                                    </div>{" "}
                                    <span className="justify-center text-indigo-950 text-sm font-semibold leading-3 whitespace-nowrap items-stretch border mt-3.5 px-5 py-3.5 rounded-3xl border-solid border-indigo-950 self-start max-md:pr-5">
                                        Read More
                                    </span>
                                </span>
                            </div>
                        </div>{" "}
                        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="shadow-lg bg-white flex grow flex-col items-stretch w-full pb-8 max-md:mt-4">
                                <div className="flex flex-col justify-center items-stretch">
                                    <div className="flex-col overflow-hidden relative flex aspect-[1.5407725321888412] w-full pl-16 pr-3 pt-3 pb-12 items-end max-md:pl-5">
                                        <img
                                            loading="lazy"
                                            srcSet="..."
                                            className="absolute h-full w-full object-cover object-center inset-0"
                                        />{" "}
                                        <span className="relative justify-center text-white text-xs font-bold leading-4 whitespace-nowrap items-stretch bg-indigo-950 mb-24 px-3 py-3.5 max-md:mb-10">
                                            December 2, 2020
                                        </span>
                                    </div>
                                </div>{" "}
                                <span className="flex flex-col mt-5 px-6 max-md:px-5">
                                    <div className="justify-center text-black text-2xl font-semibold leading-7 self-stretch">
                                        New Collection
                                    </div>{" "}
                                    <div className="justify-center text-indigo-950 text-sm leading-6 self-stretch mt-5">
                                        Chintamanigems
                                    </div>{" "}
                                    <div className="justify-center text-black text-sm leading-5 self-stretch max-w-[308px] mt-5">
                                        Jewellery or jewelry consists of decorative
                                        <br />
                                        items worn for personal adornment, such as
                                        <br />
                                        brooches, rings, necklaces, earrings,
                                        <br />
                                        pendants, bracelets, and cufflinks. Jewellery
                                        <br />
                                        may be attached to the body or the clothes.
                                    </div>{" "}
                                    <span className="justify-center text-indigo-950 text-sm font-semibold leading-3 whitespace-nowrap items-stretch border mt-3.5 px-5 py-3.5 rounded-3xl border-solid border-indigo-950 self-start max-md:pr-5">
                                        Read More
                                    </span>
                                </span>
                            </div>
                        </div>{" "}
                        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="shadow-lg bg-white flex grow flex-col items-stretch w-full pb-8 max-md:mt-4">
                                <div className="flex flex-col justify-center items-stretch">
                                    <div className="flex-col overflow-hidden relative flex aspect-[1.536480686695279] w-full pl-16 pr-3 pt-3 pb-12 items-end max-md:pl-5">
                                        <img
                                            loading="lazy"
                                            srcSet="..."
                                            className="absolute h-full w-full object-cover object-center inset-0"
                                        />{" "}
                                        <span className="relative justify-center text-white text-xs font-bold leading-4 whitespace-nowrap items-stretch bg-indigo-950 mb-24 px-3 py-3.5 max-md:mb-10">
                                            December 2, 2020
                                        </span>
                                    </div>
                                </div>{" "}
                                <span className="flex flex-col mt-5 px-5 max-md:px-5">
                                    <div className="justify-center text-black text-2xl font-semibold leading-7 self-stretch whitespace-nowrap">
                                        Ruby on Rose Accessories
                                    </div>{" "}
                                    <div className="justify-center text-indigo-950 text-sm leading-6 self-stretch mt-3.5">
                                        Chintamanigems
                                    </div>{" "}
                                    <div className="justify-center text-black text-sm leading-5 self-stretch max-w-[315px] mt-5">
                                        A ruby is a pink to blood-red colored
                                        <br />
                                        gemstone, a variety of the mineral corundum
                                        <br />
                                        (aluminium oxide). Other varieties of gem-
                                        <br />
                                        quality corundum are called sapphires. Ruby
                                        <br />
                                        is one of the traditional cardinal gems,
                                    </div>{" "}
                                    <span className="justify-center text-indigo-950 text-sm font-semibold leading-3 whitespace-nowrap items-stretch border mt-3.5 px-5 py-3.5 rounded-3xl border-solid border-indigo-950 self-start max-md:pr-5">
                                        Read More
                                    </span>
                                </span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>{" "}

        </div>


    )
}

export default BlogDetails