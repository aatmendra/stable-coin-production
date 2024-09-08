import ImpactBox from "./ImpactBox";
import performance from "@/public/Performance.webp";
import Image from "next/image";
import yields from "@/public/Yield.webp";
import transparent from "@/public/Transparent.webp";

export default function ImageGrid() {
	return (
		<section className="mt-32 w-full max-md:mt-10 max-md:max-w-full">
			<div className="flex gap-0 max-md:flex-col">
				<div className="flex flex-col w-full relative max-md:ml-0 max-md:w-full">
					<Image
						src={yields}
						alt="Scalable infrastructure visualization"
						className="object-contain grow w-full rounded-2xl aspect-[2.09] max-md:mt-4 max-md:max-w-full border border-solid border-neutral-600"
						width={1000}
						height={1000}
					/>
					<div className="absolute bottom-10  w-full text-start px-5">
						<p className="text-2xl text-gray-200">Native yield</p>
						<p className="text-gray-300 py-1 font-thin">
							Bridged assets are staked through Maker DAO/Eigen
							Layer
						</p>
					</div>
				</div>
				<div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
					<ImpactBox />
				</div>
			</div>
			<div className="mt-4 w-full max-md:max-w-full">
				<div className="flex gap-5 max-md:flex-col">
					<div className="flex flex-col relative w-6/12 max-md:ml-0 max-md:w-full">
						<Image
							src={performance}
							width={1000}
							height={1000}
							alt="Decentralized application showcase"
							className="object-contain grow w-full rounded-2xl aspect-[1.68] max-md:mt-4 max-md:max-w-full border border-solid border-neutral-600"
						/>
						<div className="absolute bottom-10  w-full text-start px-5">
							<p className="text-2xl text-gray-200">
								Built for performance{" "}
							</p>
							<p className="text-gray-300 py-1 font-thin">
								Trade, Send, or Pay worldwide without any
								restrictions and limitation with our secure and
								fast infrastructure
							</p>
						</div>
					</div>
					<div className="flex flex-col relative ml-5 w-6/12 max-md:ml-0 max-md:w-full">
						<Image
							src={transparent}
							alt="Protocol value store representation"
							width={1000}
							height={1000}
							className="object-contain grow w-full rounded-2xl aspect-[1.68] max-md:mt-4 max-md:max-w-full border border-solid border-neutral-600"
						/>
						<div className="absolute bottom-10  w-full text-start px-5">
							<p className="text-2xl text-gray-200">
								Transparent
							</p>
							<p className="text-gray-300 py-1 font-thin">
								Every transaction are documented on-chain
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
