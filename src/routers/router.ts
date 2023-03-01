import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
// * 导入所有router
// const metaRouters = import.meta.globEager("./modules/*.ts");
const metaRouters = import.meta.glob("./modules/*.ts", { eager: true });

console.log("metaRouters", metaRouters);

// * 处理路由表
export const routerArray: RouteRecordRaw[] = [];
Object.keys(metaRouters).forEach(item => {
	Object.keys(metaRouters[item]).forEach((key: any) => {
		routerArray.push(...metaRouters[item][key]);
	});
});

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		redirect: { name: "login" }
	},
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/login/index.vue")
	},
	...routerArray
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	// 切换页面，滚动到最顶部
	scrollBehavior: () => ({ left: 0, top: 0 })
});

export default router;
