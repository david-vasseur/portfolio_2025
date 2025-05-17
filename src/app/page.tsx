import Wrapper from "./__components/Wrapper";
import SectionContact from "./__components/SectionContact";

export default function Home() {
	return (		
		<main className="w-full">
			<Wrapper>
				<section id="section-1" className="h-[100vh] w-full flex justify-center items-center">
					<h2 className="font-black text-5xl text-center">Je suis la section 1</h2>
				</section>
				<section id="section-2" className="h-[100vh] w-full flex justify-center items-center">
					<h2 className="font-black text-5xl text-center">Je suis la section 2</h2>
				</section>
				<section id="section-3" className="h-[100vh] w-full flex justify-center items-center">
					<SectionContact />
				</section>
			</Wrapper>	
		</main>
	);
}
