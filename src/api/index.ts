import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from "axios";
import { GlobalStore } from "@/store";

const config = {};

class RequestHttp {
	service: AxiosInstance;
	public constructor(config: AxiosRequestConfig) {
		// 实例化axios
		this.service = axios.create();
		// 请求拦截
		this.service.interceptors.request.use(
			(config: AxiosRequestConfig) => {
				const globalStore = GlobalStore();
			},
			() => {}
		);

		// 响应拦截
		this.service.interceptors.response.use(
			(response: AxiosResponse) => {},
			() => {}
		);
	}
}

export default new RequestHttp(config);
