import Link from "next/link";

export default function LeaderboardHeader() {
	return (
		<div className="bg-card text-card-foreground p-6 rounded-lg mb-8 shadow-md border border-border">
			<h2 className="text-2xl font-bold mb-4">
				Literary Translation Evaluation and Rating Ensemble
			</h2>
			<p className="text-muted-foreground mb-2">
				LiTERatE is a benchmark specifically designed for evaluating machine
				translation systems on literary text from Chinese, Japanese, and Korean
				languages. Unlike traditional MT benchmarks, LiTERatE focuses on the
				unique challenges of literary translation with its creative and nuanced
				nature.
			</p>
			<p className="text-muted-foreground mb-2">
				Our evaluation uses chunks of 200-500 CJK characters as the basic unit,
				providing terminology glossaries and contextual information to all
				systems. An ensemble of LLMs judges translations through head-to-head
				comparisons with human translations, achieving 82% accuracy compared to
				decisive human judgments.
			</p>
			<p className="text-muted-foreground mb-2">
				The scores below represent each system's win rate against human
				translators (0-100). A score of 50 indicates parity with human
				translation quality, while higher scores suggest superior performance.
			</p>
			<p className="text-muted-foreground">
				Learn more about our{" "}
				<Link href="/methodology" className="text-primary hover:underline">
					evaluation methodology
				</Link>
				.
			</p>
		</div>
	);
}
