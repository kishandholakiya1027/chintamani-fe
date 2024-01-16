
interface IProps {
  open?:string
  setOpen:(val:string)=>void
  onSubmit:()=>void
  
}

const RemovePopup = ({setOpen,onSubmit}:IProps) => {
  return (
    <div x-show="open" className="fixed inset-0 px-2 z-30 overflow-hidden flex items-center justify-center ">
    <div x-show="open" onClick={() => setOpen("")}  x-transition:enter="transition-opacity ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition-opacity ease-in duration-300" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    <div x-show="open" x-transition:enter="transition-transform ease-out duration-300" x-transition:enter-start="transform scale-75" x-transition:enter-end="transform scale-100" x-transition:leave="transition-transform ease-in duration-300" x-transition:leave-start="transform scale-100" x-transition:leave-end="transform scale-75" className="bg-white rounded-md shadow-xl overflow-hidden max-w-md w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3 z-50">
      <div className="bg-[#211c50] text-white px-4 py-2 flex justify-between">
        <h2 className="text-lg font-semibold">Remove Item</h2>
      </div>
      <div className="p-4">
        <p>Are you sure you want to remove this item?</p>
      </div>
      <div className="border-t px-4 py-2 flex justify-end gap-4">
        <button onClick={() => setOpen("")} className="px-3 py-1 border-[#211c50] border text-[#211c50]  rounded-md w-full sm:w-auto"> Cancel </button>
        <button onClick={() => onSubmit()} className="px-3 py-1 bg-[#211c50] text-white  rounded-md w-full sm:w-auto"> Remove </button>
      </div>
    </div>
  </div>
  )
}

export default RemovePopup