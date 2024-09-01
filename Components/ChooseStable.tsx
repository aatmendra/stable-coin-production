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
		<section ref={sectionRef} className="w-full text-center z-10 mt-24">
			<div
				className={`transition-all duration-1000 ease-out delay-1200 ${
					isVisible
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-20"
				}`}
			>
				<h1 className="text-3xl sm:text-7xl md:text-7xl p-2 font-light">
					Why <span className="italic font-semibold">choose</span>{" "}
					StableChain
				</h1>
			</div>
			<div className="flex flex-col sm:flex-row flex-wrap">
				{[
					{ Icon: GasSvg, text: "Gas spent in stable coin" },
					{ Icon: HedgeSvg, text: "Hedge Against Market Volatility" },
					{ Icon: RWASvg, text: "Enhanced Payments for RWA" },
					{ Icon: BusinessSvg, text: "Business-Ready Scalability" },
				].map(({ Icon, text }, index) => (
					<div
						key={index}
						className={`w-full sm:w-1/2 md:w-1/4 p-1 sm:p-6 md:p-10 transition-all duration-1000 ease-out ${
							isVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-20"
						}`}
						style={{ transitionDelay: `${300 * index}ms` }}
					>
						<div className="flex flex-col items-center justify-center">
							<Icon />
							<div className="z-0 border border-neutral-300 relative top-20 sm:h-32 md:h-36 px-4 sm:px-6 md:px-9 sm:mt-8 flex items-center justify-center bg-white/20 rounded-xl backdrop-blur-lg text-white text-center">
								<p className="text-base sm:text-lg font-medium py-4">
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
