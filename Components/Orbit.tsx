"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import orbit from "@/public/Orbit.webp";
import SvgBackground from "./SVGbackground";
import EtheriumSvg from "./SVGs/EtheriumSvg";
import EigenDaSvg from "./SVGs/EigenDaSvg";
import SUSDSvg from "./SVGs/SUSDSvg";
import animegirl from "@/public/Anime Girl 2.webp";
import styles from "@/styles/Orbit.module.css";

export default function Orbit() {
	const animeGirlRef = useRef<HTMLDivElement>(null);
	const etheriumSvgRef = useRef<HTMLDivElement>(null);
	const orbitImageRef = useRef<HTMLImageElement>(null);

	const [isAnimeGirlVisible, setIsAnimeGirlVisible] = useState(false);
	const [isSvgVisible, setIsSvgVisible] = useState(false);
	const [isImageVisible, setIsImageVisible] = useState(false);

	useEffect(() => {
		const handleIntersection = (
			entries: IntersectionObserverEntry[],
			observer: IntersectionObserver
		) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					if (entry.target === animeGirlRef.current) {
						setIsAnimeGirlVisible(true);
						observer.unobserve(entry.target);
					}
					if (entry.target === etheriumSvgRef.current) {
						setIsSvgVisible(true);
						observer.unobserve(entry.target);
					}
					if (entry.target === orbitImageRef.current) {
						setIsImageVisible(true);
						observer.unobserve(entry.target);
					}
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.1,
		});

		if (animeGirlRef.current) observer.observe(animeGirlRef.current);
		if (etheriumSvgRef.current) observer.observe(etheriumSvgRef.current);
		if (orbitImageRef.current) observer.observe(orbitImageRef.current);

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<div className="mt-12  mb-0 sm:mt-24 md:mt-48 md:mb-[10%]">
			<SvgBackground>
				<div className="flex mb-28 sm:mb-20 items-center justify-center">
					<Image
						ref={orbitImageRef}
						className={`w-full max-w-[300px] sm:max-w-[500px] md:max-w-[1000px] ${
							isImageVisible ? styles.fadeInUpFast : ""
						}`}
						src={orbit}
						height={1000}
						width={1000}
						alt="Orbit"
					/>
				</div>

				<section className="mt-20 mb-14 sm:mt-24 md:mt-48 sm:mb-24 md:mb-36">
					<div className="flex flex-col md:flex-row items-center justify-around px-4 sm:px-6 md:px-8">
						<article className="w-full md:w-1/3 mb-8 md:mb-0">
							<h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-200">
								EVM Compatibility
							</h1>
							<p className="text-gray-200 text-base sm:text-lg mt-4 sm:mt-6 font-thin">
								Our EVM compatible chain is designed to empower
								business, developers, and innovators by
								providing a secure, value-preserving
								environment.
							</p>
						</article>
						<div
							ref={etheriumSvgRef}
							className={`${
								isSvgVisible ? styles.fadeInUpSlow : ""
							}`}
						>
							<EtheriumSvg />
						</div>
					</div>
				</section>
			</SvgBackground>

			<SvgBackground>
				<section className="mt-20 sm:mt-24 md:mt-72">
					<div className="flex flex-col md:flex-row items-center justify-center md:pl-36 px-4">
						<EigenDaSvg />
						<div
							ref={animeGirlRef}
							className={`h-fit hidden md:flex md:w-fit relative bottom-72 left-6 ${
								isAnimeGirlVisible
									? styles.fadeInUp
									: "opacity-0"
							}`}
						>
							<Image
								className="w-4/5"
								src={animegirl}
								height={1000}
								width={1000}
								alt="Anime Girl"
							/>
						</div>
						<article className="w-full mt-12 md:w-1/3">
							<h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-200">
								Powered by EigenDA
							</h1>
							<p className="text-gray-200 text-base sm:text-lg mt-4 sm:mt-6 font-thin">
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Animi laboriosam maxime
								corrupti iure ipsum
							</p>
						</article>
					</div>
				</section>

				<section className="mt-12 sm:mt-24 md:mt-32">
					<div className="flex flex-col md:flex-row-reverse items-center justify-around px-4 sm:px-6 md:px-8">
						<SUSDSvg />
						<article className="w-full md:w-1/3">
							<h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-200">
								Operated by Stablecoin
							</h1>
							<p className="text-gray-200 mt-4 sm:mt-6 text-base sm:text-lg font-thin">
								SUSD is our native currency pegged 1:1 to USD
								and support for USDT, USDC, and DAI, we
								eliminate the volatility that often plagues the
								crypto space, ensuring that your assets maintain
								their value.
							</p>
						</article>
					</div>
				</section>
			</SvgBackground>
		</div>
	);
}
