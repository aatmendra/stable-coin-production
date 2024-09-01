interface EcosystemPartnersProps {
	title: string;
}

export default function EcosystemPartners({ title }: EcosystemPartnersProps) {
	return (
		<section className="px-9 mt-16 py-2.5 text-xl bg-[#454545] shadow-custom text-center border border-gray-500 text-white rounded-[33px]">
			<h2>{title}</h2>
		</section>
	);
}
