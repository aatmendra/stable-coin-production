import animegirl1 from "@/public/Anime Girl 1.webp";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { SiGitbook } from "react-icons/si";
import StarsSvg from "@/public/Stable.svg";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import ChooseStable from "./ChooseStable";

export default function LastFooter() {
	return (
		<div className="relative mt:2 md:mt-32 p-10 sm:p-10 h-[170vh] overflow-hidden bg-[url('../public/Hero.webp')] bg-cover ">
			<ChooseStable />
			<div className="absolute bottom-0 w-[70%] right-[-35%] md:bottom-0 md:right-[-20%] z-10 md:w-[40%]">
				<Image
					src={animegirl1}
					alt="Anime girl"
					width={1000}
					height={1000}
					className="w-full h-fit"
				/>
			</div>

			<div className="absolute top-[80%] md:top-3/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex space-x-4 sm:space-x-6">
				<BsTwitterX className="text-white text-2xl sm:text-3xl" />
				<FaTelegramPlane className="text-white text-2xl sm:text-3xl" />
				<FaMedium className="text-white text-2xl sm:text-3xl" />
				<SiGitbook className="text-white text-2xl sm:text-3xl" />
			</div>

			<article className="w-full sm:w-3/4 absolute mt-2 top-[70%] md:top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 sm:px-0">
				<div className="border cursor-pointer border-gray-200 flex items-center py-1 text-lg sm:text-xl font-light shadow-custom relative w-fit mx-auto mb-6 sm:mb-10 px-3 sm:px-4 bg-white/20 rounded-2xl backdrop-blur-lg text-gray-200">
					Scroll UP
					<MdKeyboardDoubleArrowUp className="text-xl sm:text-2xl" />
				</div>
				<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4">
					STABLECHAIN
				</h1>

				<p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl mt-4 sm:mt-6 text-gray-100">
					The First Value-Centric Layer 2 EVM Chain backed by
					Stablecoins & Immune to Market Fluctuations
				</p>
			</article>

			<section className="absolute bottom-10 sm:bottom-20 flex items-center justify-around left-1/2 transform -translate-x-1/2 px-3 sm:px-5 py-2 sm:py-2.5 text-base sm:text-xl bg-[#454545] text-center border border-solid border-gray-300 text-white rounded-[33px] w-[90%] sm:w-auto">
				<Image
					src={StarsSvg}
					alt="logo"
					className="w-[10%] sm:w-[14%]"
					width={100}
					height={100}
				/>
				<a href="" className="mx-1 sm:mx-2">
					Visions
				</a>
				<a href="" className="mx-1 sm:mx-2">
					Build
				</a>
				<a href="" className="mx-1 sm:mx-2">
					Bridge
				</a>
				<a href="" className="mx-1 sm:mx-2">
					Ecosystem
				</a>
			</section>
		</div>
	);
}
