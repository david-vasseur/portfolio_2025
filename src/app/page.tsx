import Wrapper from "./__components/features/Wrapper";
import SectionHome from "./__components/layout/SectionHome";
import SectionWork from "./__components/layout/SectionWork";
import SectionContact from "./__components/layout/SectionContact";

export default function Home() {
	return (		
		<main className="w-full">
			<Wrapper>
				<section id="section-1" className="h-[100vh] w-full flex justify-center items-center">
					<SectionHome />
				</section>
				<section id="section-2" className="h-[100vh] w-full flex justify-center items-center">
					<SectionWork />
				</section>
				<section id="section-3" className="h-[100vh] w-full flex justify-center items-center">
					<SectionContact />
				</section>
			</Wrapper>	
		</main>
	);
}
