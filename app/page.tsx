import ScalableHero from "@/Components/BuilderIo/ScalableComponents/ScalableHero";
import HeroComingSoon from "@/Components/Hero";
import InfiniteScroll from "@/Components/InfiniteScroll";
import LastFooter from "@/Components/LastFooter";
import Orbit from "@/Components/Orbit";
import { ShimmerButton } from "@/Components/ui/ShrimmerButton";

export default function Home() {
	return (
		<>
			<main className="flex flex-col items-center gap-14  md:p-0 justify-between ">
				<HeroComingSoon />

				<ShimmerButton className="shadow-2xl">
					<span className="whitespace-pre-wrap text-center text-sm font-normal leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
						Ecosystem Partners
					</span>
				</ShimmerButton>
				<InfiniteScroll />
				<ScalableHero />
				<Orbit />
			</main>
			<LastFooter />
		</>
	);
}
