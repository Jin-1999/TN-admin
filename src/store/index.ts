import { defineStore, createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
export const GlobalStore = defineStore({
	id: "GlobalState",
	state: () => ({
		// element语言
		language: "",
		// element组件大小
		assemblySize: "mini"
	}),
	getters: {},
	actions: {}
});

// piniaPersist(持久化)
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;
