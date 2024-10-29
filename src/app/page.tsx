import ExperienceAndProjectsTabs from "@/components/ExperienceAndProjectsTabs";
import PresentationCard from "@/components/PresentationCard";

export default function Home() {
	return (
		<>
			<div className="min-h-screen flex flex-col items-center justify-center gap-8 p-4">
				<PresentationCard />
				<ExperienceAndProjectsTabs />
			</div>
		</>
	);
}
