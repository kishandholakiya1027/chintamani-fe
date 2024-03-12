const ShippingPolicy = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col mb-10">
        <span className="self-center flex w-full max-w-[1490px] flex-col mt-24">
          <div className="text-neutral-700 text-base font-semibold leading-6 self-center">
            Home<span className=" text-neutral-700"> / Shipping Policy</span>
          </div>
          <span className="flex w-[1150px] max-w-full flex-col items-stretch gap-5 mt-5 self-end max-md:flex-wrap">
            <div className="flex flex-col text-neutral-700 text-base leading-7 grow shrink basis-auto">
              <div className="mb-4 text-neutral-700 text-3xl font-bold leading-10  mt-16  max-md:mt-10">
                Shipping Policy
              </div>
            </div>
          </span>
          <div className="text-neutral-700 leading-6 mt-4">
            At Chintamani Gems, we strive to provide a hassle-free jewelry
            shopping experience, including efficient shipping services
            worldwide.
          </div>
          <div className="text-neutral-700 text-base leading-7 self-stretch mt-2.5">
            - For orders over $1000, we offer free shipping.
            <br />
            - We ship worldwide and offer door-step delivery.
            <br />
            - Shipping charges apply to orders below $1000, except for the
            United States.
            <br />
            - The shipping cost ranges from $60 to $80.
            <br />
            - No extra charges apply for additional items shipped on the
            combined invoice.
            <br />
            - Standard shipping time is 11-15 working days.
            <br />- Fast Shipping Service ensures delivery within 9-10 working
            days.
          </div>
          <div className="text-neutral-700 text-base leading-7 max-w-[1003px]  mt-2.5 self-start">
            "Get a gift that will serve as a lasting reminder of your love."
          </div>
          <div className="text-neutral-700 text-3xl font-bold leading-10 self-stretch mt-48">
            Tracking Your Order
          </div>
          <div className="text-neutral-700 leading-6 mt-4">
            Once your order is ready to be shipped, we will send you an email
            with your tracking information so you can track your order's
            progress.
          </div>
          <div className="text-neutral-700 text-base leading-7 max-w-[1003px]  mt-2.5 self-start">
            If you do not receive this information within the stated handling
            time (5-6 days) after making your payment, please contact us at
            info@chintamanigems.com.
          </div>
        </span>
      </div>
    </div>
  );
};

export default ShippingPolicy;
