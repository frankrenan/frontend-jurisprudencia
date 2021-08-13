<template>
  <div>
    <div id="landing-menu">
      <li v-for="(item, i) in items" :key="item.label || i">
        <router-link v-if="item.to" :to="item.to">
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </router-link>
      </li>
    </div>

    <div id="header">
      <div class="header-top" style="display: flex; align-items: stretch">
        <img
          src="../src/assets/logo-amazonas.png"
          alt="Tribunal de contas - logo"
          style="width: 50px; height: 100%"
        />
        <h2>Tribunal de Contas do Amazonas</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
    },
  },
  created() {
    console.log(this.item);
  },
};
</script>
