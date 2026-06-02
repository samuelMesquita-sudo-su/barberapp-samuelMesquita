<template>
  <form>
    <div class="container">
      <div class="alert alert-primary" role="alert" v-if="isResolvido === false">
        Ocorreu um erro {{ isResolvido }}
      </div>
      <form action="" method="post">
        <div class="mb-3">
          <label for="inputClienteNome" class="form-label">Nome do Cliente</label>
          <input type="text" class="form-control" id="inputClienteNome" aria-describedby="clienteHelp" v-model="campos.clienteNome">
          <div id="clienteHelp" class="form-text">Coloque o nome do cliente</div>
        </div>

        <div class="mb-3">
          <label for="inputServico" class="form-label">Serviço</label>
          <input type="text" class="form-control" id="inputServico" aria-describedby="servicoHelp" v-model="campos.servico">
          <div id="servicoHelp" class="form-text">Coloque o serviço</div>
        </div>

        <div class="mb-3">
          <label for="inputData" class="form-label">Informe a data</label>
          <input type="date" class="form-control" id="inputData" aria-describedby="dataHelp" v-model="campos.data">
          <div id="dataHelp" class="form-text">Coloque a data</div>
        </div>

        <div class="mb-3">
          <label for="inputTime" class="form-label">Informe o horario</label>
          <input type="time" class="form-control" id="inputTime" aria-describedby="timeHelp" v-model="campos.hora">
          <div id="timeHelp" class="form-text">Coloque a hora</div>
        </div>

        <div class="mb-3">
          <label for="inputBarbeiro" class="form-label">Informe o barbeiro</label>
          <input type="text" class="form-control" id="inputBarbeiro" aria-describedby="barbeiroHelp" v-model="campos.barbeiro">
          <div id="barbeiroHelp" class="form-text">Coloque o barbeiro</div>
        </div>
      
        <div class="d-flex justify-content-end gap-2 mb-3">
          <button type="submit" class="btn btn-primary" @click.prevent="cadastrarAgendamento">Cadastrar</button>
          <RouterLink to="/" class="btn btn-secondary">Voltar</RouterLink>          
        </div>
      </form>
    </div>

  </form>
    <!-- TODO [CRITÉRIO 11 e 12]:
      Monte o formulário de cadastro com os campos:
        - clienteNome (text)
        - servico (text)
        - data (date)
        - hora (time)
        - barbeiro (text)
      Use v-model em cada campo para fazer o binding com os dados reativos.
      O botão de envio deve chamar a função "cadastrarAgendamento"
      https://getbootstrap.com/docs/5.3/forms/overview/#overview
      https://vuejs.org/guide/essentials/forms.html#basic-usage
    -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { criarAgendamento } from '../services/agendamentoService.ts'
import Agendamento from '@/interfaces/Agendamento.ts'
// Importar criarAgendamento do agendamentoService
// TODO [CRITÉRIO 3 e 11]:
// Crie um objeto reativo (ref) com os campos do formulário de cadastro
const campos = ref({} as Agendamento);


// TODO [CRITÉRIO 10]:
// Implemente a função "cadastrarAgendamento".
// Ela deve:
// 1. Chamar criarAgendamento() passando os dados do formulário
// 2. Adicionar o agendamento retornado pela API à lista local
// 3. Limpar os campos do formulário após o envio
// 4. Redirecionar para a lista de agendamentos
async function cadastrarAgendamento() {
  // Implemente aqui

  const novoAgendamento: Agendamento = {
      id: '' as number,
      clienteNome: campos.value.clienteNome,
      servico: campos.value.servico,
      data: campos.value.data,
      hora: campos.value.hora,
      barbeiro: campos.value.barbeiro,
      status: 'pendente'
  };

let isResolvido;

  try {
    await criarAgendamento(novoAgendamento);
    isResolvido = true;
    campos.value = null;
  } catch (error) {
    isResolvido = false;
  }
}
</script>