"use client";

import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { LightIcon, DarkIcon, SystemIcon } from "./icons/ThemeIcons";

// Theme type definition
export type ThemeMode = "system" | "light" | "dark";

// Theme option component for reusability
const ThemeOption = ({
	mode,
	currentTheme,
	onClick,
	icon,
}: {
	mode: ThemeMode;
	currentTheme: ThemeMode;
	onClick: () => void;
	icon: React.ReactNode;
}) => (
	<button
		onClick={onClick}
		className={`w-full text-left px-3 py-1.5 text-sm rounded-sm flex items-center gap-2 ${
			currentTheme === mode
				? "bg-primary/10 text-primary"
				: "hover:bg-secondary focus:bg-secondary focus:outline-none"
		}`}
	>
		{icon}
		{mode.charAt(0).toUpperCase() + mode.slice(1)}
	</button>
);

// ThemeSwitcher component
export const ThemeSwitcher = ({
	themeMode,
	setTheme,
}: {
	themeMode: ThemeMode;
	setTheme: (mode: ThemeMode) => void;
}) => {
	const [open, setOpen] = useState(false);

	const getThemeIcon = () => {
		switch (themeMode) {
			case "light":
				return <LightIcon />;
			case "dark":
				return <DarkIcon />;
			default:
				return <SystemIcon />;
		}
	};

	return (
		<Popover.Root open={open} onOpenChange={setOpen}>
			<Popover.Trigger asChild>
				<button
					className="p-2 rounded-full bg-secondary hover:bg-secondary/80 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
					aria-label="Toggle theme"
				>
					{getThemeIcon()}
				</button>
			</Popover.Trigger>
			<Popover.Portal>
				<Popover.Content
					className="bg-card rounded-md shadow-lg border border-border overflow-hidden z-10 p-1 animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2"
					sideOffset={5}
					align="end"
					onEscapeKeyDown={(e) => e.preventDefault()}
					onOpenAutoFocus={(e) => e.preventDefault()}
				>
					<Popover.Close className="hidden" />
					<div className="p-1 flex flex-col gap-1">
						<Popover.Close asChild>
							<ThemeOption
								mode="light"
								currentTheme={themeMode}
								onClick={() => {
									setTheme("light");
									setOpen(false);
								}}
								icon={<LightIcon />}
							/>
						</Popover.Close>
						<Popover.Close asChild>
							<ThemeOption
								mode="dark"
								currentTheme={themeMode}
								onClick={() => {
									setTheme("dark");
									setOpen(false);
								}}
								icon={<DarkIcon />}
							/>
						</Popover.Close>
						<Popover.Close asChild>
							<ThemeOption
								mode="system"
								currentTheme={themeMode}
								onClick={() => {
									setTheme("system");
									setOpen(false);
								}}
								icon={<SystemIcon />}
							/>
						</Popover.Close>
					</div>
					<Popover.Arrow className="fill-border" />
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	);
};
