<script setup lang="ts">
import FullScreen from "@/components/base/full-screen.vue";
import Theme from "@/components/base/theme.vue";
</script>

<template>
  <div class="admin_view">
    <div class="aside">
      <div class="logo">
        <div class="left">
          图片
        </div>
        <div class="right">
          <div>后台管理系统</div>
        </div>
      </div>
      <div class="menu">
        菜单
      </div>
    </div>
    <div class="container">
      <div class="head">
        <div class="crumbs">crumbs</div>
        <div class="actions">
          <span>首页</span>
          <FullScreen />
          <Theme />
          <span>用户</span>
        </div>
      </div>
      <div class="tabs">tabs</div>
      <div class="main">main</div>
    </div>
  </div>
</template>

<style lang="less">
.admin_view {
  display: flex;
  width: 100%;
  background-color: var(--color-bg-1);
  color: var(--color-text-1);

  .aside {
    width: 240px;
    border-right: 1px solid var(--color-neutral-2);
    height: 100vh;

    .logo {
      border-bottom: 1px solid var(--color-neutral-2);
      height: 90px;
      display: flex;
      padding: 20px;
    }

    .menu {
      padding: 10px 20px;
    }
  }

  .container {
    width: calc(100% - 240px);

    .head {
      border-bottom: 1px solid var(--color-neutral-2);
      display: flex;
      justify-content: space-between;
      height: 60px;
      padding: 0 20px;
      align-items: center;

      .actions {
        span {
          margin: 0 10px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }

    .tabs{
      height: 30px;
      border-bottom: 1px solid var(--color-neutral-2);
      display: flex;
      align-items: center;
      padding: 0 20px;
    }

    .main{
      padding: 20px;
      background-color: var(--color-neutral-2);
      height: calc(100vh - 90px);
    }
  }
}
</style>