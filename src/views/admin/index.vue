<script setup lang="ts">
import Breadcrumb from "@/components/admin/breadcrumb.vue";
import Logo from "@/components/admin/logo.vue";
import FullScreen from "@/components/base/full-screen.vue";
import Theme from "@/components/base/theme.vue";
import UserDropdown from "@/components/base/user-dropdown.vue";
import router from "@/router";
import { IconHome } from "@arco-design/web-vue/es/icon";

function goHome() {
  router.push({ name: 'web' })
}
</script>

<template>
  <div class="admin_view">
    <div class="aside">
      <Logo />
      <div class="menu">
        菜单
      </div>
    </div>
    <div class="container">
      <div class="head">
        <div class="crumbs">
          <Breadcrumb />
        </div>
        <div class="actions">
          <span>
            <IconHome @click="goHome" />
          </span>
          <FullScreen />
          <Theme />
          <UserDropdown />
        </div>
      </div>
      <div class="tabs">tabs</div>
      <div class="main">
        <RouterView />
      </div>
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

    .logo-component {
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
        >span {
          margin: 0 10px;
          cursor: pointer;

          &:last-child {
            margin-right: 0;
          }

          &:hover {
            color: rgb(var(--arcoblue-6));
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