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
							className="absolute bottom-2/3 left-[45%] w-[13%]"
						/>
						<Image
							src={testnestext}
							height={1000}
							width={1000}
							alt="a"
							className="absolute bottom-1/3 left-[20%] w-[60%]"
						/>
					</div>
					<div className=" absolute bottom-[2px] left-[1px] md:left-3  backdrop-blur-md w-[98%] shadow-2xl shadow-gray-800 rounded-xl h-[38%]">
						<DockDemo />

						<div className="text-center w-full absolute mb-[15%] md:mb-[10%] bottom-0">
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
