"use client";
import { useEffect } from "react";
import Image from "next/image";
import image from "../public/Testnet.png";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaMedium } from "react-icons/fa6";
import { SiGitbook } from "react-icons/si";
import { GiDiamonds } from "react-icons/gi";

export default function ComingSoon() {
	useEffect(() => {
		window.scrollTo({
			top: document.body.scrollHeight,
		});
	}, []);

	return (
		<div className="relative w-full p-10">
			<Image
				src={image}
				alt="Coming Soon"
				layout="responsive"
				className="w-full h-auto rounded-xl border border-solid border-neutral-800"
			/>

			<div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-0 right-0 text-center px-4">
				<div className=" mb-2 md:mb-20 flex gap-7 justify-center">
					<a className="text-2xl" href="">
						<FaTelegramPlane />
					</a>
					<a className="text-2xl" href="">
						<BsTwitterX />
					</a>
					<a className="text-2xl" href="">
						<FaMedium />
					</a>
					<a className="text-2xl" href="">
						<SiGitbook />
					</a>
				</div>

				<p className="text-white text-lg p-10 sm:text-xl md:text-2xl font-light">
					Looking for StableChain?{" "}
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
	);
}
