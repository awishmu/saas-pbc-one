// import { User } from "@prisma/client";
import type { Icon } from "lucide-react";

import { Icons } from "@/components/shared/icons";

export type DocsConfig = {
	mainNav: MainNavItem[];
	sidebarNav: SidebarNavItem[];
}


// landing sections
export type InfoList = {
	icon: keyof typeof Icons;
	title: string;
	description: string;
};

export type InfoLdg = {
	title: string;
	image: string;
	description: string;
	list: InfoList[];
}

export type FeatureLdg = {
  title: string;
  description: string;
  link: string;
  icon: keyof typeof Icons;
};

export type TestimonialType = {
  name: string;
  job: string;
  image: string;
  review: string;
};