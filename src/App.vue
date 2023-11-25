<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { inject } from 'vue';

const GStore = inject('GStore')
const router = useRouter()


router.beforeEach((to, from) => {

const notAuthorized = true
if (to.meta.requireAuth && notAuthorized) {
  GStore.flashMessage = 'Sorry, you are not authorized to view this page'
  console.log(GStore.flashMessage);
  setTimeout(() => {
    GStore.flashMessage = ''
  }, 3000)

  return false
}
})
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <div id="flash-message" v-if="GStore.flashMessage">
        {{ GStore.flashMessage }}
        </div>
        <nav>
          <RouterLink :to="{name:'event-list'}">Events</RouterLink> |
          <RouterLink :to="{name:'about'}">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
@keyframes yellowfade {
  from {
    background: yellow;
  }to {
    background: transparent;
  }
}

#flashMessage{
  animation-name: yellowfade;
  animation-duration: 3s;
}
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
h2 {
  font-size: 20px;
}
</style>
