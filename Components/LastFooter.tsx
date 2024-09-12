import animegirl1 from "@/public/Anime Girl 1.webp";
import Image from "next/image";
import StarsSvg from "@/public/Stable.svg";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import ChooseStable from "./ChooseStable";
import { DockDemo } from "./DockDemo";
import Link from "next/link";

export default function LastFooter() {
	return (
		<div className="relative mt-80  md:mt-[20%] p-1 sm:p-10  sms:h-[180vh] xs:h-[250vh]  md:h-[170vh] overflow-hidden bg-[url('../public/Hero.webp')] bg-cover bg-center">
			<div className="absolute bottom-0 w-[70%] right-[-35%] md:bottom-0 md:right-[-15%] z-10 md:w-[40%]">
				<Image
					src={animegirl1}
					alt="Anime girl"
					width={1000}
					height={1000}
					className="w-full h-fit z-10"
				/>
			</div>

			<div className="absolute top-[90%] md:top-[80%]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex space-x-4 sm:space-x-6">
				<DockDemo />
			</div>

			<article className="w-full sm:w-3/4 z-30  absolute mt-2 top-[80%] md:top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 sm:px-0">
				<div className="border cursor-pointer border-gray-200 flex items-center py-1 text-lg sm:text-xl font-light shadow-custom relative w-fit mx-auto mb-6 sm:mb-10 px-3 sm:px-4 bg-white/20 rounded-2xl backdrop-blur-lg text-gray-200">
					Scroll UP
					<MdKeyboardDoubleArrowUp className="text-xl sm:text-2xl" />
				</div>
				<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-gray-100">
					STABLECHAIN
				</h1>

				<p className="text-lg w-[77%] md:w-full md:ml-0 ml-14 sm:text-2xl md:text-3xl lg:text-4xl mt-4 sm:mt-6  text-gray-100">
					The First Value-Centric Layer 2 EVM Chain backed by
					Stablecoins & Immune to Market Fluctuations
				</p>
			</article>

			<section className="absolute bottom-10 sm:bottom-20 z-30 flex items-center justify-around left-1/2 transform -translate-x-1/2 px-3 sm:px-5 py-2 sm:py-2.5 text-base sm:text-xl bg-[#454545] text-center border border-solid border-gray-300 text-white rounded-[33px] w-[90%] sm:w-auto">
				<Image
					src={StarsSvg}
					alt="logo"
					className="w-[10%] sm:w-[14%]"
					width={100}
					height={100}
				/>
				<Link
					href="https://sujansthadev.com.np/"
					className="mx-1 sm:mx-2"
				>
					Visions
				</Link>
				<Link
					href="https://sujansthadev.com.np/"
					className="mx-1 sm:mx-2"
				>
					Build
				</Link>
				<Link
					href="https://sujansthadev.com.np/"
					className="mx-1 sm:mx-2"
				>
					Bridge
				</Link>
				<Link
					href="https://sujansthadev.com.np/"
					className="mx-1 sm:mx-2"
				>
					Ecosystem
				</Link>
			</section>
		</div>
	);
}
