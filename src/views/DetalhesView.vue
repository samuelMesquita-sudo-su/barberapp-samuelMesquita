<template>
  <div class="container">
    <div v-if="!agendamento.id">
      <p class="alert alert-danger" role="alert">
        Carregando...
      </p>
    </div>

    <div v-else>
      <div class="card">
        <div class="card-header text-light bg-black">
          Detalhes do Agendamento
        </div>
        <div class="card-body">
          <h5 class="card-title mb-3"># {{ agendamento.id }}</h5>
          <p class="card-subtitle  text-body-secondary">Cliente </p>
          <p class="card-text fw-semibold mb-4">{{ agendamento.clienteNome }}</p>
          <p class="card-subtitle text-body-secondary">Serviço</p>
          <p class="card-text fw-semibold mb-3">{{ agendamento.servico }}</p>
          <p class="card-subtitle text-body-secondary">Data</p>
          <p class="card-text fw-semibold mb-3">{{ agendamento.data }}</p>
          <p class="card-subtitle text-body-secondary">Hora</p>
          <p class="card-text fw-semibold mb-3">{{ agendamento.hora }}</p>
          <p class="card-subtitle text-body-secondary">Barbeiro</p>
          <p class="card-text fw-semibold mb-3">{{ agendamento.barbeiro }}</p>
          <p class="card-subtitle text-body-secondary">Status</p>
          <span
              class="badge"
              :class="{
                'bg-success': agendamento.status === 'confirmado',
                'bg-warning': agendamento.status === 'pendente',
                'bg-danger': agendamento.status === 'cancelado'
              }"
            >
              {{ agendamento.status }}
            </span>
        </div>
        <RouterLink to="/" class="btn btn-primary">Voltar</RouterLink>
      </div>

    </div>
    <!-- TODO [CRITÉRIO 4]:
      Use v-if para exibir as informações do agendamento apenas quando ele
      tiver sido carregado (ou seja, quando a variável não for null).
      Exiba todos os campos: clienteNome, servico, data, hora, barbeiro e status.
      Adicione um botão "Voltar" que leva de volta para a rota '/'.
    -->

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type Agendamento from '../interfaces/Agendamento'
import { buscarAgendamentoPorId } from '../services/agendamentoService'

const route = useRoute()
const router = useRouter()

// TODO [CRITÉRIO 3]:
// Crie uma variável reativa (ref) para armazenar o agendamento carregado.
// O tipo deve ser "Agendamento"
const agendamento = ref({} as Agendamento);

// TODO [CRITÉRIO 3, 7 e 9]:
// Use onMounted para buscar o agendamento pelo ID da rota.
// O ID está disponível em: route.params.id
// Lembre-se de converter o ID para number (as number) antes de usar.
async function buscarAgendamento() {
  const agendamentoResponse = await buscarAgendamentoPorId(route.params.id);
  agendamento.value = agendamentoResponse;
}

onMounted(buscarAgendamento)
</script>