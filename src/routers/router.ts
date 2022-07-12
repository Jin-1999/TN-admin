import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
	{
		path: "/",
		redirect: { name: "login" }
	},
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/login/index.vue")
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	// 切换页面，滚动到最顶部
	scrollBehavior: () => ({ left: 0, top: 0 })
});

export default router;
