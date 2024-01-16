import { Link } from "react-router-dom";
import diamondReport from "../../../public/assests/Images/rapaport_diamond_report.png";
import RightArrowIcon from "../../../public/assests/Icons/RightArrowIcon.svg";
import DiamondImg from "../../../public/assests/Images/Diamond-Price.png";

const DiamondPrice = () => {
  return (
    <div className="container">
      <div className="flex mt-[35px] md:py-[95px] w-fit mx-auto items-center gap-[5px] font-poppins text-[16px] font-[600] text-[#211c50]">
        <Link to={"/"}>Home</Link>
        <p>/</p>
        <Link to={"/diamond-price"} className="text-[#404040] font-[400]">
          Diamond Price
        </Link>
      </div>
      <div className="py-[95px]">
        <div>
          <h3 className="font-poppins text-[30px] font-[700] text-[#404040] ">
            Diamond Price & Value Per Carat List
          </h3>
          <p className="leading-[1.6] font-poppins text-[16px] font-[400] text-[#404040] ">
            Understanding diamond prices is a bit complex for newbies. Diamonds
            are valued on a per carat basis. Carat is a standard measurement
            unit for weight. Just, as kilograms or ounces for gold, the term
            “carat” is used with diamonds. 1-carat diamond weight equal to 200
            milligrams. Check the below link to know more about diamond carat or
            ignore & read further if you already know.
          </p>
          <p className="leading-[1.6] font-poppins text-[16px] font-[400] text-[#404040] ">
            I believe you have read the above article, as it’s important to know
            first about diamond carat and then about diamond pricing.
          </p>
        </div>
        <div>
          <h3 className="font-poppins text-[30px] font-[700] text-[#404040] ">
            How is Diamond Value Calculated in Trade?
          </h3>
          <p className="leading-[1.6] font-poppins text-[16px] font-[400] text-[#404040] ">
            Diamonds price is always calculated on a per carat basis, whether
            you buy 0.32 carat, 1.27 CT, or 3.04-carat diamond. Let do some math
            to make it easy. For example,
          </p>
          <p className="leading-[1.6] font-poppins text-[16px] font-[400] text-[#404040] ">
            Formula: Diamond Cost = Carat Weight * Price Per Carat
          </p>
          <p className="leading-[1.6] font-poppins text-[16px] font-[400] text-[#404040] ">
            Price for{" "}
            <span className="underline decoration-1">0.32 carat is 850$</span>{" "}
            per carat,{" "}
            <span className="underline decoration-1">1.27 carat is 1800$</span>{" "}
            per carat & price for 3.04 carat is 4100$ per carat which means :
          </p>
          <p className="leading-[1.6] font-poppins text-[16px] font-[400] text-[#404040] ">
            A ) 0.32 * 850 = 272$ Total for 0.32 ct{" "}
          </p>
          <p className="leading-[1.6] font-poppins text-[16px] font-[400] text-[#404040] ">
            B) 1.27 * 1800 = 2286$ Total for 1.27 ct{" "}
          </p>
          <p className="leading-[1.6] font-poppins text-[16px] font-[400] text-[#404040] ">
            C ) 3.04 * 4100 = 12464$ Total for 3.04 ct
          </p>
          <p className="leading-[1.6] font-poppins text-[16px] font-[400] text-[#404040] ">
            But all the major online diamond vendors display the total price, so
            you don’t have to do math all the time. If you buying a diamond from
            diamond manufacturers, prices are quoted per carat basis. So, make
            sure with a salesperson before taking any further decision.
          </p>
        </div>
        <div>
          <h3 className="font-poppins text-[30px] font-[700] text-[#404040] ">
            Who set these “Price Per Carat” values?
          </h3>
          <p className="leading-[1.6] font-poppins text-[16px] font-[400] text-[#404040] ">
            Most of you might be wondering, from where do these price per carat
            numbers come from? Well, there are two major organizations named{" "}
            <strong>RAPAPORT</strong> & <strong>IDEX</strong>. They set the
            price per carat from 0.01 to 10.00ct for D-to-N color and FL-to-I2
            clarity. However, the RAPAPORT diamond price list (RAP List) is most
            commonly used in all major countries. For{" "}
            <a
              href="/web/20230203132158/https://chintamanigems.com/diamonds-shapes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#211c50] font-[600]"
            >
              diamond shapes
            </a>{" "}
            like princess, oval, heart, etc. Rapaport releases a common price
            list for all fancy shapes and another list for{" "}
            <a
              href="/web/20230203132158/https://chintamanigems.com/diamonds-shapes/round/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#211c50] font-[600]"
            >
              round-shaped diamonds.
            </a>
          </p>
          <p className="leading-[1.6] font-poppins text-[16px] font-[400] text-[#404040] ">
            Before, the Rapaport price list was only available to trade members.
            But, now you can buy one at 50$ from the Rapaport website. These
            price lists are updated weekly based on demand, supply other
            factors. Don’t worry to buy a new price list every week as there are
            very few % changes or no changes. Or you can even simply comment
            below your diamond’s{" "}
            <a
              href="https://web.archive.org/web/20230203132158/https://chintamanigems.com/7-cs-of-diamond/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#211c50] font-[600]"
            >
              carat weight, color, clarity &amp; shape
            </a>
            . We don’t mind sharing the latest diamond price as per the RAPAPORT
            price list.
          </p>
          <div className="max-w-[600px] w-full">
            <img src={diamondReport} alt="diamondReport" className="w-full" />
          </div>
        </div>
        <div>
          <h3 className="font-poppins text-[30px] font-[700] text-[#404040] ">
            How To Read Diamond Price List?
          </h3>
          <p className="leading-[1.6] font-poppins text-[16px] font-[400] text-[#404040] ">
            So, above we have a sample copy of the Rapaport Price List. Let us
            learn how to read it. For eg, You have to check the price for 1.01
            carat, H color, VS2 clarity stone. To know the diamond price you
            need to know 3 things. Weight, Color, &{" "}
            <a
              href="/web/20230203132158/https://chintamanigems.com/4-cs-of-diamonds/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clarity of diamond.
            </a>
          </p>
          <p className="leading-[1.6] font-poppins text-[16px] font-[400] text-[#404040] ">
            As you can see on the above price list image there are different
            values for every diamond. Here we have 4 different carat weight
            segments which further can be read in a matrix. So, For 1.01 carat,
            we have to look at the 1.00-1.49 ct price segment. Then, check color
            & clarity verticality and horizontally within the matrix.
          </p>
          <p className="leading-[1.6] font-poppins text-[16px] font-[400] text-[#404040] ">
            All the values are in hundreds. So the price for 1.01 H VS2 is 6300
            USD per carat. This is an old price list just used for reference and
            example.{" "}
            <span className="underline decoration-1">
              The price per carat for 1.01 H VS2 is 7600 $ ar per the Latest
              RAPAPORT price list
            </span>
          </p>
        </div>
        <div>
          <h3 className="font-poppins text-[30px] font-[700] text-[#404040] ">
            Get Latest Diamond Prices
          </h3>
          <p className="leading-[1.6] font-poppins text-[16px] font-[400] text-[#404040] ">
            In order to know the latest Rapaport price you can comment below
            your diamond’s weight, shape color & clarity. We will revert back
            with the latest 2021 July diamond prices.
          </p>
          <strong className="leading-[1.6] font-poppins text-[16px] block text-[#000000] py-[16px]">
            These are not standard prices for the diamond, It’s just a base
            price list.
          </strong>
          <p className="leading-[1.6] font-poppins text-[16px] font-[400] text-[#404040] ">
            Rapaport price is the base price on which diamond dealers provide
            more discounts or ask premium depending on diamonds. This makes
            diamond dealers compete with each other.
          </p>
        </div>
        <div>
          <h3 className="font-poppins text-[30px] font-[700] text-[#404040] ">
            What is Back/Discount & Premium from Rapaport Diamond Pricelist?
          </h3>
          <p className="leading-[1.6] font-poppins text-[16px] font-[400] text-[#404040] ">
            <strong>A) Discount</strong> – Percentage of the discount applied to
            Rapaport base price. Term Discount, Back, Below, Less all are the
            same & commonly used in trade.
          </p>
          <strong className="leading-[1.6] font-poppins text-[16px] block text-[#000000] my-[16px]">
            These are not standard prices for the diamond, It’s just a base
            price list.
          </strong>
          <p className="leading-[1.6] font-poppins text-[16px] font-[400] text-[#404040] ">
            Rapaport price is the base price on which diamond dealers provide
            more discounts or ask premium depending on diamonds. This makes
            diamond dealers compete with each other.
          </p>
          <p className="leading-[1.6] my-[16px] font-poppins text-[16px] font-[400] text-[#404040] ">
            <strong>B) Premium</strong> – Percentage of addition in price from
            Rapaport base price. Means X% addition of list price. This happens
            in very fewer cases.
          </p>
          <strong className="leading-[1.6] font-poppins text-[16px] block text-[#000000] my-[16px]">
            RAPAPORT PRICE – % Discount = Price Per Carat * Diamond Carat weight
            = Total Price
          </strong>
          <p className="leading-[1.6] font-poppins text-[16px] font-[400] text-[#ff0000] my-[16px]">
            6300$ – 34% = 4158$ per carat price * 1.01 Carat weight = 4199.58
            Total price
          </p>
          <p className="leading-[1.6] font-poppins text-[16px] font-[400] text-[#404040] my-[16px]">
            One diamond dealer might provide 1.01 H Vs2 cheap at a 40% discount
            and others might provide at a 32% discount. WHY? Read further.
          </p>
          <p className="leading-[1.6] font-poppins text-[16px] font-[400] text-[#404040] my-[16px]">
            In case of premium, you have to add % to the Rapaport base price and
            multiply with carat weight for the total value. (opposite of
            discount, you have to pay more than list price)
          </p>
          <p className="leading-[1.6] font-poppins text-[16px] font-[400] text-[#3366ff]">
            <img
              src={RightArrowIcon}
              alt="RightArrowIcon"
              className="inline-block text-[#3366ff]"
            />{" "}
            Are you paying the right price ? not sure? use the chatbox on the
            screen and leave your diamond question with your email address. I
            will personally review your diamond question and assist you.
          </p>
        </div>
        <div>
          <h3 className="font-poppins text-[30px] font-[700] text-[#404040] ">
            Understanding Diamond Price & Find Real Value.
          </h3>
          <p className="leading-[1.6] font-poppins text-[16px] font-[400] text-[#404040] ">
            Pricing simply does not rely on the diamond’s color, clarity, and
            carat. There are a lot of other factors that determine a diamond’s
            value. Like, you can even buy GIA 0.50 ct I SI1 at 45% discount
            (cheapest) or another similar stone at 35% discount (expensive)
          </p>
        </div>
        <div>
          <h3 className="font-poppins text-[30px] font-[700] text-[#404040] ">
            What makes such a huge difference in pricing with similar certified
            diamonds?
          </h3>
          <p className="leading-[1.6] font-poppins text-[16px] font-[400] text-[#404040] ">
            Factors like diamond fluorescence, diamond cut, symmetry, polish,
            etc affect most. Another major factor that affects the diamond price
            is its “CLARITY”. A VS2 diamond with center black crystal will be
            cheaper and a VS2 diamond with eye-clean will cost more. Let see the
            below example screenshot from James Allen. How price changes despite
            all other things ( fluorescence, cut, polish, symmetry) remain the
            same. It’s due to NICE VS2 and BAD VS2 in simple words.
          </p>
          <div className="max-w-[743px] w-full">
            <img src={DiamondImg} alt="DiamondImg" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondPrice;
