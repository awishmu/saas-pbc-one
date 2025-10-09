// import { signIn } from "next-auth/react";
import {
	Dispatch,
	SetStateAction,
	useCallback,
	useMemo,
	useState,
} from "react";

import { Icons } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
// import { Modal } from "@/components/ui/modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { siteConfig } from "@/config/site";

