"use client";

import Layout from "../components/Layout";
import { ChunkVisualizer, sampleChunks } from "../components/chunk-visualizer";

export default function Methodology() {
	return (
		<Layout>
			<div className="bg-card text-card-foreground p-8 rounded-lg shadow-md border border-border">
				<h2 className="text-3xl font-bold mb-6">Methodology</h2>

				<div className="space-y-8 text-foreground">
					<section>
						<h3 className="text-xl font-semibold mb-3">Overview</h3>
						<p className="text-muted-foreground">
							LiTERatE (Literary Translation Evaluation and Rating Ensemble) is
							a benchmark for evaluating machine translation systems on literary
							text. Unlike traditional machine translation benchmarks that focus
							on news articles, technical documentation, or general text,
							LiTERatE specifically targets literary translation, which presents
							unique challenges due to its creative and nuanced nature.
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold mb-3">Dataset Composition</h3>
						<p className="text-muted-foreground">
							Our dataset consists of English human translations of novels from
							Chinese, Japanese, and Korean (CJK) languages. We include a
							diverse range of translations:
						</p>
						<ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
							<li>Published professional translations</li>
							<li>Translations from online publishers</li>
							<li>Amateur translations</li>
						</ul>
						<p className="text-muted-foreground mt-3">
							While published professional translations make up the bulk of our
							samples to ensure high quality, we deliberately include
							lower-quality translations for two important reasons:
						</p>
						<ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
							<li>
								To ensure diversity, as they often encompass less-translated
								genres and story types
							</li>
							<li>
								To test system robustness against varying human translation
								quality
							</li>
						</ul>
					</section>

					<section>
						<h3 className="text-xl font-semibold mb-3">Evaluation Units</h3>
						<p className="text-muted-foreground">
							Our evaluation is conducted on chunks of 200-500 CJK characters as
							the basic unit. To ensure a fair and consistent evaluation
							environment, we:
						</p>
						<ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
							<li>
								Extract terminology used in the original human translation
							</li>
							<li>Provide these terms as additional input for all systems</li>
							<li>
								Include gender information for each term (neuter, feminine, or
								masculine)
							</li>
							<li>
								Provide approximately 60 CJK characters from previous and next
								chunks as context
							</li>
						</ul>
						<p className="text-muted-foreground mt-3">
							This approach allows us to evaluate not only translation quality
							but also term adherence and contextual understanding.
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold mb-3">System Input Format</h3>
						<p className="text-muted-foreground">
							All evaluated systems (except the Google NMT baseline) receive the
							following inputs:
						</p>
						<ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
							<li>The text chunk to be translated (200-500 CJK characters)</li>
							<li>
								Previous and next chunks as context (approximately 80 CJK
								characters each)
							</li>
							<li>
								A glossary of terms with their translations and gender
								information
							</li>
						</ul>
						<p className="text-muted-foreground mt-3">
							The Google NMT baseline, which serves as a traditional machine
							translation reference point, receives only line-by-line input
							without additional context or terminology data.
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold mb-3">Evaluation Process</h3>
						<p className="text-muted-foreground">
							Our evaluation process follows these key steps:
						</p>
						<ol className="list-decimal pl-6 mt-2 space-y-3 text-muted-foreground">
							<li>
								<strong>Chunk Curation:</strong> We carefully select and prepare
								text chunks from our dataset, ensuring they represent diverse
								literary styles, genres, and translation challenges.
							</li>
							<li>
								<strong>Translation Generation:</strong> We ask different
								systems to produce translations based on the raw text, extracted
								terminology/glossary, and surrounding context.
							</li>
							<li>
								<strong>Human Reference:</strong> Each chunk has a corresponding
								human translation that serves as a reference point (though not
								necessarily the "gold standard").
							</li>
							<li>
								<strong>Head-to-Head Comparison:</strong> Our LLM ensemble
								judges compare each system's translation against the human
								translation in a direct comparison.
							</li>
							<li>
								<strong>Scoring:</strong> Based on these comparisons, we
								calculate win rates that represent how often each system's
								translations are judged to be equal to or better than human
								translations.
							</li>
						</ol>

						<div className="mt-6">
							<h4 className="text-lg font-medium mb-4">Example Chunks</h4>
							<p className="text-muted-foreground mb-4">
								Below are examples of chunks from our dataset. You can explore
								the source text, glossary terms, context, and human
								translations. Hover over highlighted terms to see their
								translations.
							</p>
							<ChunkVisualizer chunks={sampleChunks} />
						</div>
					</section>

					<section>
						<h3 className="text-xl font-semibold mb-3">Evaluation Approach</h3>
						<p className="text-muted-foreground">
							Our benchmark uses an ensemble of Large Language Models (LLMs) as
							judges to evaluate translations. The evaluation is conducted as
							head-to-head comparisons between machine translations and human
							translations.
						</p>
						<p className="text-muted-foreground mt-3">
							To ensure the highest possible accuracy in our evaluation system,
							we conducted an extensive calibration experiment:
						</p>
						<ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
							<li>
								Multiple human annotators evaluated several hundred translation
								pairs
							</li>
							<li>
								We focused on decisive human verdicts—cases where multiple
								annotators agreed on a clear winner
							</li>
							<li>
								This approach addresses the inherently subjective nature of
								literary translation evaluation, which typically has low
								inter-annotator agreement
							</li>
						</ul>
					</section>

					<section>
						<h3 className="text-xl font-semibold mb-3">Judge Ensemble</h3>
						<p className="text-muted-foreground">
							Our experiments revealed that using multiple frontier LLMs as
							judges, each evaluating different aspects of translation quality,
							and then ensembling their verdicts produces the most accurate
							results.
						</p>
						<p className="text-muted-foreground mt-3">
							This ensemble approach achieves 82% accuracy when compared to
							decisive human judgments. For comparison, a single LLM judge would
							only achieve approximately 60% accuracy.
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold mb-3">Scoring Methodology</h3>
						<p className="text-muted-foreground">
							For each evaluation unit, our judge ensemble determines whether
							the machine translation or the human translation is superior, or
							if the comparison is too close to call ("not-sure").
						</p>
						<p className="text-muted-foreground mt-3">
							Points are assigned as follows:
						</p>
						<ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
							<li>Machine translation wins: 1 point</li>
							<li>Tie or "not-sure": 0.5 points</li>
							<li>Human translation wins: 0 points</li>
						</ul>
						<p className="text-muted-foreground mt-3">
							The final score for each system is calculated as the average of
							these points multiplied by 100, representing the system's win rate
							against human translators. A score of 50 indicates parity with
							human translation quality.
						</p>
					</section>

					<section>
						<h3 className="text-xl font-semibold mb-3">Limitations</h3>
						<p className="text-muted-foreground">
							While our methodology represents a significant advancement in
							evaluating literary translation, we acknowledge several
							limitations:
						</p>
						<ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
							<li>
								Literary translation evaluation is inherently subjective with
								low inter-annotator agreement
							</li>
							<li>
								Our current dataset is limited to Chinese, Japanese, and Korean
								source languages
							</li>
							<li>
								The evaluation focuses on chunk-level translation rather than
								document-level coherence
							</li>
							<li>
								Even with our ensemble approach, there remains an 18% gap
								between our automated evaluation and decisive human judgment
							</li>
						</ul>
					</section>
				</div>
			</div>
		</Layout>
	);
}
