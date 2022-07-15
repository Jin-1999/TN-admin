<template>
	<el-form ref="loginFormRef" size="large">
		<el-form-item prop="username">
			<el-input placeholder="用户名：admin / user">
				<template #prefix>
					<el-icon class="el-input__icon"><user /></el-icon>
				</template>
			</el-input>
		</el-form-item>
		<el-form-item prop="password">
			<el-input type="password" placeholder="密码：123456" show-password autocomplete="new-password">
				<template #prefix>
					<el-icon class="el-input__icon"><lock /></el-icon>
				</template>
			</el-input>
		</el-form-item>
	</el-form>
	<div class="login-btn">
		<el-button round size="large">重置</el-button>
		<el-button round size="large" type="primary"> 登录 </el-button>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "../index.scss";
</style>
