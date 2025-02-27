"use client";

import { useState } from "react";
import { ChunkData, GlossaryTerm } from "./types";

interface ChunkVisualizerProps {
	chunks: ChunkData[];
	initialChunkIndex?: number;
}

export default function ChunkVisualizer({
	chunks,
	initialChunkIndex = 0,
}: ChunkVisualizerProps) {
	const [currentChunkIndex, setCurrentChunkIndex] = useState(initialChunkIndex);
	const currentChunk = chunks[currentChunkIndex];

	// Function to highlight glossary terms in text while preserving newlines
	const highlightGlossaryTerms = (text: string, glossary: GlossaryTerm[]) => {
		// Split the text by newlines to preserve them
		const lines = text.split("\n");

		// Sort glossary terms by length (descending) to avoid partial replacements
		const sortedGlossary = [...glossary].sort(
			(a, b) => b.raw.length - a.raw.length,
		);

		// Process each line separately
		const processedLines = lines.map((line) => {
			let processedLine = line;

			for (const term of sortedGlossary) {
				const regex = new RegExp(term.raw, "g");
				processedLine = processedLine.replace(
					regex,
					`<span class="bg-amber-100 dark:bg-amber-300/30 px-1 rounded cursor-pointer group relative">
						${term.raw}
						<span class="absolute hidden group-hover:block bg-background text-popover-foreground p-2 rounded-lg shadow-lg -top-10 left-0 z-10 text-sm min-w-24 px-4 text-center">
							${term.translation}
						</span>
					</span>`,
				);
			}

			return processedLine;
		});

		// Join the processed lines with <br> tags for HTML rendering
		return processedLines.join("<br>");
	};

	const navigateChunks = (direction: "prev" | "next") => {
		if (direction === "prev" && currentChunkIndex > 0) {
			setCurrentChunkIndex(currentChunkIndex - 1);
		} else if (direction === "next" && currentChunkIndex < chunks.length - 1) {
			setCurrentChunkIndex(currentChunkIndex + 1);
		}
	};

	if (!currentChunk) {
		return (
			<div className="text-center p-8 text-muted-foreground">
				No chunks available to display
			</div>
		);
	}

	return (
		<div className="border rounded-lg overflow-hidden">
			{/* Navigation header */}
			<div className="bg-muted p-4 flex items-center justify-between">
				<h4 className="font-medium">
					Chunk {currentChunkIndex + 1} of {chunks.length}
				</h4>
				<div className="flex gap-2">
					<button
						onClick={() => navigateChunks("prev")}
						disabled={currentChunkIndex === 0}
						className="px-3 py-1 rounded bg-primary/10 hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
					>
						Previous
					</button>
					<button
						onClick={() => navigateChunks("next")}
						disabled={currentChunkIndex === chunks.length - 1}
						className="px-3 py-1 rounded bg-primary/10 hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
					>
						Next
					</button>
				</div>
			</div>

			{/* Main content */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
				{/* Source text and context */}
				<div className="space-y-4">
					<div>
						<h5 className="text-sm font-semibold mb-2 text-muted-foreground">
							Source Text
						</h5>
						<div className="bg-card p-4 rounded border border-border">
							<div
								dangerouslySetInnerHTML={{
									__html: highlightGlossaryTerms(
										currentChunk.text,
										currentChunk.glossary,
									),
								}}
							/>
						</div>
					</div>

					{currentChunk.prev && (
						<div>
							<h5 className="text-sm font-semibold mb-2 text-muted-foreground">
								Previous Context
							</h5>
							<div className="bg-muted/50 p-4 rounded border border-border text-sm">
								<div
									dangerouslySetInnerHTML={{
										__html: currentChunk.prev.split("\n").join("<br>"),
									}}
								/>
							</div>
						</div>
					)}

					{currentChunk.next && (
						<div>
							<h5 className="text-sm font-semibold mb-2 text-muted-foreground">
								Next Context
							</h5>
							<div className="bg-muted/50 p-4 rounded border border-border text-sm">
								<div
									dangerouslySetInnerHTML={{
										__html: currentChunk.next.split("\n").join("<br>"),
									}}
								/>
							</div>
						</div>
					)}

					<div>
						<h5 className="text-sm font-semibold mb-2 text-muted-foreground">
							Glossary
						</h5>
						<div className="bg-card p-4 rounded border border-border">
							<table className="w-full text-sm">
								<thead>
									<tr className="border-b">
										<th className="text-left pb-2">Term</th>
										<th className="text-left pb-2">Translation</th>
										<th className="text-left pb-2">Gender</th>
									</tr>
								</thead>
								<tbody>
									{currentChunk.glossary.map(
										(term: GlossaryTerm, index: number) => (
											<tr key={index} className="border-b last:border-0">
												<td className="py-2">{term.raw}</td>
												<td className="py-2">{term.translation}</td>
												<td className="py-2">{term.gender}</td>
											</tr>
										),
									)}
								</tbody>
							</table>
						</div>
					</div>
				</div>

				{/* Translations */}
				<div className="space-y-4">
					<div>
						<h5 className="text-sm font-semibold mb-2 text-muted-foreground">
							Human Translation
						</h5>
						<div className="bg-card p-4 rounded border border-border">
							<div
								dangerouslySetInnerHTML={{
									__html: currentChunk.translation.split("\n").join("<br>"),
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
