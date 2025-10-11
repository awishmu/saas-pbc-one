"use clent"

import { useContext } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
//import { useSession } from "next-auth/react";

import {  docsConfig } from "@/config/docs";
import { marketingConfig } from "@/config/marketing";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { DocsSearch } from "@/components/docs/search";
import { ModalContext } from "@/components/modals/provider";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width/wrapper";

interface NavBarProps {
    scroll?: boolean;
    large?: boolean;
}

export function NavBar({ scroll = false }: NavBarProps) {
    const scrolled = useScroll(50);
	//const { data: session, status } = useSession();
	const { setShowSignInModal} = useContext(ModalContext);
	
	const selectedlayout = useSelectedLayoutSegment();
	const documentation = selectedLayout === "docs";
	
	const configMap = {
		docs: docsConfig.mainNav,
	}
	
	const links = (selectedlayout && configMap[selectedLayout]) || marketingConfig.mainNav;
	
	return (
		<header></header>
	)
	
	
}