import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from "axios";
import { GlobalStore } from "@/store";
import { ResultData } from "@/api/interface";
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
	// * 常用请求方法封装
	get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.get(url, { params, ..._object });
	}
	post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.post(url, params, _object);
	}
}

export default new RequestHttp(config);
