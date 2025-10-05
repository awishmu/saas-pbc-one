import * as React from "react"

// import { Footer } from "@/components/nav/footer"
// import { Header } from "@/componentns/nav/header";

interface LandingLayoutProps{
	children: React.ReactNode
}

export default function LandingLayout({
  children,
}: LandingLayoutProps) {
  return (
    <div>
     
		<main className="flex-1">{children}</main>
	 
    </div>
  )
}
