// Timeline data configuration file
// Used to manage data for the timeline page

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement" | "personal";
	startDate: string;
	endDate?: string; // If empty, it means current
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string; // Iconify icon name
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		id: "university-study",
		title: "Studying Computer Science and Technology",
		description:
			"Currently studying Computer Science and Technology, focusing on game development and software engineering.",
		type: "education",
		startDate: "2020-10-13",
		endDate: "2024-4-30",
		location: "ShaoGuan",
		organization: "ShaoGuan University",
		skills: ["Java", "Python", "C/C++", "C#", "MySQL"],
		achievements: [
			"GPA: 3.35/5.0",
			"Completed data structures and algorithms course project.",
			"Awarded two patents and one software copyright registration.",
			"Published one paper in a core journal.",
		],
		icon: "material-symbols:school",
		color: "#ee5711",
		// featured: true,
	},
	{
		id: "Shiyue-technology-internship",
		title: "Shiyue Technology Internship",
		description:
			"Interned at Shiyue Technology, gaining hands-on experience in software development and team collaboration.",
		type: "work",
		startDate: "2024-03-14",
		endDate: "2024-06-30",
		location: "Guangzhou Tianhe District",
		organization: "Guangzhou Shiyue Technology Co., Ltd.",
		skills: ["C#", "Lua", "Unity", "Agile Development"],
		achievements: [
			"Cooperated with the team to develop a mini game, which was won the 2nd place.",
			"Received positive feedback from users and stakeholders.",
			"Improved coding skills and learned best practices for software development.",
			"Participated in daily stand-ups and sprint planning meetings, enhancing teamwork and communication skills.",
		],
		icon: "material-symbols:verified",
		color: "#7C3AED",
	},
	{
		id: "first-job",
		title: "Shiyue Technology Unity Development",
		description:
			"Worked as a Unity developer at Shiyue Technology, contributing to the development of interactive applications and games.",
		type: "work",
		startDate: "2024-07-01",
		endDate: "2024-12-17",
		location: "Guangzhou Tianhe District",
		organization: "Guangzhou Shiyue Technology Co., Ltd.",
		skills: ["UGUI", "Lua", "Unity", "AssetBundle", "Git"],
		achievements: [
			"Join the main project development, responsible for implementing core gameplay mechanics and optimizing performance.",
			"Collaborated with artists and designers to create engaging and visually appealing game content.",
			"Participated in code reviews and contributed to improving code quality and maintainability.",
			"Received positive feedback from users and stakeholders, contributing to the success of the project.",
		],
		icon: "material-symbols:code",
		color: "#2563EB",
		// featured: true,
	},
	{
		id: "second-job",
		title: "ShenZhen Baoliang Technology Unity Development",
		description:
			"Worked as a Unity developer at ShenZhen Baoliang Technology, contributing to the development of interactive applications.",
		type: "work",
		startDate: "2025-06-03",
		endDate: "2026-1-21",
		location: "ShenZhen NanShan District",
		organization: "ShenZhen Baoliang Technology Co., Ltd.",
		skills: [
			"UGUI",
			"Jenkins",
			"Unity",
			"Addressable",
			"Shader",
			"ProtoBuf",
			"SVN",
		],
		achievements: [
			"Use Async/Await to develop the main project.",
			"Cooperating with the team to implement core gameplay mechanics and optimize performance.",
			"Communicated with artists and designers to create engaging and visually appealing game content.",
			"Participated in code reviews and contributed to improving code quality and maintainability.",
			"Cooperated with AI developers to integrate AI features into the project.",
		],
		icon: "material-symbols:work",
		color: "#0bd146",
		// featured: true,
	},
	{
		id: "third-job",
		title: "ShangHai Longyou games Co., Ltd.",
		description:
			"Worked as a Unity developer at ShangHai Longyou games, contributing to the development of CWT Games.",
		type: "work",
		startDate: "2026-04-08",
		location: "ShangHai City",
		skills: ["FGUI", "Unity", "XLua", "Lua", "Claude Code"],
		achievements: [
			"Learning the CWT Games framework",
			"Try to use the Fairy GUI design game UI",
			"Improve the 3d games develop ability",
		],
		icon: "material-symbols:work",
		color: "#f1a0e0",
		// featured: true,
	},
	{
		id: "2035-client",
		title: "2035 Games",
		description:
			"Deck-building Roguelike game currently in development, aiming to provide players with an engaging and strategic gaming experience.",
		type: "project",
		startDate: "2026-03-29",
		location: "QQ group",
		skills: ["Unity", "C#", "Game Design", "AI Integration"],
		achievements: [
			"Designing and implementing UI framework.",
			"Developing core gameplay...",
		],
		icon: "game-icons:abstract-086",
		color: "#2224cf",
	},
	{
		id: "unity-cyclelist-project",
		title: "Untiy Cyclelist Component",
		description:
			"Currently developing a Cyclelist component for Unity, aiming to provide a flexible and efficient solution for displaying large lists of items in Unity projects.",
		type: "project",
		startDate: "2026-03-01",
		endDate: "2026-03-07",
		location: "Dongguan City",
		skills: ["C#", "Unity", "UGUI"],
		achievements: [
			"Designing and implementing a Cyclelist component that supports dynamic loading and unloading of items to optimize performance.",
			"Ensuring the component is flexible and customizable to fit various use cases in Unity projects.",
			"Testing and optimizing the component for smooth performance even with large datasets.",
		],
		links: [
			{
				name: "GitHub Repository",
				url: "https://github.com/Lemo1925/CycleList",
				type: "project",
			},
		],
		icon: "material-symbols:cycle",
		color: "#0bf17e",
		// featured: true,
	},
];

// Get timeline statistics
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education")
			.length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
		personal: timelineData.filter((item) => item.type === "personal")
			.length,
	};

	return { total, byType };
};

// Get timeline items by type
export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort(
			(a, b) =>
				new Date(b.startDate).getTime() -
				new Date(a.startDate).getTime(),
		);
	}
	return timelineData
		.filter((item) => item.type === type)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() -
				new Date(a.startDate).getTime(),
		);
};

// Get featured timeline items
export const getFeaturedTimeline = () => {
	return timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() -
				new Date(a.startDate).getTime(),
		);
};

// Get current ongoing items
export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};

// Calculate total work experience
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter((item) => item.type === "work");
	let totalMonths = 0;

	workItems.forEach((item) => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};

