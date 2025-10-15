import Link from "next/link";

import { features } from "@/config/landing";
import { Button } from "@/components/ui/button";
import { HeaderSection } from "@/components/shared/header-section";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function Features() {
	return (
		<section>
			<div className="pb-6 pt-28">
				<MaxWidthWrapper>
					<HeaderSection
						label="Features"
						title="Discover all features"
						subtitle="Harum quae dolore invenmtore repuidandae? rorrup aut teporibus aiarutur."
					/>
				</MaxWidthWrapper>			
			</div>
		</section>
	)
}