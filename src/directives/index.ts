import { App } from "vue";
import focus from "./modules/focus";

const directivesList: any = {
	// Custom directives
	focus
};

// const directives = {
// 	install: function (app: App<Element>) {
// 		Object.keys(directivesList).forEach(key => {
// 			// 注册所有自定义指令
// 			app.directive(key, directivesList[key]);
// 		});
// 	}
// };

const directives = (app: App<Element>) => {
	app.directive("focus", focus);
};

export default directives;
