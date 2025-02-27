export default function NotificationBanner() {
	return (
		<div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 p-4 rounded-lg mb-8 shadow-sm">
			<p className="text-amber-800 dark:text-amber-200">
				<strong>Experimental Preview:</strong> This leaderboard is currently in
				preview mode and the results may change as we refine our evaluation
				methodology.
			</p>
		</div>
	);
}
