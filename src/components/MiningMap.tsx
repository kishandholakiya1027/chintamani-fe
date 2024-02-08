import { FC } from "react";
import Mining from "../../public/assests/Images/11.png";
import Diamonds from "../../public/assests/Images/12.png";
import Cutting from "../../public/assests/Images/13-1.png";
import Conflict from "../../public/assests/Images/14.png";
import Standard from "../../public/assests/Images/15.png";
import { Link } from "react-router-dom";

const MiningMap: FC = () => {
	return (
		<>
			<section className='bg-[url("../../public/assests/Images/fre.png")] bg:cover bg:no-repeat w-full h-[532px] lg:block hidden'>
				<div className="w-[98%]">
					<div className="pt-[33px] pb-[30px] container flex items-start flex-col px-5">
						<div className="py-0 w-full flex flex-row items-stretch justify-center flex-wrap">
							<div className="py-0 relative w-[33.33%] h-[156px] px-5 after:absolute after:top-[118px] after:left-[87px] after:w-[73%] after:h-[100%] after:border-b-[3px] after:border-dotted after:border-[#211c50] after:rotate-[46deg] after:pointer-events-none after:block group">
								<div className="text-[#000] font-poppins font-medium pl-5 pb-[15px]">
									1. Mining
								</div>
								<div className="group-hover:opacity-100 group-hover:visible overflow-visible cursor-pointer">
									<div className="overflow-visible relative flex w-full">
										<div className="flex flex-nowrap flex-col items-start relative top-0 left-0 w-full">
											<img src={Mining} alt="Mining" className="max-w-[100%]" />
										</div>
									</div>
									<div className="group-hover:opacity-100 group-hover:visible opacity-0 flex items-center justify-center w-full bg-[#fff] text-center flex-col flex-wrap absolute top-0 left-0 h-[290px] border-[1px] border-[#000] min-w-[280px] rounded-[10px] z-[99]">
										<h2 className="text-[15px] text-[#000] font-poppins w-full">
											Mining
										</h2>
										<div className="text-[13px] text-[#000] font-poppins p-[10px] hidden">
											A natural diamond is usually so-called because it is{" "}
											<strong>
												mined from the earth after occurring naturally
											</strong>
											. A mined diamond, therefore, is a 'natural' diamond that
											is formed from carbon being subjected to extreme heat and
											pressure deep underneath the earth's crust.
										</div>
										<div className="text-[13px] font-light text-[#000] font-poppins p-[10px]">
											<p>
												A natural diamond is usually so-called because it is{" "}
												<strong>
													mined from the earth after occurring naturally
												</strong>
												. A mined diamond, therefore, is a 'natural' diamond
												that is formed from carbon being subjected to extreme
												heat and pressure deep underneath the earth's crust.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="w-[33.33%] h-[156px] p-5 flex-nowrap flex  items-start flex-col"></div>
							<div className="py-0 relative w-[33.33%] h-[156px] px-5 group text-end">
								<div className="text-[#000] font-poppins font-medium pl-5 pb-[15px]">
									5. Diamonds Awaiting for you
								</div>
								<div className="group-hover:opacity-100 group-hover:visible overflow-visible cursor-pointer">
									<div className="overflow-visible relative flex w-full">
										<div className="flex flex-nowrap flex-col items-end relative top-0 left-0 w-full">
											<img
												src={Diamonds}
												alt="Diamonds"
												className="max-w-[100%]"
											/>
										</div>
									</div>
									<div className="group-hover:opacity-100 group-hover:visible opacity-0 flex items-center justify-center w-full bg-[#fff] text-center flex-col flex-wrap absolute top-0 left-0 h-[290px] border-[1px] border-[#000] min-w-[280px] rounded-[10px] z-[99]">
										<h2 className="text-[15px] text-[#000] font-poppins w-full">
											Diamonds Awaiting for you
										</h2>
										<div className="text-[13px] font-light text-[#000] font-poppins p-[10px]">
											It’s a timeless symbol of love and devotion, a promise of
											everlasting companionship. That’s why countless years of
											unparalleled expertise and genuine passion lie behind
											every exquisitely finished item we produce.
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="py-0 w-full flex flex-row items-stretch justify-center flex-wrap">
							<div className="py-0 relative w-[33.33%] h-[156px] top-[156px] left-[122px] px-5 group w-[33.33%] h-[156px] px-5 flex-col flex items-center text-center flex-nowrap after:block after:absolute after:top-[-77px] after:right-[-103px] after:w-[58%] after:h-[100%] after:border-b-[3px] after:border-dotted after:border-[#211c50] after:rotate-[131deg] after:pointer-events-none">
								<div className="group-hover:opacity-100 group-hover:visible overflow-visible cursor-pointer">
									<div className="overflow-visible relative flex w-full">
										<div className="flex flex-nowrap flex-col items-end relative top-0 left-0 w-full">
											<img
												src={Conflict}
												alt="Conflict"
												className="max-w-[100%]"
											/>
										</div>
									</div>
									<div className="group-hover:opacity-100 group-hover:visible opacity-0 flex items-center justify-center w-full bg-[#fff] text-center flex-col flex-wrap absolute top-0 left-0 h-[290px] border-[1px] border-[#000] min-w-[280px] rounded-[10px] z-[99]">
										<h2 className="text-[15px] text-[#000] font-poppins w-full">
											Conflict Free Sourcing
										</h2>
										<div className="text-[13px] font-light text-[#000] font-poppins p-[10px]">
											<p>
												Diamonds should represent memories and promises, but
												unfortunately many diamonds were mined in unsafe
												conditions or conflict zones. It can be very difficult
												to make sure your diamond is in fact ethical and
												conflict-free. Here at CHINTAMANI GEMS you can purchase
												an ethical diamond and becoming a more conscious
												consumer of diamonds, so you can buy with a conscience
												as clear as a well-cut diamond.
											</p>
										</div>
									</div>
								</div>
								<div className="text-[#000] font-poppins font-medium pl-5 pb-[15px]">
									2. Conflict Free Sourcing
								</div>
							</div>
							<div className="py-0 relative top-[0] left-[5px] group w-[33.33%] h-[156px] px-5 flex-col flex items-center text-center flex-nowrap after:block after:absolute after:top-[-22px] after:right-[-97px] after:w-[57%] after:h-[100%] after:border-b-[3px] after:border-dotted after:border-[#211c50] after:rotate-[49deg] after:pointer-events-none">
								<div className="group-hover:opacity-100 group-hover:visible overflow-visible cursor-pointer">
									<div className="overflow-visible relative flex w-full">
										<div className="flex flex-nowrap flex-col items-end relative top-0 left-0 w-full">
											<img
												src={Cutting}
												alt="Cutting"
												className="max-w-[100%]"
											/>
										</div>
									</div>
									<div className="group-hover:opacity-100 group-hover:visible opacity-0 flex items-center justify-center w-full bg-[#fff] text-center flex-col flex-wrap absolute top-0 left-0 h-[290px] border-[1px] border-[#000] min-w-[280px] rounded-[10px] z-[99]">
										<h2 className="text-[15px] text-[#000] font-poppins w-full">
											Cutting & Polishing
										</h2>
										<div className="text-[13px] font-light text-[#000] font-poppins p-[10px]">
											<p>
												A diamond’s cut grade tells how well it’s cut, from a
												rough crystal to a finished gem. The cut grade covers
												how much light the stone reflects as well as its fire,
												symmetry, and polish. It’s the most important
												contributing factor to a diamond’s beauty.
												<b>4 C’s of Diamond or 7 C’s of Diamond</b>
											</p>
										</div>
									</div>
								</div>
								<div className="text-[#000] font-poppins font-medium pl-5 pb-[15px]">
									3. Cutting & Polishing
								</div>
							</div>
							<div className="w-[33.33%] h-[156px] p-5 flex-col flex items-end flex-nowrap"></div>
						</div>
						<div className="py-0 w-full flex flex-row  items-stretch justify-center flex-wrap">
							<div className="w-[33.34%] h-[156px] p-5 flex-col flex items-start flex-nowrap"></div>
							<div className="py-0 relative top-[0] left-[233px] group w-[33.33%] h-[156px] px-5 flex-col flex items-center text-center flex-nowrap">
								<div className="group-hover:opacity-100 group-hover:visible overflow-visible cursor-pointer">
									<div className="overflow-visible relative flex w-full">
										<div className="flex flex-nowrap flex-col items-end relative top-0 left-0 w-full">
											<img
												src={Standard}
												alt="Standard"
												className="max-w-[100%]"
											/>
										</div>
									</div>
									<div className="group-hover:opacity-100 group-hover:visible opacity-0 flex items-center justify-center w-full bg-[#fff] text-center flex-col flex-wrap absolute top-0 left-0 h-fit border-[1px] border-[#000] min-w-[280px] rounded-[10px] z-[99]">
										<div className="text-[15px] text-[#000] font-poppins w-full py-5">
											Standard Certification
											<div className="text-[13px] text-[#000] font-poppins hidden p-[10px]">
												Lorem Ipsum is simply dummy text of the printing and
												Lorem Ipsum is simply dummy text of the printing and
												Lorem Ipsum is simply dummy text of the printing and
												Lorem Ipsum is simply dummy text of the printing and
											</div>
											<div className="text-[13px] font-normal text-[#000] p-[10px]">
												<p>
													<strong>
														What are the best Diamond Certifications?
													</strong>
												</p>
												<ul className="list-none">
													<li className="list-item">
														GIA – Gemological Institute of America. GIA is held
														by all (literally) to be the industry gold standard
													</li>
													<li className="list-item">
														GCAL – Gem Certification & Assurance Lab
													</li>
													<li className="list-item">
														IGI – International Gemological Institute.{" "}
													</li>
													<li className="list-item">
														EGL – European Gemological Laboratories.
													</li>
												</ul>
												<p>
													The best diamond certifications are the GIA and AGS
													because they’re the most consistent lab grading
													entities. That means you can trust their grading in
													all aspects like
													<Link to={"/"}>Color</Link>
													<Link to={"/"}>Clarity </Link>
													<Link to={"/"}>Cut quality</Link>. These labs also
													grade more rigorously than other labs. When a diamond
													comes with a GIA or AGS certificate, you can trust
													what the report is saying. That’s why we only
													recommend buying diamonds with GIA and AGS
													certificates.
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="text-[#000] font-poppins font-medium pl-5 pb-[15px]">
									4. Standard Certification
								</div>
							</div>
							<div className="w-[33.33%] h-[156px] py-0 text-left pl-0 pr-5 flex-col flex items-start flex-nowrap relative after:absolute after:block after:top-[-89px] after:right-[-21px] after:w-[73%] after:h-[100%] after:border-b-[3px] after:border-dotted after:border-[#211c50] after:rotate-[134deg] after:pointer-events-none group"></div>
						</div>
					</div>
				</div>
			</section>
			<section className="lg:hidden block ">
				<div className="w-full pt-[7px] pl-[20px] container mb-[0]">
					<div className="flex w-full justify-center items-stretch flex-wrap">
						<div className="w-full items-center text-center flex p-[20px] flex-col flex-nowrap">
							<img src={Mining} alt="Mining" className="mb-[20px]" />
							<h3 className="font-poppins text-[#211c50] text-[20px] font-semibold mb-[9px]">
								1. Mining
							</h3>
							<div className="text-[15px] text-[#211c50] font-poppins">
								<p>
									A natural diamond is usually so-called because it is mined
									from the earth after occurring naturally. A mined diamond,
									therefore, is a 'natural' diamond that is formed from carbon
									being subjected to extreme heat and pressure deep underneath
									the earth's crust.
								</p>
							</div>
						</div>
						<div className="w-full flex items-center text-center p-[20px] flex-nowrap flex-col">
							<img src={Conflict} alt="Conflict" className="mb-[20px]" />
							<h3 className="font-poppins text-[#211c50] text-[20px] font-semibold mb-[9px]">
								2. Conflict Free Sourcing
							</h3>
							<div className="text-[15px] text-[#211c50] font-poppins">
								<p>
									Diamonds should represent memories and promises, but
									unfortunately many diamonds were mined in unsafe conditions or
									conflict zones. It can be very difficult to make sure your
									diamond is in fact ethical and conflict-free. Here at
									CHINTAMANI GEMS you can purchase an ethical diamond and
									becoming a more conscious consumer of diamonds, so you can buy
									with a conscience as clear as a well-cut diamond.
								</p>
							</div>
						</div>
						<div className="w-full flex items-center text-center p-[20px] flex-nowrap flex-col">
							<img src={Cutting} alt="Cutting" className="mb-[20px]" />
							<h3 className="font-poppins text-[#211c50] text-[20px] font-semibold mb-[9px]">
								3. Cutting & Polishing
							</h3>
							<div className="text-[15px] text-[#211c50] font-poppins">
								<p>
									A diamond’s cut grade tells how well it’s cut, from a rough
									crystal to a finished gem. The cut grade covers how much light
									the stone reflects as well as its fire, symmetry, and polish.
									It’s the most important contributing factor to a diamond’s
									beauty.
									<b>4 C’s of Diamond or 7 C’s of Diamond</b>
								</p>
							</div>
						</div>
						<div className="w-full flex items-center text-center p-[20px] flex-nowrap flex-col">
							<img src={Cutting} alt="Cutting" className="mb-[20px]" />
							<h3 className="font-poppins text-[#211c50] text-[20px] font-semibold mb-[9px]">
								4. Standard Certification
							</h3>
							<div className="text-[15px] text-[#211c50] font-poppins">
								<p>
									<b>What are the best Diamond Certifications?</b>
									<br />
									<br />
									GIA – Gemological Institute of America. GIA is held by all
									(literally) to be the industry gold standard
									<br />
									AGS – American Gem Society
									<br />
									GCAL – Gem Certification &amp; Assurance Lab
									<br />
									IGI – International Gemological Institute.
									<br />
									EGL – European Gemological Laboratories.
									<br />
									The best diamond certifications are the GIA and AGS because
									they’re the most consistent lab grading entities. That means
									you can trust their grading in all aspects like Color, Clarity
									and Cut quality. These labs also grade more rigorously than
									other labs. When a diamond comes with a GIA or AGS
									certificate, you can trust what the report is saying. That’s
									why we only recommend buying diamonds with GIA and AGS
									certificates.
								</p>
							</div>
						</div>
						<div className="w-full flex items-center text-center p-[20px] flex-nowrap flex-col">
							<img src={Standard} alt="Standard" className="mb-[20px]" />
							<h3 className="font-poppins text-[#211c50] text-[20px] font-semibold mb-[9px]">
								5. Diamonds Awaiting for you
							</h3>
							<div className="text-[15px] text-[#211c50] font-poppins">
								<p>
									<b>Diamonds Awaiting for you</b>
									<br />
									It’s a timeless symbol of love and devotion, a promise of
									everlasting companionship. That’s why countless years of
									unparalleled expertise and genuine passion lie behind every
									exquisitely finished item we produce.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default MiningMap;
