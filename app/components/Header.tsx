"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ThemeSwitcher, type ThemeMode } from "./ThemeSwitcher";
import {
	MenuIcon,
	CloseIcon,
	LightIcon,
	DarkIcon,
	SystemIcon,
} from "./icons/ThemeIcons";

export function Header() {
	const [themeMode, setThemeMode] = useState<ThemeMode>("system");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Initialize theme based on user preference or system preference
	useEffect(() => {
		// Check if user has a preference stored
		const storedTheme = localStorage.getItem("theme") as ThemeMode | null;
		if (storedTheme === "light" || storedTheme === "dark") {
			setThemeMode(storedTheme);
			document.documentElement.classList.toggle("dark", storedTheme === "dark");
		} else {
			// If no preference or set to system, check system preference
			setThemeMode("system");
			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)",
			).matches;
			document.documentElement.classList.toggle("dark", prefersDark);

			// Add listener for system theme changes
			const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
			const handleChange = (e: MediaQueryListEvent) => {
				if (themeMode === "system") {
					document.documentElement.classList.toggle("dark", e.matches);
				}
			};

			mediaQuery.addEventListener("change", handleChange);
			return () => mediaQuery.removeEventListener("change", handleChange);
		}
	}, [themeMode]);

	const setTheme = (mode: ThemeMode) => {
		setThemeMode(mode);

		if (mode === "system") {
			localStorage.removeItem("theme");
			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)",
			).matches;
			document.documentElement.classList.toggle("dark", prefersDark);
		} else {
			localStorage.setItem("theme", mode);
			document.documentElement.classList.toggle("dark", mode === "dark");
		}
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="max-w-5xl mx-auto mb-12">
			<div className="flex justify-between items-center gap-4 mb-8 py-4">
				<Link href="/" className="flex items-center gap-2 group">
					<div className="w-10 h-10 flex items-center justify-center rounded-lg overflow-hidden transition-transform group-hover:scale-105">
						<Image
							src="/literate-logo.svg"
							alt="LiTERatE Logo"
							width={40}
							height={40}
							className="w-full h-full"
						/>
					</div>
					<h1 className="text-2xl sm:text-3xl font-bold group-hover:text-primary transition-colors">
						LiTERatE
					</h1>
				</Link>

				{/* Desktop navigation */}
				<div className="hidden md:flex items-center gap-6">
					<nav className="flex gap-6">
						<Link
							href="/"
							className="font-medium hover:text-primary focus:text-primary transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full focus:after:w-full after:transition-all"
						>
							Leaderboard
						</Link>
						<Link
							href="/methodology"
							className="font-medium hover:text-primary focus:text-primary transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full focus:after:w-full after:transition-all"
						>
							Methodology
						</Link>
					</nav>

					{/* Theme switcher with Radix Popover */}
					<ThemeSwitcher themeMode={themeMode} setTheme={setTheme} />
				</div>

				{/* Mobile menu button */}
				<div className="flex md:hidden items-center gap-2">
					{/* Use the same ThemeSwitcher component for mobile */}
					<ThemeSwitcher themeMode={themeMode} setTheme={setTheme} />

					<button
						onClick={toggleMenu}
						className="p-2 rounded-full bg-secondary hover:bg-secondary/80 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <CloseIcon /> : <MenuIcon />}
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			{isMenuOpen && (
				<div className="md:hidden bg-card rounded-lg shadow-lg p-4 mb-6 animate-in slide-in-from-top-5">
					<nav className="flex flex-col gap-4">
						<Link
							href="/"
							className="font-medium hover:text-primary focus:text-primary transition-colors p-2 rounded-md hover:bg-secondary/50 focus:bg-secondary/50"
							onClick={() => setIsMenuOpen(false)}
						>
							Leaderboard
						</Link>
						<Link
							href="/methodology"
							className="font-medium hover:text-primary focus:text-primary transition-colors p-2 rounded-md hover:bg-secondary/50 focus:bg-secondary/50"
							onClick={() => setIsMenuOpen(false)}
						>
							Methodology
						</Link>
						<div className="border-t border-border pt-4 mt-2">
							<p className="text-sm font-medium mb-2">Theme</p>
							<div className="flex items-center gap-2">
								<button
									onClick={() => setTheme("light")}
									className={`p-2 rounded-md flex items-center gap-2 ${
										themeMode === "light"
											? "bg-primary/10 text-primary"
											: "hover:bg-secondary/50"
									}`}
								>
									<LightIcon />
									<span className="text-sm">Light</span>
								</button>
								<button
									onClick={() => setTheme("dark")}
									className={`p-2 rounded-md flex items-center gap-2 ${
										themeMode === "dark"
											? "bg-primary/10 text-primary"
											: "hover:bg-secondary/50"
									}`}
								>
									<DarkIcon />
									<span className="text-sm">Dark</span>
								</button>
								<button
									onClick={() => setTheme("system")}
									className={`p-2 rounded-md flex items-center gap-2 ${
										themeMode === "system"
											? "bg-primary/10 text-primary"
											: "hover:bg-secondary/50"
									}`}
								>
									<SystemIcon />
									<span className="text-sm">System</span>
								</button>
							</div>
						</div>
					</nav>
				</div>
			)}
		</header>
	);
}
