import  { useEffect, useState } from 'react'
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";
import { Button } from '../ui/button';
import { diamondProperty } from '@/lib/interfaces/category';
import { apiPath } from '@/lib/api-path';
import useApi from '@/hooks/useApi';

const Sidebar = ({ setFilter, filter }: any) => {
  const [colors, setColors] = useState([]);
  const [cuts, setCuts] = useState([]);
  const [clarities, setClarities] = useState([]);
  const { apiAction } = useApi()
  useEffect(() => {
    getColors()
    getCuts()
    getClarity()
  }, [])

  const getColors = async () => {
    const data = await apiAction({ method: "get", url: `${apiPath?.color?.all}` })
    setColors(data?.data?.Colordata)
  }
  const getCuts = async () => {
    const data = await apiAction({ method: "get", url: `${apiPath?.cuts?.all}` })
    setCuts(data?.data?.Cutdata)
  }
  const getClarity = async () => {
    const data = await apiAction({ method: "get", url: `${apiPath?.clarity?.all}` })
    setClarities(data?.data?.Claritydata)
  }

  const changeFilter = (name: string, value: string) => {
    if (filter?.[name]?.includes(value)) {
      setFilter({ ...filter, [name]: filter?.[name]?.filter((item: string) => item !== value) })
    } else
      setFilter({ ...filter, [name]: [...filter?.Color || [], value] })
  }

  return (<div className="w-[20%] px-[0] border-r-[1px] border-[#eee] py-[20px] flex flex-col flex-nowrap items-start">
    <div className="w-full mt-[0]">
      <div>
        <div className="py-[15px]  border-t-[1px] border-[#eee]">
          <div>
            <div className="mt-[20px] text-left text-[16px] text-[#000] font-poppins font-medium uppercasemb mb-[15px]">
              Price
            </div>
            <MultiRangeSlider min={0} max={13060} step={1} subSteps={true} minValue={filter?.minPrice} maxValue={filter?.maxPrice||13060} onInput={() => {
              // props.setMinValue(e.minValue);
              // props.setMaxValue(e.maxValue);
            }} onChange={(e: ChangeResult) => {
              setFilter({ ...filter, minPrice: e.minValue, maxPrice: e.maxValue })
              // props.setMinValue2(e.minValue);
              // props.setMaxValue2(e.maxValue);
            }} />
            {/* <MultiRangeSlider min={filter?.minPrice} max={filter?.maxPrice} step={1} subSteps={true} minValue={0} maxValue={13060} onInput={() => {
              // props.setMinValue(e.minValue);
              // props.setMaxValue(e.maxValue);
            }} onChange={(e: ChangeResult) => {
              setFilter({ ...filter, minPrice: e.minValue, maxPrice: e.maxValue })
              // props.setMinValue2(e.minValue);
              // props.setMaxValue2(e.maxValue);
            }} /> */}
          </div>
        </div>
        <div className="py-[15px] border-t-[1px] border-b-[1px] border-[#eee]">
          <div>
            <div className="mt-[20px] text-left text-[16px] text-[#000] font-poppins font-medium uppercasemb mb-[15px]">
              Cart
            </div>
            <MultiRangeSlider min={0} max={100} step={5} subSteps={true} minValue={filter?.mincarat} maxValue={filter?.maxcarat||100} onInput={() => {
              // props.setMinValue(e.minValue);
              // props.setMaxValue(e.maxValue);
            }} onChange={(e: ChangeResult) => {
              if (Object.keys(filter)?.length)
                setFilter({ ...filter, mincarat: e.minValue, maxcarat: e.maxValue })



              // props.setMinValue2(e.minValue);
              // props.setMaxValue2(e.maxValue);
            }} />
          </div>
        </div>
        <div className="py-[15px] border-b-[1px] border-[#eee]">
          <div>
            <div className="mt-[20px] text-left text-[16px] text-[#000] font-poppins font-medium uppercasemb mb-[15px]">
              CLARITY
            </div>
            <div className="grid grid-cols-3 gap-[5px]">
              {clarities?.map((clarity: diamondProperty) => {
                return <Button
                  onClick={() => changeFilter("Clarity", clarity?.name)}
                  variant={"outline"}
                  className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] w-[58px] py-[8px] px-[2px]"
                >
                  {clarity?.name}
                </Button>
              })}

            </div>
            {/* <div className="flex gap-[5px]">
              <Button variant={"outline"} className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] w-[58px] py-[8px] px-[2px]">
                IF
              </Button>
              <Button variant={"outline"} className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] py-[8px] px-[2px] w-[58px]">
                S11
              </Button>
              <Button variant={"outline"} className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] py-[8px] px-[2px] w-[58px]">
                S12
              </Button>
            </div>
            <div className="flex gap-[5px] mt-[10px]">
              <Button variant={"outline"} className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] w-[58px] py-[8px] px-[2px]">
                VS1
              </Button>
              <Button variant={"outline"} className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] py-[8px] px-[2px] w-[58px]">
                VS2
              </Button>
              <Button variant={"outline"} className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] py-[8px] px-[2px] w-[58px]">
                VVS1
              </Button>
            </div>
            <div className="flex gap-[5px] mt-[10px]">
              <Button variant={"outline"} className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] w-[58px] py-[8px] px-[2px]">
                VVS2
              </Button>
            </div> */}
          </div>
        </div>
        <div className="py-[15px] border-b-[1px] border-[#eee]">
          <div>
            <div className="mt-[20px] text-left text-[16px] text-[#000] font-poppins font-medium uppercasemb mb-[15px]">
              CUT
            </div>
            <div className="grid grid-cols-3 gap-[5px]">
              {cuts?.map((cut: diamondProperty) => {
                return <Button
                  onClick={() => changeFilter("Cut", cut?.name)}
                  variant={"outline"}
                  className="border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] w-[58px] py-[8px] px-[2px]"
                >
                  {cut?.name}
                </Button>
              })}

            </div>

          </div>
        </div>
        <div className="py-[15px] border-b-[1px] border-[#eee]">
          <div>
            <div className="mt-[20px] text-left text-[16px] text-[#000] font-poppins font-medium uppercasemb mb-[15px]">
              COLOR
            </div>
            <div className="grid grid-cols-4 gap-[5px]">

              {colors?.map((color: diamondProperty) => {
                return <Button
                  onClick={() => changeFilter("Color", color?.name)}

                  variant={"outline"}
                  className={`border-[#211c50] hover:bg-[#211c50] hover:text-[#fff] text-[#211c50] w-[50px] py-[8px] px-[2px]`}
                >
                  {color?.name}

                </Button>
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>);
}

export default Sidebar