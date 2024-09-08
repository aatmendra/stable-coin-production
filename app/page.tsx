import ScalableHero from "@/Components/BuilderIo/ScalableComponents/ScalableHero";
import CommingSoon from "@/Components/CommingSoon";
import EcosystemPartners from "@/Components/Ecosystem";
import InfiniteScroll from "@/Components/InfiniteScroll";
import LastFooter from "@/Components/LastFooter";
import Orbit from "@/Components/Orbit";

export default function Home() {
	return (
		<>
			<main className="flex flex-col items-center gap-6 justify-between ">
				<CommingSoon />
				<EcosystemPartners title="Ecosystem Partners" />
				<InfiniteScroll />
				<ScalableHero />
				<Orbit />
			</main>
			<LastFooter />
		</>
	);
}
