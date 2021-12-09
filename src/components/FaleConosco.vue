<template>
  <div id="features">
    <div class="p-grid">
      <Card class="card p-card p-col-6 p-offset-3">
        <template #title>
          <h1 class="p-text-center">Fale Conosco</h1>
        </template>

        <template #subtitle>
          <p>Envie para gente sua sugestão ou problema!</p>
        </template>

        <template #content>
          <form class="p-card-body" style="width: 90%">
            <div class="p-field p-col-12" style="width: 100%">
              <div class="p-inputgroup">
                <span class="p-float-label">
                  <InputText
                    id="email"
                    type="email"
                    v-model="email"
                    class="p-inputtext-lg"
                    :class="{ 'p-invalid': verificaDados }"
                  />
                  <!-- <InlineMessage v-if="false">Username is required</InlineMessage> -->
                  <label for="email">Seu e-mail:</label>
                </span>
              </div>
            </div>

            <div class="p-field p-col-12 p-link" style="width: 100%">
              <div class="p-inputgroup">
                <span class="p-float-label">
                  <Textarea
                    id="textarea"
                    rows="5"
                    v-model="mensagem"
                    :class="verificaDados"
                  />
                  <label for="textarea">Assunto:</label>
                </span>
              </div>
            </div>
          </form>
        </template>

        <template #footer>
          <div class="p-grid">
            <Button label="Enviar" @click="enviarFormulario" />
          </div>
        </template>
      </Card>
      <Loading />
      <Toast />
    </div>
  </div>
</template>

<script>
import Loading from "@/pages/Loading";

export default {
  data() {
    return {
      email: null,
      mensagem: null,
      verifica: false,
    };
  },

  computed: {
    verificaDados() {
      return this.email === "" || this.mensagem === "" ? true : false;
    },
  },

  methods: {
    enviarFormulario() {
      this.$store.state.dlgLoading = true;
      setTimeout(() => {
        this.$toast.add({
          severity: "success",
          summary: "Sucesso",
          detail: "Foi criado um ticket para o nosso sistema interno!",
          life: 3000,
        });
        this.$store.state.dlgLoading = false;
      }, 2000);
    },
  },

  components: {
    Loading,
  },
};
</script>
