import { infos } from "@/config/landing";
import HeroLanding from "@/components/sections/hero-landing";
import PreviewLanding from "@/components/sections/preview-landing";
import Powered from "@/components/sections/powered"; 
import BentoGrid from "@/components/sections/bentogrid"; 
import InfoLanding from "@/components/sections/info-landing";


export default function MarketingPage() {
	return (
		<>
			<HeroLanding />
			<PreviewLanding />
			<Powered />
			<BentoGrid />
			<InfoLanding data={infos[0]} reverse={[true]}/>
			<div className="w-full bg-purple-600 m-4">
				Marketing Page
			</div> 
		</>
		
	)
	
}