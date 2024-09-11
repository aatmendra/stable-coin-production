"use client";
import { useEffect } from "react";
import Image from "next/image";
import image from "../public/Testnet.png";
import { GiDiamonds } from "react-icons/gi";
import { DockDemo } from "@/Components/DockDemo";

export default function ComingSoon() {
	useEffect(() => {
		window.scrollTo({
			top: document.body.scrollHeight,
		});
	}, []);

	return (
		<div className="relative w-full  p-5">
			<Image
				src={image}
				alt="Coming Soon"
				layout="responsive"
				className="w-full h-screen rounded-xl border border-solid border-neutral-700"
			/>

			<div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-0 right-0 text-center px-4">
				<div className=" mb-2 md:mb-20 flex gap-7 justify-center">
					<DockDemo />
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
