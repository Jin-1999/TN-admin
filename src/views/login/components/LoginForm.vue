<template>
	<el-form ref="loginFormRef" size="large" :model="loginForm" :rules="loginRules">
		<el-form-item prop="tenantId">
			<el-input v-model="loginForm.tenantId" placeholder="请输入分平台ID"> </el-input>
		</el-form-item>
		<el-form-item prop="username">
			<el-input v-model="loginForm.username" placeholder="用户名：admin / user">
				<!-- <template #prefix>
					<el-icon class="el-input__icon"><user /></el-icon>
				</template> -->
			</el-input>
		</el-form-item>
		<el-form-item prop="password">
			<el-input
				v-focus
				v-model="loginForm.password"
				type="password"
				placeholder="密码：123456"
				show-password
				autocomplete="new-password"
			>
				<!-- <template #prefix>
					<el-icon class="el-input__icon"><lock /></el-icon>
				</template> -->
			</el-input>
		</el-form-item>
		<el-form-item prop="code" class="no-wrap">
			<el-input v-model="loginForm.code" placeholder="输入验证码"> </el-input>
			<div class="login-code" style="width: 96px; height: 36px; margin-left: 7px" @click="resetImage">
				<img :src="loginForm.image" class="login-code-img" style="width: 100%; height: 100%" />
			</div>
		</el-form-item>
	</el-form>
	<div class="login-btn">
		<el-button :icon="CircleClose" round size="large">重置</el-button>
		<el-button :icon="UserFilled" round size="large" type="primary" @click="login()"> 登录 </el-button>
	</div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { Login } from "@/api/interface";
import { CircleClose, UserFilled } from "@element-plus/icons-vue";
import type { ElForm } from "element-plus";
import { getCaptcha } from "@/api/modules/login";
//登录表单
const loginForm = reactive<Login.ReqLoginForm>({
	tenantId: "",
	username: "",
	password: "",
	code: "",
	image: ""
});
// 校验规则
type FormInstance = InstanceType<typeof ElForm>;
const loginFormRef = ref<FormInstance>();
const loginRules = reactive({
	tenantId: [{ required: true, message: "请输入平台ID", trigger: "blur" }],
	username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
	password: [{ required: true, message: "请输入密码", trigger: "blur" }],
	code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
});
// login
const login = () => {
	console.log("loginForm", loginForm);
};

const resetImage = async () => {
	const res = await getCaptcha();
	loginForm.image = res.image;
};
// 挂载后
onMounted(() => {
	resetImage();
});
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
