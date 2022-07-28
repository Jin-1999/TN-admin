import http from "@/api";
import { Login } from "@/api/interface/index";

export const getCaptcha = () => {
	return http.get<Login.ResCaptcha>("/api/blade-auth/oauth/captcha");
};
