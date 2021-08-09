import Vue from 'vue';
const EventBus = new Vue({
  methods: {
    decisorioSelecionado(decisorio) {
      this.$emit('decisorioSelecionado', decisorio)
      console.log("eventBus")
    }
  }
});


export default EventBus;