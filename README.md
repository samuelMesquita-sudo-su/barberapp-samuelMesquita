# ✂️ BarberApp — Sistema de Agendamentos para Barbearia

## Avaliação Prática — Desenvolvimento Front-End
**Curso:** Técnico em Desenvolvimento de Sistemas — SENAI  
**Tecnologias:** Vue 3 · TypeScript · Composition API · Vue Router · Axios · Bootstrap 5

---

## 📋 Contexto

Você foi contratado como desenvolvedor front-end por uma barbearia que precisa organizar melhor os seus agendamentos. Sua tarefa é desenvolver uma aplicação web que permita visualizar todos os agendamentos do dia, consultar os detalhes de um agendamento específico e cadastrar novos agendamentos diretamente pela interface.

---

## 🛠️ O que você vai desenvolver

Uma aplicação Vue 3 com TypeScript e Composition API, composta por **três telas**:

| Tela | Rota | Descrição |
|------|------|-----------|
| Listagem de Agendamentos | `/` | Exibe todos os agendamentos cadastrados e um formulário para criar novos |
| Detalhes do Agendamento | `/agendamento/:id` | Exibe todas as informações de um agendamento específico |
| Cadastro de Agendamento | `/cadastro` | Cadastro de um novo agendamento |

---

## 🗂️ Entidades do Domínio

### Agendamento

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | `number` | Identificador único do agendamento |
| `clienteNome` | `string` | Nome completo do cliente |
| `servico` | `string` | Tipo de serviço solicitado |
| `data` | `string` | Data do agendamento (formato: `AAAA-MM-DD`) |
| `hora` | `string` | Horário do agendamento (formato: `HH:MM`) |
| `barbeiro` | `string` | Nome do barbeiro responsável |
| `status` | `'confirmado' \| 'pendente' \| 'cancelado'` | Status atual do agendamento |

---

## ✅ Requisitos Funcionais

### RF01 — Listagem de Agendamentos
- Ao carregar a página inicial, a aplicação deve buscar automaticamente todos os agendamentos da API
- Os agendamentos devem ser exibidos em cards individuais, utilizando o componente `AgendamentoCard`
- Cada card deve exibir: nome do cliente, serviço, data, hora, barbeiro e status
- Cada card deve conter um botão ou link para navegar para a tela de detalhes

### RF02 — Detalhes do Agendamento
- Ao clicar em "Ver detalhes" em um card, o usuário deve ser levado para a rota `/agendamento/:id`
- A tela deve buscar o agendamento pelo ID que está na URL e exibir todas as suas informações
- Deve haver um botão para voltar à tela de listagem

### RF03 — Cadastro de Novo Agendamento
- A tela deve conter um formulário para cadastrar novos agendamentos
- O formulário deve ter campos para: nome do cliente, serviço, data, hora e barbeiro
- Ao enviar o formulário, uma requisição POST deve ser feita à API
- Após o cadastro, o novo agendamento deve aparecer automaticamente na lista sem precisar recarregar a página
- O formulário deve ser limpo após o envio bem-sucedido

---

## 🚀 Como rodar o projeto

> ⚠️ Você precisará de **dois terminais abertos ao mesmo tempo**.

**Passo 1 — Instale as dependências** (apenas na primeira vez):

```bash

npm install
```



**Passo 2 — Terminal 1: suba a API**

```bash

npm run api
```


A API ficará disponível em: `http://localhost:3000`

**Passo 3 — Terminal 2: suba a aplicação Vue**

```bash


npm run dev
```


A aplicação ficará disponível em: `http://localhost:5173`

---

## 📦 Tecnologias utilizadas

| Tecnologia | Uso |
|------------|-----|
| Vue 3 + TypeScript | Framework principal com tipagem estática |
| Composition API | Forma de organizar a lógica dos componentes Vue |
| Vue Router | Navegação entre telas |
| Axios | Requisições HTTP à API |
| Bootstrap 5 | Estilização da interface |
| json-server | API simulada para desenvolvimento |

---

## 🎯 Critérios de Avaliação

| # | Critério | Pontuação |
|---|----------|-----------|
| 1 | Estrutura de pastas organizada e componentes bem separados | 0,5 pt |
| 2 | Definição de interfaces TypeScript para as entidades do domínio | 0,5 pt |
| 3 | Uso correto de `setup()`, `ref()` e `onMounted()` | 1,0 pt |
| 4 | Uso correto de `v-for`, `v-if` e binding de dados (`v-model`) no template | 1,0 pt |
| 5 | Uso de `props` para comunicação entre componentes | 0,5 pt |
| 6 | Configuração e navegação básica entre as duas telas | 0,5 pt |
| 7 | Uso correto de parâmetros de rota (`route params`) | 0,5 pt |
| 8 | Requisição GET para listagem de agendamentos | 1,5 pt |
| 9 | Requisição GET para buscar agendamento por ID | 1,0 pt |
| 10 | Requisição POST para cadastrar novo agendamento | 1,0 pt |
| 11 | Uso de `v-model` no formulário de cadastro | 0,5 pt |
| 12 | Layout organizado e responsivo com Bootstrap | 1,5 pt |
| **Total** | | **10,0 pts** |

---

## 📤 Instruções de Entrega

1. Crie um repositório **público** no GitHub com o nome: `barberapp-seunome`
   - Exemplo: `barberapp-joaosilva`
2. Faça o push de todo o projeto para a branch `main`
3. No README do seu repositório, informe:
   - Seu nome completo
   - Turma
   - Instruções para rodar o projeto (`npm install`, `npm run api`, `npm run dev`)
4. Envie o link do repositório pelo canal indicado pelo seu instrutor

---

## 📌 Observações

- Esta é uma avaliação **individual** — não é permitido compartilhar código com colegas durante a realização da prova
- Você pode consultar a documentação oficial das tecnologias utilizadas (Vue, Axios, Bootstrap, Vue Router)
- O arquivo `db.json` já vem com dados iniciais — não o apague, pois ele é a base da sua API
- Certifique-se de que a API (`npm run api`) está rodando antes de testar a aplicação