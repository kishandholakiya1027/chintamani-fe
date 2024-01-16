import { Link } from "react-router-dom";
import DimondShape from "../../../public/assests/Images/diamondshape.jpg";
import PopularDimondShape from "../../../public/assests/Images/popularDiamondShape.jpg";
import ShapesRound1 from "../../../public/assests/Images/shapes_round1.jpg";
import Shapes_Cushion1 from "../../../public/assests/Images/shapes_cushion1.jpg";
import Shapes_Marquise1 from "../../../public/assests/Images/shapes_marquise1.jpg";
import RadiantShape from "../../../public/assests/Images/radiant-shape.png";
import { Button } from "../ui/button";

const DiamondsShapes = () => {
  return (
    <>
      <section className="w-full">
        <div className="flex flex-col items-start py-[75px] px-[20px] container">
          <div className="flex w-full items-stretch justify-center flex-wrap">
            <div className="p-[20px] flex flex-nowrap flex-col items-start">
              <div>
                <nav>
                  <Link
                    to={"/"}
                    className="text-[#211c50] font-semibold decoration-none"
                  >
                    Home
                  </Link>
                  &nbsp;/&nbsp;Diamonds Shapes
                </nav>
              </div>
            </div>
          </div>
          <div className="flex w-full items-stretch justify-center flex-wrap">
            <div className="flex flex-col flex-nowrap items-start p-[20px]">
              <img src={DimondShape} alt="DimondShape" />
              <h2 className="font-bold font-poppins text-[#404040] lg:text-[30px] md:text-[24px] text-[20px] mt-4">
                Diamond Shape
              </h2>
              <div>
                <p className="text-base font-normal font-poppins text-[#404040]">
                  A diamond’s shape is its most distinguishing and easily
                  identifiable feature. Diamonds are cut in a variety of shapes
                  that maximize diamond brilliance and give character to the
                  diamond. Different shapes can represent different
                  personalities and events. Round brilliant cuts are the most
                  popular, followed by Princess cut diamonds. At With Clarity,
                  we offer the 9 most popular diamond shapes, certified by GIA
                  and IGI. While the correct term is diamond shape, many also
                  refer to this feature as the cut of the diamond. There are
                  many different types of cut or shapes of diamonds. However,
                  there are ten that are most popularly used for jewelry and
                  engagement rings. Learn more about each shape below.
                </p>
              </div>
              <h3 className="lg:text-[24px] md:text-[20px] text-[20px] mt-4 pb-3 font-bold font-poppins text-[#404040]">
                About Diamond Shapes
              </h3>
              <div className="text-base font-normal font-poppins text-[#404040]">
                <p className="mb-4">
                  Diamonds are cut in a variety of shapes. But how does a
                  diamond cutter decide what shape to create? Well, a diamond
                  cutter's number one responsibility is to preserve and maximize
                  carat weight. And since rough diamonds can come in
                  unpredictable shapes and sizes, the diamond cutter will create
                  whichever shape maximizes carat weight and value.
                </p>
                <p className="my-4">
                  Interestingly enough, round cut diamonds actually result in
                  the most wastage of rough diamond carat. The other fancy
                  shapes are deeper and tend to have longer, less uniform
                  shaping so they capture more of the rough diamond. Diamond
                  value is often determined in part by the amount of wastage in
                  the rough diamond when cutting a particular diamond shape.
                  Shapes that can preserve more of the rough diamond can be less
                  expensive. Popularity and availability are the other factors
                  that determine the price of the diamond.
                </p>
                <p className="mt-4">
                  While diamonds can be cut in any shape, there are 10 popular
                  diamond shapes: Round, Princess, Cushion, Oval, Emerald, Pear,
                  Marquise, Asscher, Radiant and Heart shape. Exotic shapes
                  include Baguettes, Bullets, Half Moons, Trillion, Old Mine,
                  Rose, even Horse head. While new diamond shapes are being
                  invented, there are a classic few that have stood the test of
                  time. They have endured for their beauty, and ability to
                  showcase the sparkle of the diamond.
                </p>
              </div>
              <h3 className="lg:text-[24px] md:text-[20px] text-[20px] mt-4 pb-3 font-bold font-poppins text-[#404040]">
                Diamonds Shapes by Popularity
              </h3>
              <img src={PopularDimondShape} alt={"PopularDimondShape"} />
              <div className="text-base font-normal font-poppins text-[#404040]">
                <p className="mb-4">
                  Diamond shape popularity has always been popular as jewelers
                  have always been looking for a way to maximize the amount of
                  shine of a single ring. Jewelers had their own agenda for
                  creating shinier rings- the shinier the ring, the more they
                  could charge. However, what started as a method to earn more
                  money per ring turned into a very popular concept. Diamond
                  shapes are incredibly popular today, and most people would
                  consider the shape of diamond to be one of the most important
                  factors of any ring.{" "}
                </p>
                <p className="mt-4">
                  This popularity stems from the difference in price, the
                  lifespan of the diamond, and the appearance of the ring. With
                  this being said, it is clear that different diamond shapes are
                  more prone to damage than others, and therefore, it is
                  important for the woman to do her research to determine what
                  diamond shape will work the best for her lifestyle.
                  Additionally, different diamond shapes have different
                  essences. Some are considerably more modern while others seem
                  more classic. These vibes are incredibly important to look out
                  for when choosing a diamond because the shape could change the
                  entire feeling of the ring as a whole. When choosing a shape
                  for an engagement ring, be sure to pick something that
                  resonates with your likes and personality, since you will be
                  wearing it for a long time. Something classic and versatile
                  will also blend in easily with any other jewelry and clothing
                  that you wear. Don't make a decision simply based on what is
                  trending.{" "}
                </p>
              </div>
              <h2 className="font-bold font-poppins text-[#404040] lg:text-[30px] md:text-[24px] text-[20px] mt-4">
                Shapes
              </h2>
            </div>
            <div className="flex flex-wrap items-stretch justify-center w-full">
              <div className="flex flex-col flex-nowrap items-start p-[20px]">
                <img src={ShapesRound1} alt="ShapesRound1" />
              </div>
              <div className="flex flex-col flex-nowrap items-start p-[20px]">
                <h3 className="lg:text-[24px] md:text-[20px] text-[20px] mt-4 pb-3 font-bold font-poppins text-[#404040]">
                  Round: STYLE: classic, elegant, sparkling <br />
                </h3>
                <div className="text-base font-normal font-poppins text-[#404040]">
                  <p className="mb-4">
                    {" "}
                    The history of the round cut diamond is a tad different than
                    most other diamond shapes. It took years upon years of
                    diamond cutting in order to create this style which is
                    incredibly popular today. Unlike most other diamond cuts,
                    the round cut diamond was invented through the jewelers’
                    attempt to find the diamond cut with the most facets and the
                    most shine. Ultimately, this look is perfect for the woman
                    looking to display her classy, elegant, and timeless nature.
                    Today most round diamonds are cut in the brilliant style.
                    This means that they have more facets and angles.
                    Previously, diamonds were cut with larger more open facets
                    in the old mine way. These diamonds are still available in
                    the market today, however; they are a lot less common than
                    brilliant round diamonds.
                  </p>
                  <p className="my-4">
                    {" "}
                    Rounds are the most popular shape for not only engagement
                    rings but for other jewelry like necklaces and earrings as
                    well. When cut well, the proper reflection of light, the
                    potential of brilliance and brightness is maximized. The
                    round brilliant cut diamond has 58 facets. Its 58-facet cut,
                    divided among its crown (top), girdle (widest part) and
                    pavilion (base), is calibrated through a precise formula to
                    achieve the maximum in fire and brilliance. When cutting a
                    rough stone, more is lost in shaping a round diamond, so the
                    cost of each carat retained is higher. Over 75% of the
                    world's diamonds are Round Brilliants. There are many
                    different types of cuts, however, the most popular are those
                    that have been used to create engagement rings and jewelry
                    over time.
                  </p>
                  <p className="mt-4">
                    Learn more about{" "}
                    <Link
                      to={""}
                      className="text-[600] font-semibold text-[#211c50]"
                    >
                      {" "}
                      Round Cut Diamonds
                    </Link>
                  </p>
                </div>
                <Button
                  variant={"secondary"}
                  className="bg-[#211c50] hover:border hover:border-[#211c50] hover:text-[#211c50] text-[#fff] text-[17px] font-poppins font-semibold py-[5px] px-[25px]"
                >
                  Round Diamonds
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap items-stretch justify-center w-full">
              <div className="flex flex-col flex-nowrap items-start p-[20px]">
                <h3 className="lg:text-[24px] md:text-[20px] text-[20px] mt-4 pb-3 font-bold font-poppins text-[#404040]">
                  Princess : STYLE: classic, elegant, sparkling
                  <br />
                </h3>
                <div className="text-base font-normal font-poppins text-[#404040]">
                  <p className="mb-4">
                    Princess diamonds, which are one of the square cut diamonds,
                    are the second most popular shape behind round diamonds.
                    And, like the stones that rank slightly above them, princess
                    cut stones are brilliant cut. Princess cuts have a square
                    (sometimes rectangular) shape with pointed corners and up to
                    76 small facets.
                  </p>
                  <p className="my-4">
                    History – The name 'princess cut' was applied in the 1960s
                    to a cut created by Arpad Nagy called the profile cut.
                    Following this, more square cuts were given the name. These
                    include the barion cut and the quadrillion cut, which were
                    precursors to the current princess cut. It is one of the
                    newest diamond shapes.
                  </p>
                  <p className="my-4">
                    The princess cut (technical name 'square modified
                    brilliant') is a diamond cut shape often used in engagement
                    rings. The name dates back to the 1960s, while the princess
                    cut as it exists was created by Betazel Ambar, Ygal Perlman,
                    and Israel Itzkowitz in 1980. The cut has a square or
                    rectangular shape when viewed from above, and from the side
                    is similar to that of an inverted pyramid with four beveled
                    sides. Its popularity was at its highest in the 80s and 90s,
                    though its popularity was high in the 2000s as well. It is
                    the second most popular diamond cut, below round and above
                    cushion.
                  </p>
                  <p className="my-4">
                    The face-up shape of the princess cut (technical name
                    'square modified brilliant' is square or rectangular and the
                    profile or side-on shape is similar to that of an inverted
                    pyramid with four beveled sides. The design is sometimes
                    considered feminine. When looked down on, it bares an X
                    shape. They are slightly less expensive and less cut than
                    round diamonds.The sharp points of the diamond make it more
                    prone to damage. The number of chevrons can affect the
                    overall outlook of a princess cut diamond. This can usually
                    be determined by the wire diagram that is plotted in diamond
                    grading reports. The princess cut had its origins in the
                    early "French" cut.
                  </p>
                  <p className="my-4">
                    As of 2015, princess cut diamonds were the second most
                    popular choice for an engagement ring. Approximately 30% of
                    engagement rings use princess cut diamonds, behind round
                    diamonds (50%) and ahead of cushions (8%). It saw its
                    popularity at its peak in the 80s and 90s. The princess cut
                    experienced a rise in popularity from the early 2000s to the
                    mid 2000s. In the 2000s, the most popular engagement ring
                    featured a princess cut diamond surrounded by round
                    brilliant-cut diamonds. Disney in conjunction with Zales
                    created a series of Disney Princess rings, with some of
                    them, such as Aurora's, Fa Mulan's, Snow White's, and Tinker
                    Bell's featuring princess cuts.
                  </p>
                  <p className="my-4">
                    As of 2015, princess cut diamonds were the second most
                    popular choice for an engagement ring. Approximately 30% of
                    engagement rings use princess cut diamonds, behind round
                    diamonds (50%) and ahead of cushions (8%). It saw its
                    popularity at its peak in the 80s and 90s. The princess cut
                    experienced a rise in popularity from the early 2000s to the
                    mid 2000s. In the 2000s, the most popular engagement ring
                    featured a princess cut diamond surrounded by round
                    brilliant-cut diamonds. Disney in conjunction with Zales
                    created a series of Disney Princess rings, with some of
                    them, such as Aurora's, Fa Mulan's, Snow White's, and Tinker
                    Bell's featuring princess cuts.
                  </p>
                  <p className="my-4">
                    Princess cut diamonds have been used in different sports
                    awards. The Chicago Cubs' trophy for their 2016 World Series
                    win featured, among others, two princess cut diamonds. In
                    2018, The Capitals' Stanley Cup rings featured 22 princess
                    cut diamonds among hundreds of others.
                  </p>
                  <p className="mt-4">
                    Learn more about{" "}
                    <Link
                      to={""}
                      className="text-[600] font-semibold text-[#211c50]"
                    >
                      {" "}
                      Princess Cut Diamonds
                    </Link>
                  </p>
                </div>
                <Button
                  variant={"secondary"}
                  className="bg-[#211c50] hover:border hover:border-[#211c50] hover:text-[#211c50] text-[#fff] text-[17px] font-poppins font-semibold py-[5px] px-[25px]"
                >
                  Princess Diamonds
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap items-stretch justify-center w-full">
              <div className="flex flex-col flex-nowrap items-start p-[20px]">
                <h3 className="lg:text-[24px] md:text-[20px] text-[20px] mt-4 pb-3 font-bold font-poppins text-[#404040]">
                  Emerald: STYLE: modern, bold, glamorous
                  <br />
                </h3>
                <div className="text-base font-normal font-poppins text-[#404040]">
                  <p className="mb-4">
                    Emerald diamond cuts were some of the very first diamond
                    cuts in the world. However, they were not standardized until
                    1940 because of their closeness with other diamond cuts.
                    This cut is perfect for colored gemstones as well as
                    high-quality diamonds; if choosing an emerald cut, it is
                    recommended not to compromise in diamond quality because the
                    style emphasizes the color in the stone.
                  </p>
                  <p className="my-4">
                    Emerald diamond cuts represent unification, as they are well
                    proportioned and bring out the pure brilliance of a diamond.
                    Also known as "step cut" because of the layered faceting,
                    the emerald cut possesses unique appeal with symmetrical
                    sparkle. The faceting is minimal and simple, and therefore
                    tends to show inclusions. The diamond has 58 facets, roughly
                    25 on the crown, 25 on the pavilion, and 8 on the girdle
                    with 3 rows of bottom steps and three rows of top steps. An
                    open setting can also show the diamond's color, so closed or
                    bezel type settings are recommended with lower colors.
                  </p>
                  <p className="mt-4">
                    Learn more about{" "}
                    <Link
                      to={""}
                      className="text-[600] font-semibold text-[#211c50]"
                    >
                      {" "}
                      Emerald Cut Diamonds
                    </Link>
                  </p>
                </div>
                <Button
                  variant={"secondary"}
                  className="bg-[#211c50] hover:border hover:border-[#211c50] hover:text-[#211c50] text-[#fff] text-[17px] font-poppins font-semibold py-[5px] px-[25px]"
                >
                  Emerald Diamonds
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap items-stretch justify-center w-full">
              <div className="flex flex-col flex-nowrap items-start p-[20px]">
                <img src={Shapes_Cushion1} alt="Shapes_Cushion1" />
              </div>
              <div className="flex flex-col flex-nowrap items-start p-[20px]">
                <h3 className="lg:text-[24px] md:text-[20px] text-[20px] mt-4 pb-3 font-bold font-poppins text-[#404040]">
                  Cushion: STYLE: romantic, graceful, sophisticated
                  <br />
                </h3>
                <div className="text-base font-normal font-poppins text-[#404040]">
                  <p className="mb-4">
                    The cushion cut diamond dates back to the 19th century.
                    Similar to the princess cut, this diamond features a
                    relatively square shape. However, the cushion cut is special
                    in the fact that it can come in a multitude of ratios,
                    making it either square or rectangular. Additionally, the
                    corners of this stone are rounded which allows for it to be
                    paired with a woman with an active and trendy lifestyle.
                  </p>
                  <p className="my-4">
                    Cushion cuts blend the energy of a round brilliant with the
                    symmetry of a radiant cut. It's romantic appeal is reflected
                    in its larger 58 facets and rounded, squared corners. Also
                    known as the "pillow cut," the cushion cut has larger
                    faceting, which augments the diamond's brilliance. Larger
                    facets can show clarity inclusions, so evaluate the location
                    of inclusions by examining the certificate's diamond plot.
                    Cushion cuts are popular in both square and rectangular
                    shapes. Square cuts are generally a bit rarer, but do look
                    more symmetrical in an engagement ring. Cushion cut diamonds
                    have great fire (the light that is reflected out of a
                    diamond in a rainbow of color).
                  </p>
                  <p className="mt-4">
                    Learn more about{" "}
                    <Link
                      to={""}
                      className="text-[600] font-semibold text-[#211c50]"
                    >
                      {" "}
                      Cushion Cut Diamonds
                    </Link>
                  </p>
                </div>
                <Button
                  variant={"secondary"}
                  className="bg-[#211c50] hover:border hover:border-[#211c50] hover:text-[#211c50] text-[#fff] text-[17px] font-poppins font-semibold py-[5px] px-[25px]"
                >
                  Cushion Diamonds
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap items-stretch justify-center w-full">
              <div className="flex flex-col flex-nowrap items-start p-[20px]">
                <h3 className="lg:text-[24px] md:text-[20px] text-[20px] mt-4 pb-3 font-bold font-poppins text-[#404040]">
                  Emerald: STYLE: modern, bold, glamorous
                  <br />
                </h3>
                <div className="text-base font-normal font-poppins text-[#404040]">
                  <p className="mb-4">
                    Emerald diamond cuts were some of the very first diamond
                    cuts in the world. However, they were not standardized until
                    1940 because of their closeness with other diamond cuts.
                    This cut is perfect for colored gemstones as well as
                    high-quality diamonds; if choosing an emerald cut, it is
                    recommended not to compromise in diamond quality because the
                    style emphasizes the color in the stone.
                  </p>
                  <p className="my-4">
                    Emerald diamond cuts represent unification, as they are well
                    proportioned and bring out the pure brilliance of a diamond.
                    Also known as "step cut" because of the layered faceting,
                    the emerald cut possesses unique appeal with symmetrical
                    sparkle. The faceting is minimal and simple, and therefore
                    tends to show inclusions. The diamond has 58 facets, roughly
                    25 on the crown, 25 on the pavilion, and 8 on the girdle
                    with 3 rows of bottom steps and three rows of top steps. An
                    open setting can also show the diamond's color, so closed or
                    bezel type settings are recommended with lower colors.
                  </p>
                  <p className="mt-4">
                    Learn more about{" "}
                    <Link
                      to={""}
                      className="text-[600] font-semibold text-[#211c50]"
                    >
                      {" "}
                      Emerald Cut Diamonds
                    </Link>
                  </p>
                </div>
                <Button
                  variant={"secondary"}
                  className="bg-[#211c50] hover:border hover:border-[#211c50] hover:text-[#211c50] text-[#fff] text-[17px] font-poppins font-semibold py-[5px] px-[25px]"
                >
                  Emerald Diamonds
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap items-stretch justify-center w-full">
              <div className="flex flex-col flex-nowrap items-start p-[20px]">
                <h3 className="lg:text-[24px] md:text-[20px] text-[20px] mt-4 pb-3 font-bold font-poppins text-[#404040]">
                  Oval: STYLE: trendy, elegant, delicate
                  <br />
                </h3>
                <div className="text-base font-normal font-poppins text-[#404040]">
                  <p className="mb-4">
                    Created in the mid 1900s, the oval cut is simply an
                    elongated round brilliant cut diamond. Oval diamonds have
                    the brilliance of the round, but they grab more attention
                    thanks to their unique shape. This is a fashionable cut
                    because, though you'll need to watch for a couple factors
                    when shopping, they can appear larger than a round diamond
                    at the same caract weight. It's also beloved for its ability
                    to flatter the hand. The shape may have been developed to
                    represent the longevity of a relationship, but it's valued
                    because the oval diamond can make one's fingers look longer
                    and thinner.
                  </p>
                  <p className="my-4">
                    The oval diamond's ability to elongate your hands adds
                    elegant to any ring with this style stone. But it's delicate
                    thanks to its rounded edges. They add a gentle touch to the
                    length of this stone, in contrast to the marquise cut's bold
                    points. You need to be careful when selecting your diamond
                    color with this style stone, though. The rounded ends have a
                    tendency to show more color than a round diamond would, so
                    it's wide to go up a color grade to make sure the ends
                    appear colorless.
                  </p>
                  <p className="mt-4">
                    Learn more about{" "}
                    <Link
                      to={""}
                      className="text-[600] font-semibold text-[#211c50]"
                    >
                      {" "}
                      Oval Cut Diamonds
                    </Link>
                  </p>
                </div>
                <Button
                  variant={"secondary"}
                  className="bg-[#211c50] hover:border hover:border-[#211c50] hover:text-[#211c50] text-[#fff] text-[17px] font-poppins font-semibold py-[5px] px-[25px]"
                >
                  Oval Diamonds
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap items-stretch justify-center w-full">
              <div className="flex flex-col flex-nowrap items-start p-[20px]">
                <h3 className="lg:text-[24px] md:text-[20px] text-[20px] mt-4 pb-3 font-bold font-poppins text-[#404040]">
                  Pear: STYLE: contemporary, unique, gentle
                  <br />
                </h3>
                <div className="text-base font-normal font-poppins text-[#404040]">
                  <p className="mb-4">
                    The pear shaped diamond settings take into account marquise
                    shaped diamonds and oval shaped diamonds in order to create
                    a more brilliant and magical diamond cut. A pear shaped
                    diamond engagement ring is incredibly unique, and many women
                    praise its one-of-a-kind nature. Pear shaped diamond
                    settings allow for many different creative routes in rings.
                    A pear shaped diamond ring is unmistakable because the stone
                    is in the shape of a teardrop with a slightly flatter and
                    larger bottom with a the rest of the diamond coming to a
                    skinny point at the top of the stone.
                  </p>
                  <p className="my-4">
                    The pear shape diamond is artistic due to its many stylish
                    variations. With 58 facets, light dances through the diamond
                    similar to a round brilliant, maximizing sparkle. It's
                    teardrop appearance leaves a lasting impression. The pear
                    shape’s body allows the wearer the option of pointing it up
                    or down. Its faceting often masks inclusions, and those
                    found near the point tend to be less visible. Pear shapes
                    can be wide or elongated, with longer pear shapes providing
                    a slimming effect on fingers. Suggested cut ratio: 1.5 -
                    1.7. Most flaws such as naturals, and extra facets are at
                    the point of the diamond. Always set the diamond with a
                    prong covering the point of the stone to prevent any
                    chipping.
                  </p>
                  <p className="mt-4">
                    Learn more about{" "}
                    <Link
                      to={""}
                      className="text-[600] font-semibold text-[#211c50]"
                    >
                      {" "}
                      Pear Cut Diamonds
                    </Link>
                  </p>
                </div>
                <Button
                  variant={"secondary"}
                  className="bg-[#211c50] hover:border hover:border-[#211c50] hover:text-[#211c50] text-[#fff] text-[17px] font-poppins font-semibold py-[5px] px-[25px]"
                >
                  Pear Diamonds
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap items-stretch justify-center w-full">
              <div className="flex flex-col flex-nowrap items-start p-[20px]">
                <h3 className="lg:text-[24px] md:text-[20px] text-[20px] mt-4 pb-3 font-bold font-poppins text-[#404040]">
                  Asscher: STYLE: balanced, vintage, creative
                  <br />
                </h3>
                <div className="text-base font-normal font-poppins text-[#404040]">
                  <p className="mb-4">
                    The asscher cut diamond was originally developed in 1902,
                    making it relatively old in the terms of diamond cuts. This
                    stone is nearly octagonal in shape due to all of its curved
                    edges. Asscher cuts give off a timeless effect with their
                    vintage and unique designs. Additionally, asscher cut
                    diamonds are understated diamond ring shapes due to their
                    step-cut facets; these facets create more of a soft glow
                    emanating from the stone than a brilliant statement piece.
                  </p>
                  <p className="my-4">
                    The asscher cut is (also a step cut diamond like the emerald
                    cut) is a blend of the princess and emerald cuts with
                    X-shaped facets from its corners to its center culet. The
                    brilliance of its faceting can mask certain inclusions and
                    lower color grades. Asscher cut diamonds have a clean
                    balance, visual appeal, and can reflect clarity inclusions
                    and color. Higher grades in both categories are generally
                    recommended. The step cut emphasizes the clarity of the
                    diamond, and it is ideal for showcasing higher clarity
                    diamonds. Asscher cuts are a popular shape that was
                    developed during the Art Deco Period. Suggested Cut Ratio:
                    1.00 to 1.05 for square proportions.
                  </p>
                  <p className="mt-4">
                    Learn more about{" "}
                    <Link
                      to={""}
                      className="text-[600] font-semibold text-[#211c50]"
                    >
                      {" "}
                      Asscher Cut Diamonds
                    </Link>
                  </p>
                </div>
                <Button
                  variant={"secondary"}
                  className="bg-[#211c50] hover:border hover:border-[#211c50] hover:text-[#211c50] text-[#fff] text-[17px] font-poppins font-semibold py-[5px] px-[25px]"
                >
                  Asscher Diamonds
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap items-stretch justify-center w-full">
              <div className="flex flex-col flex-nowrap items-start p-[20px]">
                <img src={Shapes_Marquise1} alt="Shapes_Marquise1" />
              </div>
              <div className="flex flex-col flex-nowrap items-start p-[20px]">
                <h3 className="lg:text-[24px] md:text-[20px] text-[20px] mt-4 pb-3 font-bold font-poppins text-[#404040]">
                  Marquise: STYLE: dramatic, moving, joyful
                  <br />
                </h3>
                <div className="text-base font-normal font-poppins text-[#404040]">
                  <p className="mb-4">
                    The marquise cut diamond goes by many nicknames, including
                    the football cut, boat cut, eye cut, or the navette cut.
                    While this diamond shape is not the most popular of all of
                    the diamond shapes, its intriguing shape and style are still
                    incredibly beautiful; this cut allows the bride much more
                    creativity in her ring choice.
                  </p>
                  <p className="my-4">
                    The marquise cut is a classic and historic diamond that
                    resembles the delight of a smile. The marquise is a variant
                    of round and pear shaped diamonds, and like the oval is a
                    perfect complement to long, slender fingers. The marquise
                    cut's elongated body can make its appearance larger than its
                    actual carat weight. It is an excellent cut to show the
                    impression of long, slender fingers. Suggested Cut Ratio:
                    1.75 to 2.25 is the ideal shape.
                  </p>
                  <p className="mt-4">
                    Learn more about{" "}
                    <Link
                      to={""}
                      className="text-[600] font-semibold text-[#211c50]"
                    >
                      {" "}
                      Marquise Cut Diamonds
                    </Link>
                  </p>
                </div>
                <Button
                  variant={"secondary"}
                  className="bg-[#211c50] hover:border hover:border-[#211c50] hover:text-[#211c50] text-[#fff] text-[17px] font-poppins font-semibold py-[5px] px-[25px]"
                >
                  Marquise Diamonds
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap items-stretch justify-center w-full">
              <div className="flex flex-col flex-nowrap items-start p-[20px]">
                <img src={RadiantShape} alt="RadiantShape" />
              </div>
              <div className="flex flex-col flex-nowrap items-start p-[20px]">
                <h3 className="lg:text-[24px] md:text-[20px] text-[20px] mt-4 pb-3 font-bold font-poppins text-[#404040]">
                  Radiant : STYLE: dramatic, moving, joyful
                  <br />
                </h3>
                <div className="text-base font-normal font-poppins text-[#404040]">
                  <p className="mb-4">
                    In 1977, Henry Grossbard designed the cut with the goal of
                    combining the best elements of the emerald cut and the round
                    brilliant cut into one diamond cut. After working for thirty
                    years as a master diamond cutter, Grossbard wanted to create
                    a diamond cut that would unleash the full potential of a
                    diamond's brilliance, this cut made squares hip again,
                    enabling people to choose the stylish square or rectangular
                    shape without compromising on brilliance.
                  </p>
                  <p className="my-4">
                    Popular since the 1980s, the radiant cut diamond lives up to
                    its name: it is impressively radiant and brilliant. The
                    radiant cut diamond owes its brilliance to the 70 facets
                    found its pavilion and crown. The precision of each facet
                    offers immense brilliance and fire. The radiant cut’s
                    brilliance is surpassed only by the round brilliant cut.
                  </p>
                  <p className="my-4">
                    This makes the radiant cut an excellent choice for an
                    engagement ring that sparkles with brilliance and fire. With
                    carefully beveled corners, Radiants have substantial
                    durability against chips and breakage, making it an
                    excellent choice for those with an active lifestyle. This
                    feature also allows the Radiant to be paired alongside both
                    square and rounded diamonds
                  </p>
                  <p className="my-4">Excellent brilliance, fire and sparkle</p>
                  <p className="my-4">
                    Although the radiant cut isn’t quite as brilliant as the
                    round brilliant cut, it’s not very far behind. Because of
                    the 70 facets in its pavilion and crown, the radiant cut
                    offers impressive brilliance and fire. This makes the
                    radiant cut a great choice if you want a non-round diamond
                    with a beautiful sparkle.
                  </p>
                  <p className="my-4">
                    Larger perceived size than other diamond shapes
                  </p>
                  <p className="my-4">
                    The radiant cut is well known for looking larger than most
                    of the other diamonds of the same carat weight, giving it
                    some extra presence on your fiancé-to-be’s finger.
                  </p>
                  <p className="my-4">
                    The face-up area of the radiant cut is actually slightly
                    smaller than that of a round brilliant cut diamond of an
                    equal carat weight. However, the radiant cut’s long diagonal
                    measurement tricks the eye and makes it look larger than it
                    really is.
                  </p>
                  <p className="my-4">
                    Better durability than other square diamonds
                  </p>
                  <p className="my-4">
                    The radiant cut is often compared to square diamonds, such
                    as the princess cut. Although it looks quite different (the
                    princess cut is square, while the radiant cut is square or
                    elongated), it’s easy to see the similarities.
                  </p>
                  <p className="my-4">
                    However, the radiant cut has one advantage over the princess
                    cut — it’s far more durable. Because the radiant cut has
                    beveled corners, radiant cut engagement rings are less
                    likely to chip, making the shape a good option if your
                    fiancé-to-be has an active lifestyle.
                  </p>
                  <p className="my-4">Excellent value for money</p>
                  <p className="mb-4">
                    The cutting process for the radiant diamond uses a large
                    percentage of the original rough diamond, with very little
                    going to waste. This means that a loose radiant diamond will
                    be priced lower on a per-carat basis than most other diamond
                    cuts. In fact, the radiant cut diamond is{" "}
                    <Link
                      to={""}
                      className="text-[600] font-semibold text-[#211c50]"
                    >
                      one of the most affordable diamond shapes.
                    </Link>
                  </p>
                  <p className="mb-4">
                    For example, this 1.01 carat, VS1 clarity, H color radiant
                    cut diamond from James Allen costs $3,920. Meanwhile, this
                    round brilliant cut diamond of the same clarity, color and
                    carat weight costs $6,130 — almost 56% more. By choosing a
                    radiant cut over a round brilliant, you’ll be able to spend
                    more of your budget on the engagement ring setting, or on a
                    larger diamond.
                  </p>
                  <p className="my-4">
                    Unfortunately, like every other diamond shape, the radiant
                    cut isn’t without its weak points. Cons of the radiant
                    diamond cut include the following;
                  </p>
                  <p className="my-4">
                    For a diamond that bursts with brilliance and sparkles from
                    across the room, consider a radiant cut diamond. Ensure you
                    closely review each diamond for its cut quality, clarity and
                    color, along with its overall beauty and appeal.
                  </p>
                  <p className="mt-4">
                    Learn more about{" "}
                    <Link
                      to={""}
                      className="text-[600] font-semibold text-[#211c50]"
                    >
                      {" "}
                      Radiant Diamonds
                    </Link>
                  </p>
                </div>
                <Button
                  variant={"secondary"}
                  className="bg-[#211c50] hover:border hover:border-[#211c50] hover:text-[#211c50] text-[#fff] text-[17px] font-poppins font-semibold py-[5px] px-[25px]"
                >
                  Radiant Diamonds
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DiamondsShapes;
