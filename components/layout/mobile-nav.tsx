"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Menu, X } from "lucide-react";
// import { useSession } from "next-auth/react";

import { docsConfig } from "@/config/docs";
import { marketingConfig } from "@/config/marketing";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { DocsSidebarNav } from "@/components/docs/sidebar-nav";
import { Icons } from "@/components/shared/icons";

import { ModeToggle} from "./mode-toggle"

export function NavMobile() {
    // const { data: session } = useSession();
    const [ open, setOpen ] = useState(false);
    const selectedLayout = useSelectedLayoutSegment();
    const documentation = selectedLayout === "docs";

    const configMap = {
        docs: docsConfig.mainNav,
    };

    const links = (selectedLayout && configMap[selectedLayout]) || marketingConfig.mainNav;

    // prevent body scroll when modal is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open]);

    return (
        <>
            <button 
                onClick={() => setOpen(!open)}
                className={cn(
                    "fixed right-2 top-2.5 "
                )}
            >


            </button>
        </>
    )
}