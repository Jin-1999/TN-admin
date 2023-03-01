import { RouteRecordRaw } from "vue-router";
import layout from "@/layout/index.vue";

// IM用户管理模块
const imRouter: Array<RouteRecordRaw> = [
	{
		path: "/user",
		component: layout,
		children: [
			{
				path: "/user/list",
				name: "list",
				component: () => import("@/views/user/list/index.vue"),
				meta: {
					keepAlive: true,
					title: "用户列表",
					key: "home"
				}
			},
			{
				path: "/user/banList",
				name: "banList",
				component: () => import("@/views/user/banList/index.vue"),
				meta: {
					keepAlive: true,
					title: "用户列表",
					key: "home"
				}
			}
		]
	}
];

export default imRouter;
