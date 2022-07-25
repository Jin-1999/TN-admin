import http from "@/api";

export const getCaptcha = () => {
	http.get("/api/blade-auth/oauth/captcha");
};
