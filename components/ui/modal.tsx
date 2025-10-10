"use client";

import { Dispatch, SetStateAction } from "react";
// import { useRouter } from "next/router";
import { Drawer } from "vaul";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

interface ModalProps {
	children: React.ReactNode;
	className?: string;
}
