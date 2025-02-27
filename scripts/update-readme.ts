import fs from "fs";
import path from "path";
import { leaderboardData } from "../app/data/leaderboard";

// Path to README.md
const readmePath = path.join(process.cwd(), "README.md");

// Function to generate the leaderboard markdown table
function generateLeaderboardTable(): string {
	// Sort data by score in descending order
	const sortedData = [...leaderboardData].sort((a, b) => b.score - a.score);

	// Create table header
	let table = "## LiTERatE Leaderboard\n\n";
	table +=
		"The scores below represent each system's win rate against human translators (0-100). A score of 50 indicates parity with human translation quality, while higher scores suggest superior performance.\n\n";
	table += "| Rank | Model | Version | Win Rate (%) |\n";
	table += "|------|-------|---------|-------------|\n";

	// Add each row
	sortedData.forEach((entry, index) => {
		const rank = index + 1;
		const modelName = entry.link
			? `[${entry.model}](${entry.link})`
			: entry.model;
		const version = entry.version || "—";
		const score = entry.score.toFixed(1);

		table += `| ${rank} | ${modelName} | ${version} | ${score} |\n`;
	});

	table += "\n*Last updated: " + new Date().toISOString().split("T")[0] + "*\n";

	return table;
}

// Function to update the README.md file
function updateReadme() {
	try {
		// Read the current README.md
		let readmeContent = "";
		if (fs.existsSync(readmePath)) {
			readmeContent = fs.readFileSync(readmePath, "utf8");
		}

		// Generate the leaderboard table
		const leaderboardTable = generateLeaderboardTable();

		// Check if the README already has a leaderboard section
		const leaderboardSectionRegex = /## LiTERatE Leaderboard[\s\S]*?(?=##|$)/;

		if (leaderboardSectionRegex.test(readmeContent)) {
			// Replace the existing leaderboard section
			readmeContent = readmeContent.replace(
				leaderboardSectionRegex,
				leaderboardTable,
			);
		} else {
			// Add the leaderboard section at the end
			readmeContent += "\n\n" + leaderboardTable;
		}

		// Write the updated content back to README.md
		fs.writeFileSync(readmePath, readmeContent, "utf8");

		console.log("README.md has been updated with the latest leaderboard data.");
	} catch (error) {
		console.error("Error updating README.md:", error);
	}
}

// Run the update
updateReadme();
