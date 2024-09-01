import ScalableHero from "@/Components/BuilderIo/ScalableComponents/ScalableHero";
import ChooseStable from "@/Components/ChooseStable";
import CommingSoon from "@/Components/CommingSoon";
import EcosystemPartners from "@/Components/Ecosystem";
import Footer from "@/Components/Footer";
import InfiniteScroll from "@/Components/InfiniteScroll";
import LastFooter from "@/Components/LastFooter";

import Orbit from "@/Components/Orbit";

export default function Home() {
	return (
		<>
			<main className="flex min-h-screen flex-col items-center justify-between ">
				<CommingSoon />
				<EcosystemPartners title="Ecosystem Partners" />
				<InfiniteScroll />
				<ScalableHero />
				<Orbit />
			</main>
			<Footer />
			<LastFooter />
		</>
	);
}
