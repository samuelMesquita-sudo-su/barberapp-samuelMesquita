import { createRouter, createWebHistory } from 'vue-router'
import CadastroView from '@/views/CadastroView.vue'
import DetalhesView from '../views/DetalhesView.vue'
import HomeView from '../views/HomeView.vue'
// TODO [CRITÉRIO 6]:
  // Defina a rota para a tela inicial (HomeView).
  // Caminho: '/'

  // TODO [CRITÉRIO 7]:
  // Defina a rota para a tela de detalhes (DetalhesView).
  // Caminho: '/agendamento/:id'
  // O ":id" é o parâmetro de rota que identifica qual agendamento será exibido.

  // TODO
  // Defina a rota para a tela de cadastro (CadastroView)
  // Caminho: '/cadastro'
// https://router.vuejs.org/guide/#Creating-the-router-instance

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/agendamento/:id',
      name: 'detalhes',
      component: DetalhesView
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: CadastroView
    }
  ],
})

export default router
