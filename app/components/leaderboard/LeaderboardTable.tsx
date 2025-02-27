import { ModelData } from "@/app/data/leaderboard";

type SortField = "model" | "score";
type SortDirection = "asc" | "desc";

interface LeaderboardTableProps {
	sortedData: ModelData[];
	sortField: SortField;
	sortDirection: SortDirection;
	handleSort: (field: SortField) => void;
	originalData: ModelData[]; // For calculating ranks
}

export default function LeaderboardTable({
	sortedData,
	sortField,
	sortDirection,
	handleSort,
	originalData,
}: LeaderboardTableProps) {
	return (
		<div className="bg-card rounded-lg shadow-md border border-border overflow-hidden">
			<div className="overflow-x-auto">
				<table className="w-full border-collapse">
					<thead>
						<tr className="bg-muted">
							<th className="p-4 text-left font-bold text-muted-foreground">
								Rank
							</th>
							<th
								className="p-4 text-left font-bold cursor-pointer hover:bg-secondary/70 focus:bg-secondary/70 transition-colors group focus-within:bg-secondary/70 rounded-sm"
								onClick={() => handleSort("model")}
								tabIndex={0}
								role="button"
								aria-label={`Sort by model name ${sortField === "model" && sortDirection === "asc" ? "descending" : "ascending"}`}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										e.preventDefault();
										handleSort("model");
									}
								}}
							>
								<div className="flex items-center">
									Model
									<span
										className={`ml-2 transition-opacity ${
											sortField === "model"
												? "text-primary opacity-100"
												: "opacity-0 group-hover:opacity-50 group-focus:opacity-50"
										}`}
									>
										{sortField === "model" ? (
											sortDirection === "asc" ? (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<path d="m18 15-6-6-6 6" />
												</svg>
											) : (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<path d="m6 9 6 6 6-6" />
												</svg>
											)
										) : (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path d="m6 9 6 6 6-6" />
											</svg>
										)}
									</span>
								</div>
							</th>
							<th className="p-4 text-left font-bold text-muted-foreground hidden md:table-cell">
								Version
							</th>
							<th
								className="p-4 text-right font-bold cursor-pointer hover:bg-secondary/70 focus:bg-secondary/70 transition-colors group focus-within:bg-secondary/70 rounded-sm whitespace-nowrap min-w-[100px]"
								onClick={() => handleSort("score")}
								tabIndex={0}
								role="button"
								aria-label={`Sort by score ${sortField === "score" && sortDirection === "asc" ? "descending" : "ascending"}`}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										e.preventDefault();
										handleSort("score");
									}
								}}
							>
								<div className="flex items-center justify-end">
									Win Rate
									<span
										className={`ml-2 transition-opacity ${
											sortField === "score"
												? "text-primary opacity-100"
												: "opacity-0 group-hover:opacity-50 group-focus:opacity-50"
										}`}
									>
										{sortField === "score" ? (
											sortDirection === "asc" ? (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<path d="m18 15-6-6-6 6" />
												</svg>
											) : (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<path d="m6 9 6 6 6-6" />
												</svg>
											)
										) : (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path d="m6 9 6 6 6-6" />
											</svg>
										)}
									</span>
								</div>
							</th>
						</tr>
					</thead>
					<tbody>
						{sortedData.map((entry) => {
							// Calculate the rank based on score for display
							const displayRank =
								originalData
									.sort((a, b) => b.score - a.score)
									.findIndex((item) => item.model === entry.model) + 1;

							return (
								<tr
									key={entry.model}
									className="border-b border-border hover:bg-muted/50 transition-colors"
								>
									<td className="p-4 text-left text-muted-foreground">
										{displayRank}
									</td>
									<td className="p-4 text-left font-medium">
										{entry.link ? (
											<a
												href={entry.link}
												target="_blank"
												rel="noopener noreferrer"
												className="text-primary hover:underline hover:opacity-80 transition-opacity"
											>
												{entry.model}
											</a>
										) : (
											entry.model
										)}
									</td>
									<td className="p-4 text-left text-muted-foreground text-sm hidden md:table-cell">
										{entry.version || "—"}
									</td>
									<td className="p-4 text-right font-semibold min-w-[100px]">
										{entry.score.toFixed(1)}%
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
