import { infos } from "@/config/landing";
import HeroLanding from "@/components/sections/hero-landing"; 

export default function MarketingPage() {
	return (
		<>
			<HeroLanding />
			<div className="w-full bg-purple-600 m-4">
				Marketing Page
			</div> 
		</>
		
	)
	
}