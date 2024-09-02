import Image from "next/image";
import hero from "@/public/Hero.webp";
import ChooseStable from "./ChooseStable";

export default function Footer() {
	return (
		<footer className="relative">
			<div className="mt-96 md:mt-52 ">
				<Image
					layout="responsive"
					className="w-full h-auto top-[80%] bottom-0 md:top-6 mt-[32rem] md:mt-1 absolute  z-0"
					src={hero}
					alt="logo"
					width={100}
					height={100}
				/>
				<div className=" relative bottom-0 md:bottom-36 flex flex-col h-full">
					<ChooseStable />
				</div>
			</div>
		</footer>
	);
}
