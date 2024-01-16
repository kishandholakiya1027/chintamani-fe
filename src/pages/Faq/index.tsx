import { useState } from "react"

const Index = () => {
    const [open, setOpen] = useState([1])

    const faqsArray = [
        {
            question: "Who we are? Chintamanigems Diamonds",
            answer: "We are the manufacturer of diamond and jewelry. Our founders have got more than 50 years of experience in the Diamond industry. We are having our own diamond cutting and polishing unit with more than 120 workers. here, we are also having our hand-made jewelry unit and CAD/CAM-orient latest jewelry manufacturing unit. We import the rough diamond and cut and polish the fine diamond to be in a stud in the jewelry. So, Our major part of sales is loose diamonds. We specialize in manufacturing any brand jewelry as per the custom orders and sizes"
        },
        {
            question: "Handling Time",
            answer: "Chintamanigems diamonds keep almost 80% of its item in stock, that includes diamonds, gemstones. And also the regular fast selling items which would ship almost on the same day. Other jewelry items, or customized items we need to have a time from 3 to 7 working days to make it as per your parameters. So, Holidays/Indian festival and weekends not counted."
        },
        {
            question: "Customer Delight",
            answer: "Need help Think we could have done something better We are listening and happy to do what we can to improve. So, please let us know. We can be in reach at info@chintamanigems.com or at +91 9327812738 between 9am-9pm, 6 days a week. "
        },
    ]

    return (
        <div className="container mx-auto ">

            <span className="self-center flex w-full max-w-[1454px] flex-col items-center my-20 max-md:max-w-full max-md:mt-10">
                <div className="justify-center text-neutral-700 text-base font-semibold leading-6 whitespace-nowrap">
                    Home<span className=" text-neutral-500"> / FAQ</span>
                </div>
                <div className="justify-center text-neutral-700 text-2xl font-bold leading-10 whitespace-nowrap mt-32 max-md:mt-10">
                    Table of Contents
                </div>
                <div className="justify-center text-black text-base font-semibold leading-7 mt-4">
                    General Options
                    <br />
                   <a href="#question-1" onClick={() => setOpen([...open, 2])}>
                    User Account

                   </a>
                    <br />
                    Shipping Methods
                    <br />
                    Troubleshooting
                </div>
                <div className="justify-center  mb-1.5 text-neutral-700 text-3xl font-bold leading-10 self-stretch mt-14 max-md:max-w-full max-md:mt-10">
                    Frequently Asked Questions
                </div>
                {faqsArray?.map(({ question, answer }, i) => (
                    <div id={`question-${i + 1}`} className="justify-center items-stretch border-t-neutral-200 self-stretch flex flex-col  py-7 border-t border-solid max-md:max-w-full">
                        <span className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                            <div className="justify-center text-neutral-700 text-2xl font-bold leading-6 grow shrink basis-auto max-md:max-w-full">
                                {question}
                            </div>
                            {open?.includes(i + 1) ? <div className="stroke-[1px] stroke-indigo-950 flex aspect-square flex-col justify-center items-stretch px-1.5 py-2.5 self-start" onClick={() => setOpen(open?.filter((item: any) => item !== i + 1))}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                            </div> : 
                                <div className="stroke-[1px] stroke-indigo-950 flex aspect-square flex-col justify-center items-stretch px-1.5 py-2.5 self-start" onClick={() => setOpen([...open, i + 1])}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                                </div>}
                        </span>

                        {open?.includes(i + 1) ? <span className="flex items-stretch justify-between gap-5 mt-7 max-md:max-w-full max-md:flex-wrap">
                            <div className="justify-center text-neutral-700 text-base leading-7 grow shrink basis-auto max-md:max-w-full">
                                {answer}
                            </div>

                        </span> : null}
                    </div>

                ))}
            
            </span>
        </div>



    )
}

export default Index