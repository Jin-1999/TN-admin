<template>
	<div class="login-container flx-center">
		<SwitchDark class="dark"></SwitchDark>
		<div class="login-box">
			<div class="login-left">
				<img src="@/assets/images/login_left0.png" alt="login" />
			</div>
			<div class="login-form">
				<div class="login-logo">
					<img class="login-icon" src="@/assets/images/logo.svg" alt="" />
					<p class="logo-text">Admin</p>
				</div>
				<LoginForm ref="loginRef" :age="'20'" :address="['天府三街', '天府四街']"></LoginForm>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="login">
import LoginForm from "./components/LoginForm.vue";
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
