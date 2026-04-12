// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string; // 添加前往项目链接字段
}

export const projectsData: Project[] = [
	// {
	// 	id: "mizuki-blog",
	// 	title: "Mizuki Blog Theme",
	// 	description:
	// 		"Modern blog theme developed based on the Astro framework, supporting multilingual, dark mode, and responsive design features.",
	// 	image: "",
	// 	category: "web",
	// 	techStack: ["Astro", "TypeScript", "Tailwind CSS", "Svelte"],
	// 	status: "completed",
	// 	liveDemo: "https://blog.example.com",
	// 	sourceCode: "https://github.com/example/mizuki", // 更改为GitHub链接
	// 	visitUrl: "https://blog.example.com", // 添加前往项目链接
	// 	startDate: "2024-01-01",
	// 	endDate: "2024-06-01",
	// 	featured: true,
	// 	tags: ["Blog", "Theme", "Open Source"],
	// },
	{
		id: "unity-cyclelist-component",
		title: "Unity Cyclelist Component",
		description:
			"A reusable UI component for displaying cyclic lists in Unity.",
		image: "",
		category: "other",
		techStack: ["UGUI", "Unity", "C#"],
		status: "completed",
		sourceCode: "https://github.com/Lemo1925/CycleList",
		startDate: "2026-03-01",
		endDate: "2026-03-02",
		tags: ["UGUI", "Unity", "C#"],
	},
	{
		id: "awesome-todolist-app",
		title: "TodoList App",
		description:
			"A TodoList application designed to help users manage their tasks.",
		image: "",
		category: "desktop",
		techStack: ["Avalonia", "C#"],
		status: "completed",
		startDate: "2024-03-01",
		endDate: "2024-03-15",
		tags: ["Desktop", "Avalonia", "TodoList"],
		sourceCode: "https://github.com/Lemo1925/TodoList",
	},
	// {
	// 	id: "data-visualization-tool",
	// 	title: "Data Visualization Tool",
	// 	description:
	// 		"Data visualization tool supporting multiple chart types and interactive analysis.",
	// 	image: "",
	// 	category: "web",
	// 	techStack: ["Vue.js", "D3.js", "TypeScript", "Node.js"],
	// 	status: "completed",
	// 	liveDemo: "https://dataviz.example.com",
	// 	visitUrl: "https://dataviz.example.com", // 添加前往项目链接
	// 	startDate: "2023-06-01",
	// 	endDate: "2023-11-01",
	// 	tags: ["Data Visualization", "Analytics", "Charts"],
	// },
	// {
	// 	id: "e-commerce-platform",
	// 	title: "E-commerce Platform",
	// 	description:
	// 		"Full-stack e-commerce platform including user management, product management, and order processing features.",
	// 	image: "",
	// 	category: "web",
	// 	techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
	// 	status: "planned",
	// 	startDate: "2024-07-01",
	// 	tags: ["E-commerce", "Full Stack", "Payment Integration"],
	// },
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter(
		(p) => p.status === "completed",
	).length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};

