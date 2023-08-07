<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { collapsed } from "./stat";

export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true },
  },
  setup(props) {
    const router = useRoute();
    const isActive = computed(() => router.path === props.to);
    return { isActive, collapsed };
  },
};
</script>

<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <i class="icon" :class="icon" />
    <transition name="fade">
      <span v-if="!collapsed">
        <slot />
      </span>
    </transition>
  </router-link>
</template>

<style scoped>
.fade.enter-active,
.fade.leave-active {
  transition: opacity 0.1s;
}

.fade.enter,
.fade.leave {
  opacity: 0;
}

.link {
  display: flex;
  align-items: center;

  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;

  margin: 0.5em 0;
  padding: 0.2em;
  border-radius: 0.25em;
  height: 1.5em;

  color: white;
  text-decoration: none;

  width: 95%;
  height: 40px;
  flex-shrink: 0;
}
.link:hover {
  background-color: var(--sidebar-item-hover);
  color: #5041bc;
  font-family: Nunito;
  font-size: 15px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  border-radius: 10px;
}

.link:active {
  background-color: var(--sidebar-item-active);
  border-radius: 10px;
}
.link:focus {
  background-color: var(--sidebar-item-hover);
  color: #5041bc;
  font-family: Nunito;
  font-size: 15px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  border-radius: 10px;
}
.link .icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 20px;
}
</style>
