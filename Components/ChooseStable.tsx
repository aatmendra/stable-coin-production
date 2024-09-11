"use client";
import { useEffect, useRef, useState } from "react";
import BusinessSvg from "./SVGs/BusinessSvg";
import GasSvg from "./SVGs/GasSvg";
import HedgeSvg from "./SVGs/HedgeSvg";
import RWASvg from "./SVGs/RWASvg";

export default function ChooseStable() {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			className="w-full text-center h-fit z-20 absolute md:mt-14 mt-[120%]"
		>
			<div
				className={`transition-all duration-1000 ease-out delay-1200 ${
					isVisible
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-20"
				}`}
			>
				<h1 className="text-2xl text-gray-200 sm:text-3xl md:text-5xl lg:text-7xl p-2 font-light">
					Why <span className="italic font-semibold">choose</span>{" "}
					StableChain
				</h1>
			</div>
			<div className="flex flex-col gap-20 sm:gap-0 sm:flex-row flex-wrap mt-8 mb-8 sm:mt-8">
				{[
					{ Icon: GasSvg, text: "Gas spent in stable coin" },
					{ Icon: HedgeSvg, text: "Hedge Against Market Volatility" },
					{ Icon: RWASvg, text: "Enhanced Payments for RWA" },
					{ Icon: BusinessSvg, text: "Business-Ready Scalability" },
				].map(({ Icon, text }, index) => (
					<div
						key={index}
						className={`w-full sm:w-1/2 lg:w-1/4 p-2 sm:p-6 transition-all duration-1000 ease-out ${
							isVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-20"
						}`}
						style={{ transitionDelay: `${300 * index}ms` }}
					>
						<div className="flex flex-col items-center justify-center">
							<Icon />
							<div className="z-0 border border-neutral-300 relative top-16 sm:top-20 h-28 sm:h-32 md:h-36 px-4 sm:px-6 md:px-9 mt-4 sm:mt-8 flex items-center justify-center bg-white/20 rounded-xl backdrop-blur-lg text-white text-center">
								<p className="text-sm sm:text-base md:text-lg font-medium py-2 sm:py-4">
									{text}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
