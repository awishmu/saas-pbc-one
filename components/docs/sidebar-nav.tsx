"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types"
import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"

export interface DocsSidebarNavProps {
    setOpen?: (boolean) => void;
}

export function DocsSidebarNav({ setOpen }: DocsSidebarNavProps) {
    const pathname = usePathname();
    const items = docsConfig.sidebarNav;

    
}