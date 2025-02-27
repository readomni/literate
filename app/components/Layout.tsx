"use client";

import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div className="min-h-screen p-6 sm:p-8 pb-20 bg-background text-foreground">
			<Header />
			<main className="max-w-5xl mx-auto">{children}</main>
			<Footer />
		</div>
	);
}
