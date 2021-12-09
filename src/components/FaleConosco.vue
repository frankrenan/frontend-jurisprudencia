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
          <form class="p-card-body" style="width: 90%" v-if="verifica">
            <div class="p-field p-col-12" style="width: 100%">
              <div class="p-inputgroup">
                <span class="p-float-label">
                  <InputText
                    id="email"
                    type="email"
                    v-model="email"
                    class="p-inputtext-lg"
                  />
                  <!-- <InlineMessage v-if="false">Username is required</InlineMessage> -->
                  <label for="email">Seu e-mail:</label>
                </span>
              </div>
            </div>

            <div class="p-field p-col-12 p-link" style="width: 100%">
              <div class="p-inputgroup">
                <span class="p-float-label">
                  <Textarea id="textarea" rows="5" v-model="mensagem" />
                  <label for="textarea">Assunto:</label>
                </span>
              </div>
            </div>
          </form>

          <form class="p-card-body" style="width: 90%" v-if="!verifica">
            <div class="p-field p-col-12" style="width: 100%">
              <div class="p-inputgroup">
                <span class="p-float-label">
                  <InputText
                    id="email"
                    type="email"
                    v-model="email"
                    class="p-inputtext-lg"
                    :class="{ 'p-invalid': true && email === '' }"
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
                    :class="{ 'p-invalid': true && mensagem === '' }"
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
      email: "",
      mensagem: "",
      verifica: true,
    };
  },

  computed: {},

  methods: {
    limpaFormulario() {
      this.email = "";
      this.mensagem = "";
    },

    enviarFormulario() {
      this.$store.state.dlgLoading = true;
      if (this.mensagem === "" || this.email === "") {
        this.verifica = false;
        this.$store.state.dlgLoading = false;
      } else {
        setTimeout(() => {
          this.$toast.add({
            severity: "success",
            summary: "Sucesso",
            detail: "Foi criado um ticket para o nosso sistema interno!",
            life: 3000,
          });
          this.limpaFormulario();
          this.verifica = true;
          this.$store.state.dlgLoading = false;
        }, 2000);
      }
    },
  },

  components: {
    Loading,
  },
};
</script>
