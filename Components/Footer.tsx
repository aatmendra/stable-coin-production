import Image from "next/image";
import hero from "@/public/Hero.webp";
import animegirl1 from "@/public/Anime Girl 1.webp";
import ChooseStable from "./ChooseStable";

export default function Footer() {
	return (
		<footer className="relative">
			<div className="mt-52 ">
				<Image
					layout="responsive"
					className="w-full h-auto absolute  z-0"
					src={hero}
					alt="logo"
					width={100}
					height={100}
				/>
				<div className="relative bottom-36 flex flex-col h-full">
					<ChooseStable />
				</div>
			</div>
		</footer>
	);
}
