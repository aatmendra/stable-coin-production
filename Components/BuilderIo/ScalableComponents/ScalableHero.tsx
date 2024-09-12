import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import ImageGrid from "./ImageGrid";

export default function ScalableHero() {
	return (
		<main className="flex flex-col mt-48 mb-16 w-full md:w-[95%]">
			<HeroTitle />
			<HeroDescription />
			<ImageGrid />
		</main>
	);
}
