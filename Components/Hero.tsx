"use client";
import Image from "next/image";
import firsthero from "@/public/image 45.png";
import testnestext from "@/public/Frame.png";
import { DockDemo } from "./DockDemo";
import { GiDiamonds } from "react-icons/gi";
import { useEffect } from "react";
import StarsSvg from "@/public/Stable.svg";

export default function HeroComingSoon() {
	useEffect(() => {
		window.scrollTo({
			top: document.body.scrollHeight,
		});
	}, []);
	return (
		<div className="h-1/4 md:h-screen flex items-center justify-center w-full">
			<div className="w-[95%] md:w-[90%] p-2 ">
				<div className=" relative">
					<Image
						alt=""
						width={1000}
						src={firsthero}
						height={1000}
						layout="responsive"
						className="w-full h-full rounded-2xl border border-gray-600"
					/>
					<div>
						<Image
							src={StarsSvg}
							height={1000}
							width={1000}
							alt="a"
							className="absolute bottom-2/3 left-[40%] w-[13%]"
						/>
						<Image
							src={testnestext}
							height={1000}
							width={1000}
							alt="a"
							className="absolute bottom-1/3 left-[20%] w-[60%]"
						/>
					</div>

					<div
						className="absolute bottom-[2px] w-full rounded-xl h-[40%]"
						style={{
							backdropFilter: "blur(20px)",
							background: "rgba(255, 255, 255, 0.1)", // Glassmorphism transparent background
							boxShadow: "0 -20px 30px rgba(255, 255, 255, 0.2)", // Blurred shadow on top
							borderRadius: "16px", // Smooth rounded corners
						}}
					>
						<DockDemo />

						<div className="text-center w-full absolute xs:mb-[10%] sms:mb-[15%] md:mb-[15%] bottom-0 top-3 md:top-16 md:mt-20">
							<p className="text-white text-base sm:text-xl md:text-2xl font-light">
								Looking to build on StableChain?{" "}
								<u className="underline">
									<a
										href="http://"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center"
									>
										Get in touch
										<GiDiamonds className="ml-1 text-green-500 text-xl md:text-4xl" />
									</a>
								</u>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
