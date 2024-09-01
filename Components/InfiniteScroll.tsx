import Marquee from "react-fast-marquee";
export default function InfiniteScroll() {
	return (
		<div className="mt-20 w-full">
			<Marquee className="bg-[#95FF00] w-full h-20 absolute ">
				<h1 className="text-2xl">Hello 1 </h1>
				<h1 className="text-2xl">Hello 2 </h1>
				<h1 className="text-2xl">Hello 3 </h1>
			</Marquee>
			<Marquee className="bg-[#2C4B00] h-20 relative top-0 flex items-center gap-4 justify-between">
				<h1 className="text-2xl">Hello 1 </h1>
				<h1 className="text-2xl">Hello 2 </h1>
				<h1 className="text-2xl">Hello 3 </h1>
			</Marquee>
		</div>
	);
}
