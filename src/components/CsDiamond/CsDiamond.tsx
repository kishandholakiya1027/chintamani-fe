import { Link } from "react-router-dom";
import image1 from "/assests/Images/igi_Logo..png";
import image2 from "/assests/Images/gia_Logo.png";
import DiamondEducation_Contour from "/assests/Images/DiamondEducation_Contour.jpg";
import DiamondEducation_Cost from "/assests/Images/DiamondEducation_Cost.jpg";
import DiamondEducation_BottomBanner_Desktop from "/assests/Images/DiamondEducation_BottomBanner_Desktop.jpg";

const CsDiamond = () => {
  return (
    <div className="container">
      <div className="flex mt-[35px] items-center gap-[5px] font-poppins text-[15px] font-[500] text-[#211c50] py-[20px] border-b-[1px] border-solid border-[#d6d6d9]">
        <Link to={"/"}>Home</Link>
        <p>/</p>
        <Link to={"/cs-diamond"}>7 C’s of Diamond</Link>
      </div>
      <div className="mt-[46px]">
        <div className="mb-[40px]">
          <h2 className="mb-[10px] font-poppins text-[23px] font-[600] text-[#000000]">
            Diamond Education:
          </h2>
          <p className="leading-[1.6] mb-[5px] font-poppins text-[15px] font-[400] text-[#4e4e4e] ">
            In order to get the perfect diamond for your engagement rings there
            are several factors to consider. You’ve read about the 4Cs of
            diamond education but let us guide you through our 7Cs to help you
            find the one.
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-[40px] mb-[70px]">
          <div className="md:w-[50%]">
            <iframe
              width="100%"
              height="293"
              src="https://www.youtube.com/embed/EmwmmzK1A_A?si=mpFT3E0aldIDMSLZ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div>
              <h3 className="text-[#000000] font-poppins text-[23px] mb-[10px] mt-[7px] font-[600]">
                Carat
              </h3>
              <p className="text-[#4e4e4e] font-poppins text-[15px] font-[400] leading-[1.6]">
                Pretty things may come in small boxes, but what’s in those boxes
                better be big. That is, yes, size does matter. However - carat
                weight is not the same thing as size - how large a diamond
                appears is also dictated by other factors such as shape and cut,
                so it is important to understand carat weight beyond the value
                it is generally and often mistakenly ascribed.
              </p>
            </div>
          </div>
          <div className="md:w-[50%]">
            <iframe
              width="100%"
              height="293"
              src="https://www.youtube.com/embed/EmwmmzK1A_A?si=mpFT3E0aldIDMSLZ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div>
              <h3 className="text-[#000000] font-poppins text-[23px] mb-[10px] mt-[7px] font-[600]">
                Cut
              </h3>
              <p className="text-[#4e4e4e] font-poppins text-[15px] font-[400] leading-[1.6]">
                Far more than simply what shape a rough diamond has been
                polished into, the cut is the most important determiner of a
                diamond’s brilliance and light dispersion. Diamond cutting is an
                art requiring meticulous precision, and knowing how it all works
                is essential to making the right choice
              </p>
            </div>
          </div>
        </div>
        <div className="md:px-[50px] mb-[70px]">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/PVfzIUXt8gA?si=Qmo8TwmiOXL1Qq6O"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="text-center">
            <h3 className="text-[#000000] font-poppins text-[23px] mb-[10px] mt-[7px] font-[600]">
              Colour
            </h3>
            <p className="text-[#4e4e4e] font-poppins text-[15px] font-[400] leading-[1.6]">
              Colour grades actually refer to a lack of colour in a diamond,
              with the whitest grade being D, and that’s D for most desirable.
              However, even experts sometimes fail to tell the difference
              between some clarity grades, so unless it’s important for you what
              the letter on the certificate reads, you can often get away with
              lower grades
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-[40px] mb-[70px]">
          <div className="md:w-[50%]">
            <div className="flex mb-[81px]">
              <img src={image2} alt="image2" className="max-w-[50%]" />
              <img src={image1} alt="image1" className="max-w-[50%]" />
            </div>
            <div>
              <h3 className="text-[#000000] font-poppins text-[23px] mb-[10px] font-[600]">
                Certification
              </h3>
              <p className="text-[#4e4e4e] font-poppins text-[15px] font-[400] leading-[1.6]">
                Diamond certificates are issued to confirm a stone's technical
                characteristics, value and identity, but it is important to know
                and understand the differences between the grading bodies as
                they operate on difference standards.
              </p>
            </div>
          </div>
          <div className="md:w-[50%]">
            <iframe
              width="100%"
              height="293"
              src="https://www.youtube.com/embed/6zvvOkSQwLA?si=fd6Yo5Z176FUVKD2"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div>
              <h3 className="text-[#000000] font-poppins text-[23px] mb-[10px] mt-[7px] font-[600]">
                Clarity
              </h3>
              <p className="text-[#4e4e4e] font-poppins text-[15px] font-[400] leading-[1.6]">
                Almost all diamonds have small impurities or “inclusions,” but
                they are not always visible to the naked eye. The size and
                location of the inclusions play a significant role in
                determining the price of a diamond so it is important to
                understand clarity grades in order to make the most suitable
                choice
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[40px]">
          <div className="md:w-[50%]">
            <img
              src={DiamondEducation_Contour}
              alt="DiamondEducation_Contour"
              className="max-w-full w-full h-[234px]"
            />
            <div>
              <h3 className="text-[#000000] font-poppins text-[23px] mb-[10px] font-[600]">
                Contour
              </h3>
              <p className="text-[#4e4e4e] font-poppins text-[15px] font-[400] leading-[1.6]">
                Elegant or eccentric, sparkly or subtle? From the ever popular
                round brilliant to the more unusual Marquise cut, diamonds come
                in all shapes and sizes and there is sure to be one to suit
                every taste and style.
              </p>
            </div>
          </div>
          <div className="md:w-[50%]">
            <img
              src={DiamondEducation_Cost}
              alt="DiamondEducation_Cost"
              className="max-w-full w-full h-[234px]"
            />
            <div>
              <h3 className="text-[#000000] font-poppins text-[23px] mb-[10px] font-[600]">
                Cost
              </h3>
              <p className="text-[#4e4e4e] font-poppins text-[15px] font-[400] leading-[1.6]">
                There are various factors that affect the pricing of a diamond
                and a perfect balance of these will ensure you get the ideal
                diamond for your price range.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[40px] mb-[95px]">
          <img
            src={DiamondEducation_BottomBanner_Desktop}
            alt="DiamondEducation_BottomBanner_Desktop"
            className="max-w-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CsDiamond;
