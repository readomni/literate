import { useState, useMemo } from "react";
import { ModelData } from "../data/leaderboard";

type SortField = "model" | "score";
type SortDirection = "asc" | "desc";

export default function useSortableData(data: ModelData[]) {
	const [sortField, setSortField] = useState<SortField>("score");
	const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

	const sortedData = useMemo(() => {
		return [...data].sort((a, b) => {
			if (sortField === "model") {
				return sortDirection === "asc"
					? a.model.localeCompare(b.model)
					: b.model.localeCompare(a.model);
			} else {
				return sortDirection === "asc" ? a.score - b.score : b.score - a.score;
			}
		});
	}, [data, sortField, sortDirection]);

	const handleSort = (field: SortField) => {
		if (sortField === field) {
			setSortDirection(sortDirection === "asc" ? "desc" : "asc");
		} else {
			setSortField(field);
			setSortDirection(field === "model" ? "asc" : "desc");
		}
	};

	return { sortedData, sortField, sortDirection, handleSort };
}
