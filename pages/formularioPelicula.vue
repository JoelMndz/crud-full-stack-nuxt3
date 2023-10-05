<template>
  <VContainer class="centrar">
    <VCard width="450" class="ma-auto">
      <VCardTitle class="text-center">
        {{ titulo }} Película Favorita
      </VCardTitle>
      <VCardText>
        <VForm @submit.prevent="procesarFormulario">
          <VTextField
            label="Nombre"
            v-model="campos.nombre"
          />
          <VTextField
            label="Descripcion"
            v-model="campos.descripcion"
          />
          <VBtn 
            variant="tonal"
            type="submit"
            :loading="cargando"
            block>
            Guardar
          </VBtn>
          <VBtn 
            class="mt-2"
            variant="tonal"
            color="error"
            @click="navigateTo('/')"
            :disabled="cargando"
            block>
            Cancelar
          </VBtn>
        </VForm>
      </VCardText>
    </VCard>
  </VContainer>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

const cargando = ref(false);
const peliculaStore = usePeliculaStore()
const {agregar, actualizar, setPeliculaActual} = peliculaStore
const {peliculaActual} = storeToRefs(peliculaStore)

const campos = reactive({
  nombre: peliculaActual.value ? peliculaActual.value.nombre : '',
  descripcion: peliculaActual.value ? peliculaActual.value.descripcion : '',
})

const procesarFormulario = async()=>{
  cargando.value = true;
  if(peliculaActual.value){
    await actualizar({...campos, _id: peliculaActual.value._id})
  }else{
    await agregar(campos)
  }
  cargando.value = false;
}

const titulo = computed(()=> peliculaActual.value ? 'Editar' : 'Agregar')

onUnmounted(()=>{
  setPeliculaActual(null)
})
</script>

<style scoped>
.centrar{
  display: flex;
  align-items: center;
  height: 80vh;
}
</style>