<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps(["event"])
const router = useRouter()
const GStore = inject('GStore')

const register = ()=>{
    GStore.flashMessage = 'You are successfully registerd for' + event.title
    setTimeout(()=>{
        GStore.flashMessage = ''
    }, 3000)
    router.push({
        name : 'event-details',
    })
}
</script>

<template>
  <p>Register for the event here</p>
    <button @click="register">Register Me</button>
</template>
