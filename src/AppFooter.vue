<template>
  <div>
    <div id="footer">
      <div class="p-grid">
        <div class="p-col-12 p-lg-4">
          <h1>Tribunal de Contas do Amazonas</h1>
        </div>

        <div class="p-col-12 p-lg-8 footer-menu">
          <div class="p-grid">
            <div class="p-col-12 p-md-6 p-lg-3">
              <span>SUPORTE</span>

              <div v-for="(item, i) in items" :key="i">
                <router-link v-if="item.to" :to="item.to">
                  <a>{{item.label}}</a>
                </router-link>
              </div>

            </div>
          </div>
        </div>
      </div>

      <p>Desenvolvido por: Frank Renan</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

