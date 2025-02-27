import { leaderboardData } from "@/app/data/leaderboard";
import useSortableData from "@/app/hooks/useSortableData";
import LeaderboardHeader from "./LeaderboardHeader";
import LeaderboardTable from "./LeaderboardTable";
import NotificationBanner from "./NotificationBanner";

export default function Leaderboard() {
	const { sortedData, sortField, sortDirection, handleSort } =
		useSortableData(leaderboardData);

	return (
		<>
			<NotificationBanner />
			<LeaderboardHeader />
			<LeaderboardTable
				sortedData={sortedData}
				sortField={sortField}
				sortDirection={sortDirection}
				handleSort={handleSort}
				originalData={leaderboardData}
			/>
		</>
	);
}
