export function Footer() {
	return (
		<footer className="max-w-5xl mx-auto mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
			<p className="mb-4">
				Built by the team at{" "}
				<a
					href="https://readomni.com/"
					className="underline hover:text-primary"
					target="_blank"
					rel="noopener noreferrer"
				>
					Omni
				</a>
			</p>
			<div className="flex justify-center space-x-6">
				<a
					href="https://discord.gg/M6N69PuMKt"
					className="hover:text-primary"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Discord"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<circle cx="9" cy="12" r="1"></circle>
						<circle cx="15" cy="12" r="1"></circle>
						<path d="M7.5 7.5c3.5-1 5.5-1 9 0"></path>
						<path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
						<path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5"></path>
						<path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.48-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5"></path>
					</svg>
				</a>
				<a
					href="https://twitter.com/readomni"
					className="hover:text-primary"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Twitter"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
					</svg>
				</a>
				<a
					href="https://readomni.com/"
					className="hover:text-primary"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Website"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<circle cx="12" cy="12" r="10"></circle>
						<line x1="2" y1="12" x2="22" y2="12"></line>
						<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
					</svg>
				</a>
			</div>
		</footer>
	);
}
