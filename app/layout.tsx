import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "LiTERatE - Literary Translation Evaluation and Rating Ensemble",
	description:
		"A benchmark for evaluating machine translation systems on literary text from Chinese, Japanese, and Korean languages using an ensemble of LLM judges.",
	keywords: [
		"machine translation",
		"literary translation",
		"benchmark",
		"NLP",
		"CJK languages",
		"Chinese translation",
		"Japanese translation",
		"Korean translation",
		"LLM evaluation",
	],
	authors: [{ name: "LiTERatE Team" }],
	creator: "LiTERatE Team",
	publisher: "LiTERatE",
	icons: {
		icon: "/literate-logo.svg",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://literate.readomni.com",
		title: "LiTERatE - Literary Translation Evaluation and Rating Ensemble",
		description:
			"A benchmark for evaluating machine translation systems on literary text from Chinese, Japanese, and Korean languages.",
		siteName: "LiTERatE Benchmark",
		images: [
			{
				url: "/images/og-image.svg",
				width: 1200,
				height: 630,
				alt: "LiTERatE - Literary Translation Benchmark",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "LiTERatE - Literary Translation Evaluation and Rating Ensemble",
		description:
			"A benchmark for evaluating machine translation systems on literary text from Chinese, Japanese, and Korean languages.",
		images: ["/images/og-image.svg"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				{/* Inline blocking script to prevent FOUT */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
              (function() {
                try {
                  // Check if theme is stored in localStorage
                  const storedTheme = localStorage.getItem('theme');
                  
                  // If theme is stored, use it
                  if (storedTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else if (storedTheme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    // Otherwise, check system preference
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    if (prefersDark) {
                      document.documentElement.classList.add('dark');
                    } else {
                      document.documentElement.classList.remove('dark');
                    }
                  }
                } catch (e) {
                  // Fail silently if localStorage is not available
                  console.warn('Failed to access localStorage for theme detection');
                }
              })();
            `,
					}}
				/>
				{/* Keep the original script for client-side theme changes */}
				<Script id="theme-script" strategy="afterInteractive">
					{`
            (function() {
              // Set up listener for system theme changes
              const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
              const handleChange = (e) => {
                const storedTheme = localStorage.getItem('theme');
                if (!storedTheme) {
                  document.documentElement.classList.toggle('dark', e.matches);
                }
              };
              
              mediaQuery.addEventListener('change', handleChange);
            })();
          `}
				</Script>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100`}
			>
				{children}
			</body>
		</html>
	);
}
