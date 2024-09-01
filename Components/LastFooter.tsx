import animegirl1 from "@/public/Anime Girl 1.webp";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { SiGitbook } from "react-icons/si";
import StarsSvg from "@/public/Stable.svg";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export default function LastFooter() {
	return (
		<div className="relative mt-32 h-screen overflow-hidden">
			<div className="absolute bottom-0 right-[-25%] z-10 w-[53.33%]">
				<Image
					src={animegirl1}
					alt="Anime girl"
					width={1000}
					height={1000}
					className="w-full"
				/>
			</div>

			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex space-x-6">
				<BsTwitterX className="text-white text-3xl" />
				<FaTelegramPlane className="text-white text-3xl" />
				<FaMedium className="text-white text-3xl" />
				<SiGitbook className="text-white text-3xl" />
			</div>

			<article className="w-3/4 absolute mt-7 top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
				<div className="border  cursor-pointer border-gray-200 flex items-center py-1 text-xl font-light shadow-custom relative w-fit mx-auto mb-10 px-4 bg-white/20 rounded-2xl backdrop-blur-lg text-gray-200">
					Scroll UP
					<MdKeyboardDoubleArrowUp className="text-2xl" />
				</div>
				<h1 className="text-7xl font-extrabold mb-4">STABLECHAIN</h1>

				<p className="text-4xl mt-6 text-gray-100">
					The First Value-Centric Layer 2 EVM Chain backed by
					Stablecoins & Immune to Market Fluctuations
				</p>
			</article>

			<section className="absolute bottom-20 flex items-center justify-around left-1/2 transform -translate-x-1/2 px-5 py-2.5 text-xl bg-[#454545] text-center border border-solid border-gray-300 text-white rounded-[33px]">
				<Image
					src={StarsSvg}
					alt="logo"
					className="w-[14%]"
					width={100}
					height={100}
				/>
				<a href="" className="mx-2">
					Visions
				</a>
				<a href="" className="mx-2">
					Build
				</a>
				<a href="" className="mx-2">
					Bridge
				</a>
				<a href="" className="mx-2">
					Ecosystem
				</a>
			</section>
		</div>
	);
}
