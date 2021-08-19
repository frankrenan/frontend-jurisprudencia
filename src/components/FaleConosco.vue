<template>
  <div id="features">
    <div class="p-grid">
      <Card class="card p-card p-col-6 p-offset-3" >
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
                  <InputText id="email" type="email" class="p-inputtext-lg" />
                  <label for="email">Seu e-mail:</label>
                </span>
              </div>
            </div>

            <div class="p-field p-col-12" style="width: 100%">
              <div class="p-inputgroup">
                <span class="p-float-label">
                  <Textarea id="textarea" rows="5" />
                  <label for="textarea">Assunto:</label>
                </span>
              </div>
            </div>
          </form>
        </template>
      </Card>
    </div>
  </div>
</template>