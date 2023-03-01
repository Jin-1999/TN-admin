import { RouteRecordRaw } from "vue-router";
import layout from "@/layout/index.vue";

// 首页模块
const homeRouter: Array<RouteRecordRaw> = [
	{
		path: "/home",
		component: layout,
		children: [
			{
				path: "/home/index",
				name: "home",
				component: () => import("@/views/home/index.vue"),
				meta: {
					keepAlive: true,
					title: "首页",
					key: "home"
				}
			}
		]
	}
];

export default homeRouter;
