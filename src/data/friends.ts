// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "Astro",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "The web framework for content-driven websites",
		siteurl: "https://github.com/withastro/astro",
		tags: ["Framework"],
	},
	{
		id: 2,
		title: "Mizuki Docs",
		imgurl: "http://q.qlogo.cn/headimg_dl?dst_uin=3231515355&spec=640&img_type=jpg",
		desc: "Mizuki User Manual",
		siteurl: "https://docs.mizuki.mysqil.com",
		tags: ["Docs"],
	},
	{
		id: 3,
		title: "Unity",
		imgurl: "https://u3d-connect-cdn-public-prd.cdn.unity.cn/h1/20230207/71e49724-2b81-4b8e-adfb-655f2bac5ba9.200x0x1.webp",
		desc: "Unity docs and resources for game development",
		siteurl: "https://docs.unity.cn/cn/2022.3/Manual/UnityManual.html",
		tags: ["Docs", "Unity"],
	},
	{
		id: 4,
		title: "MaiBot Docs",
		imgurl: "https://docs.mai-mai.org/title_img/emoji2.png",
		desc: "Documentation for MaiBot, a popular AI chatbot in QQ.",
		siteurl: "https://docs.mai-mai.org",
		tags: ["Docs", "Chatbot"],
	},
	{
		id: 5,
		title: "TypeScript",
		imgurl: "https://avatars.githubusercontent.com/u/6154722?v=4&s=640",
		desc: "TypeScript is JavaScript with syntax for types",
		siteurl: "https://www.typescriptlang.org",
		tags: ["Language", "JavaScript"],
	},
	{
		id: 6,
		title: "React",
		imgurl: "https://avatars.githubusercontent.com/u/6412038?v=4&s=640",
		desc: "A JavaScript library for building user interfaces",
		siteurl: "https://reactjs.org",
		tags: ["Framework", "JavaScript"],
	},
	{
		id: 7,
		title: "GitHub",
		imgurl: "https://avatars.githubusercontent.com/u/9919?v=4&s=640",
		desc: "Where the world builds software",
		siteurl: "https://github.com",
		tags: ["Development", "Platform"],
	},
	{
		id: 8,
		title: "Pixiv",
		imgurl: "https://www.pixiv.net/favicon20250122.ico",
		desc: "An illustration community.",
		siteurl: "https://www.pixiv.net/",
		tags: ["Platform", "Illustration"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
