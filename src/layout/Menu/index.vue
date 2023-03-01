<template>
    <div class="menu" :style="{ width: '220px' }" element-loading-text="Loading..."
        element-loading-svg-view-box="-10, -10, 50, 50" element-loading-background="rgba(122, 122, 122, 0.01)">
        <!-- <Logo :isCollapse="isCollapse" /> -->
        <el-scrollbar>

            <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="1"
                text-color="#fff" @open="handleOpen" @close="handleClose" :router="true">
                <el-sub-menu index="/user">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>用户管理</span>
                    </template>
                    <el-menu-item index="/user/list">用户列表</el-menu-item>
                    <el-menu-item index="/user/banList">用户封禁</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
