"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSelectLayoutSegment } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useSession } from "next-auth/react";

import { docsConfig } from "@/config/docs";