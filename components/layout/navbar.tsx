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



interface NavBarProps {
    scroll?: boolean;
    large?: boolean;
}

export function NavBar({ scroll = false }: NavBarProps) {
    //
}