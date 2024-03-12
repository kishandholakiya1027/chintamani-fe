const RefundPolicy = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col mb-10">
        <span className="self-center flex w-full max-w-[1490px] flex-col mt-24">
          <div className="text-neutral-700 text-base font-semibold leading-6 self-center">
            Home
            <span className=" text-neutral-700">
              / Refund Policy
            </span>
          </div>
          <span className="flex w-[1150px] max-w-full flex-col items-stretch gap-5 mt-5 self-end max-md:flex-wrap">
            <div className="flex flex-col text-neutral-700 text-base leading-7 grow shrink basis-auto">
              <div className="mb-4 text-neutral-700 text-3xl font-bold leading-10  mt-16  max-md:mt-10">
                Refund Policy
              </div>
            </div>
          </span>
          <div className="text-neutral-700 leading-6 mt-4">
            At Chintamani Gems, we are committed to ensuring 100% client
            satisfaction. We take pride in the quality and craftsmanship of our
            products, manufactured in our state-of-the-art facilities, and we
            are confident that you will be fully delighted with your purchase.
          </div>
          <div className="text-neutral-700 text-base leading-7 self-stretch mt-2.5">
            - Jewelry with tags intact and in its original packaging may be
            returned or exchanged within 30 days.
            <br />
            - Return postage and insurance costs are the responsibility of the
            customer, except in cases of items supplied in error.
            <br />
            - Special orders and custom items are non-refundable.
            <br />
            - All returns must include the original sales receipt.
            <br />
            - The packing should be returned with all its contents intact.
            <br />
            - Insurance fees and shipping charges are non-refundable.
            <br />- Customers are responsible for paying taxes on ordered
            products, as tax regulations vary by country.
          </div>
          <div className="text-neutral-700 text-base leading-7 max-w-[1003px]  mt-2.5 self-start">
            Before returning any product, please send us an email at the return
            email address with the order number and details.
          </div>
          <div className="text-neutral-700 text-base leading-7 max-w-[1003px]  mt-2.5 self-start">
            As we conduct business across borders, each country has its own
            laws, standards, and customs procedures. Buyers must comply with
            these procedures and cooperate during any delays. If a package is
            detained by customs, Chintamani Gems is not liable for issuing
            refunds, as the item has already been dispatched.
          </div>
          <div className="text-neutral-700 text-base leading-7 max-w-[1003px]  mt-2.5 self-start">
            Note: Our website's product images are professionally photographed;
            there may be slight variations in color or design compared to the
            actual product received.
          </div>
        </span>
      </div>
    </div>
  );
};

export default RefundPolicy;
