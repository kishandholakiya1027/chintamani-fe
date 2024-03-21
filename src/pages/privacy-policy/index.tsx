import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col mb-10">
        <span className="self-center flex w-full max-w-[1490px] flex-col">
          <div className="flex mt-[35px] items-center gap-[5px] font-poppins text-[15px] font-[500] text-[#211c50] py-[20px] border-b-[1px] border-solid border-[#d6d6d9]">
            <Link to={"/"}>Home</Link>
            <p>/</p>
            <Link to={"/privacy-policy"}>Privacy Policy</Link>
          </div>
          <span className="flex w-[1150px] max-w-full flex-col items-stretch gap-5 self-end max-md:flex-wrap">
            <div className="flex flex-col text-neutral-700 text-base leading-7 grow shrink basis-auto">
              <div className="mb-4 text-neutral-700 text-3xl font-bold leading-10  mt-16  mt-[46px]">
                Privacy Policy
              </div>
            </div>
          </span>
          <div className="text-neutral-700 leading-6 mt-4">
            At Chintamani Gems, we value your privacy and are committed to
            protecting your personal information. This privacy policy outlines
            how we collect, use, and safeguard the information you provide when
            using our website.
          </div>
          <div className="text-neutral-700 text-base leading-7 self-stretch mt-2.5">
            We may collect the following information:
            <br />
            1. Name
            <br />
            2. Contact information including email address
            <br />
            3. Demographic information such as postcode, preferences, and
            interests
            <br />
            4. Other information relevant to customer surveys and/or offers
          </div>
          <div className="text-neutral-700 text-base leading-7 max-w-[1003px]  mt-2.5 self-start">
            We require this information to understand your needs and provide you
            with a better service, and in particular for the following reasons:
            <br />
            - Internal record keeping
            <br />
            - Improving our products and services
            <br />- Sending promotional emails about new products, special
            offers, or other information which we think you may find interesting
            using the email address which you have provided
          </div>
          <div className="text-neutral-700 text-base leading-7 max-w-[1003px]  mt-2.5 self-start">
            We are committed to ensuring that your information is secure. In
            order to prevent unauthorized access or disclosure, we have put in
            place suitable physical, electronic, and managerial procedures to
            safeguard and secure the information we collect online.
          </div>
          <div className="text-neutral-700 text-base leading-7 max-w-[1003px]  mt-2.5 self-start">
            Our privacy policy may change from time to time, and any updates
            will be posted on this page. We encourage you to check this page
            periodically to review any changes. If you have any questions or
            concerns about our privacy policy, please feel free to contact us.
          </div>
        </span>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
