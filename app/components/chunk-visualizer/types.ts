export interface GlossaryTerm {
	raw: string;
	translation: string;
	gender: string;
}

export interface ChunkData {
	id: string;
	source: string;
	text: string;
	glossary: GlossaryTerm[];
	translator: string;
	translation: string;
	prev?: string;
	next?: string;
	verdict?: {
		winner: "human" | "system" | "tie";
		explanation?: string;
	};
}
