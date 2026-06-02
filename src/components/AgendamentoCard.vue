<template>
    <div class="row">
      <div class="col-sm-6 mb-3 mb-sm-0">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">{{ agendamento.clienteNome }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ agendamento.servico }}</h6>
            <p class="card-text">
              Data: {{ agendamento.data }} <br>
              Hora: {{ agendamento.hora }} <br>
              Barbeiro: {{ agendamento.barbeiro }}
            </p>
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
            <button class="btn btn-primary mt-3" @click="verDetalhes">Ver detalhes</button>
          </div>
        </div>
      </div>
    </div>
 
  <!-- TODO [CRITÉRIO 4 e 12]:
    Monte o card do agendamento usando Bootstrap.
    Exiba: clienteNome, servico, data, hora e barbeiro.
    Use v-if para exibir o badge de status com cores diferentes:
      - confirmado → badge verde (bg-success)
      - pendente   → badge amarelo (bg-warning)
      - cancelado  → badge vermelho (bg-danger)
    Adicione um botão "Ver detalhes" que navega para /agendamento/:id
    https://getbootstrap.com/docs/5.3/components/card/#titles-text-and-links
    https://router.vuejs.org/guide/#App-vue
  -->
</template>

<script setup lang="ts">
import type Agendamento from '../interfaces/Agendamento'
import { useRouter } from 'vue-router'

// TODO [CRITÉRIO 5]:
// Declare a prop "agendamento" do tipo Agendamento.
// Ela será passada pelo componente pai (HomeView) para este componente.
const props = defineProps<{
  agendamento?: Agendamento
}>();


const router = useRouter()

// TODO [CRITÉRIO 6 e 7]:
// Implemente a função "verDetalhes" que navega para a rota /agendamento/:id
// usando o id do agendamento recebido via prop.
function verDetalhes() {
  router.push(`/agendamento/${props.agendamento.id}`)
  // Implemente aqui
}
</script>