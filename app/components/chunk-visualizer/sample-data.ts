import { ChunkData } from "./types";

// Sample chunks for demonstration purposes
export const sampleChunks: ChunkData[] = [
	{
		id: "01954343-4346-7f3b-9129-34c648f6e738",
		source: "c9c4c1d8-29a4-4eb7-9e9c-6537c2b19958",
		text: `长庚蓦地一转身："备纸笔。"

侍卫连忙追上去："殿下，你的手……"

长庚闻言一顿，抄起顾昀落下的酒壶，面无表情地将那一壶烈酒全冲到了双手的伤口上，本来已经结痂的伤口再次被冲出血水来，他从怀中取出一块帕子，浑不在意地一裹。

此时京城中，谁也没料到一个老太监的死竟然引发了这样一场轩然大波。

谭鸿飞压抑二十年的冤屈爆发，大约已经失心疯了，先是派兵围了王国舅府邸，得知那老东西竟将老婆孩子抛下，进宫躲风头去了，便立刻掉头，悍然对上了赶来救场的御林军。

御林军素日与北大营一主内、一主外，同为京畿重地的最后一道防线，是抬头不见低头见的交情，御林军主要由京城里走门路吃皇粮的少爷兵和从北大营抽调选拔的精英两部分组成，前者早就吓得尿了裤子，根本指望不上，后者虽然有本事，但骤然与"娘家"对上，一时间也是进退维谷，正如长庚预料，很快便溃不成军。`,
		glossary: [
			{ gender: "masculine", raw: "长庚", translation: "Chang Geng" },
			{ gender: "neuter", raw: "殿下", translation: "Your Highness" },
			{ gender: "masculine", raw: "顾昀", translation: "Gu Yun" },
			{ gender: "masculine", raw: "谭鸿飞", translation: "Tan Hongfei" },
			{
				gender: "masculine",
				raw: "王国舅",
				translation: "Imperial Uncle Wang",
			},
			{ gender: "neuter", raw: "御林军", translation: "Imperial Guard" },
			{ gender: "neuter", raw: "北大营", translation: "Northern Camp" },
		],
		translator: "Human",
		translation: `Chang Geng spun around. "Prepare a brush and paper."

"Your Highness, your hands..." The guard chased after him.

Chang Geng paused, picked up Gu Yun's abandoned jar of wine, and, with no change in expression, poured the whole jar of strong liquor over the wounds on his hands. The cuts, which had already begun to scab over, bled again with the rush of liquid. Chang Geng carelessly retrieved a handkerchief from his lapels and wrapped them tight.

In the capital, no one expected that an old eunuch's death would raise such a storm of controversy.

The resentment Tan Hongfei had suppressed for twenty years erupted—he had very likely already lost his mind. He first sent soldiers to surround Imperial Uncle Wang's estate. Upon learning that the old bastard had abandoned his wife and children to cower within the palace, he did an about-face and brazenly turned his blade on the Imperial Guard who had rushed to the scene.

The Imperial Guard and the Northern Camp had always been the last lines of defense for the capital, one within and one without, and the two constantly crossed paths. The Imperial Guard was by and large made up of two groups: young-master soldiers benefitting from nepotism and living off the imperial coffers, and elite soldiers selected from the Northern Camp. The former had already pissed their pants in terror and could not be relied on. The latter were skilled, but, stuck in the impossible position of drawing blades against their maiden family, quickly crumpled. Just as Chang Geng had predicted, in no time at all, the Imperial Guard was defeated.`,
		prev: `飞奔而去。

长庚一直盯着他的背影，直到目力无可及，他突然闭了闭眼，几不可闻地喃喃叫了一声："子熹……"

一边的侯府侍卫没听清，疑惑道："殿下说什么？"`,
		next: `起鸢楼的笙歌还在绕梁不休，温热的花酒白雾未消，四九城中已经炸了锅。

谭鸿飞带人逼至宫禁之外，`,
	},
	{
		id: "01954343-434b-7d57-8b2b-ff7bf247a244",
		source: "f9bc4531-31e0-45d9-9d44-168ca519f3b6",
		text: `「ピクシー01了解。気象情報は? 改善する見込みはないのか」

それでもうんざりとするような報告を、うんざりとするほど後方から聞かされる気分は最悪だった。コンタクトなしということは、ずっと飛び続けている我々がさらに索敵しなくてはならないという事を意味する。

雨雲を突破しようにも随分と高度を上げねばならない。結局、中途半端に 濡 れながらの飛行だ。外殻で水をはじくとはいえ、気分の良いものではない。

「ウルバン・コントロールよりの戦域管制情報を送る。......当分は無理だな。陸軍さんに同情したくなるぞ。きっと全員この寒さで地獄を見ているに違いない」

「戦区全域にて豪雨に暴風。現在二級洪水警報並びに飛行制限勧告発令中? 了解した。作戦参加中の他部隊は?」

ぱっと、受信したデータを確認しつつ、天候が著しく悪化しつつあるということを確認してターニャは気が遠くなりかけていた。いっそ、飛行制限勧告が飛行禁止勧告になれば帰還できるのだが。`,
		glossary: [
			{ gender: "neuter", raw: "ピクシー01", translation: "Pixie 01" },
			{
				gender: "neuter",
				raw: "ウルバン・コントロール",
				translation: "Urban Control",
			},
		],
		translator: "Human",
		translation: `"Pixie 01, roger. How about the weather? Can we expect it to improve?"

Still, I'm fed up with these tiresome reports from the rear. No reports of contact means that even though we've been flying all this time, we have to keep searching.

If we wanted to get above the rain clouds, we would have to climb awfully high. Instead, we just get wet. Even though our defensive shells repel water, getting rained on doesn't do much for the mood.

"Sending war zone data from Urban Control... Looks like it won't for a while. I feel for the ground troops. They must be in hell with this cold."

"The whole combat zone is hard rain and storm winds. A level-two flood warning and flight restrictions are being issued? Got it. How are the other units in the operation doing?" Tanya checks the data as it suddenly comes in and gets confirmation that the weather is only getting worse, which boggles her mind. That said, if the flight warnings become no-fly advisories, they can return to base.`,
		prev: `さすがに、そこまで方向音痴の部下を持ったつもりが無いのは唯一の救いだろう。

「管制より、ピクシー。現在コンタクト報告なし」`,
		next: `「キィエール軍港より捜索遊撃任務に第一戦隊が出港中。空軍は特殊強行偵察中隊が索敵任務に出撃。`,
	},
];
