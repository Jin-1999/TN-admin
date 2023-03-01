<template>
    <el-container>
        <el-aside>
            <Menu />
        </el-aside>
        <el-container>
            <el-header>header</el-header>
            <el-main>
                <RouterView></RouterView>
            </el-main>
            <el-footer>footer</el-footer>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import Menu from './Menu/index.vue'
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>