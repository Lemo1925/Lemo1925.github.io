// 本地番剧数据配置
export interface AnimeItem {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
}

const localAnimeList: AnimeItem[] = [
	{
		title: "ReLIFE",
		status: "completed",
		rating: 7.7,
		cover: "https://cdn.aqdstatic.com:966/age/20160098.jpg",
		description:
			"Relive to the high school life, forms meaningful friendships, and gets an opportunity to change his future.",
		episodes: "13 episodes",
		year: "2016",
		genre: ["ReLife", "School", "Youth"],
		studio: "ANIPLEX",
		link: "https://www.cycani.org/bangumi/1709.html",
		progress: 13,
		totalEpisodes: 13,
		startDate: "2016-07",
		endDate: "2016-11",
	},
	{
		title: "Oshi no Ko 3rd",
		status: "completed",
		rating: 7.0,
		cover: "https://cdn.aqdstatic.com:966/age/20260015.jpg",
		description: "Meeting girls among the stars, pure love and healing",
		episodes: "12 episodes",
		year: "2026",
		genre: ["Idol", "Drama"],
		studio: "Doga Kobo",
		link: "https://www.cycani.org/bangumi/7520.html",
		progress: 11,
		totalEpisodes: 11,
		startDate: "2026-01",
		endDate: "2026-03",
	},
	{
		title: "Is the Order a Rabbit?",
		status: "planned",
		rating: 9.0,
		cover: "/assets/anime/tz1.webp",
		description: "A group of girls' warm daily life",
		episodes: "12 episodes",
		year: "2014",
		genre: ["Daily life", "Healing"],
		studio: "White Fox",
		link: "https://www.bilibili.com/bangumi/media/md2762",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2014-04",
		endDate: "2014-06",
	},
	{
		title: "Lycoris Recoil",
		status: "completed",
		rating: 9.8,
		cover: "/assets/anime/lkls.webp",
		description: "Girl's gunfight",
		episodes: "12 episodes",
		year: "2022",
		genre: ["Action", "Slice of life"],
		studio: "A-1 Pictures",
		link: "https://www.bilibili.com/bangumi/media/md28338623",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2022-07",
		endDate: "2022-09",
	},
];

export default localAnimeList;

