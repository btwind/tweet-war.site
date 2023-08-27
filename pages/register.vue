<template>
  <div class="flex min-h-screen min-w-full bg-gray-100 container max-w-sm">
    <div class="m-auto text-center border-slate-800">
        <h1 class="font-bold text-4xl text-center mb-3">
            TWEET WAR
        </h1>
        <p class="text-xl">
            Sosial Media <br> <span class="font-bold">Dark Joke</span> Indonesia
        </p>
        <p class="p-2 text-sm">
            Jadilah <span class="font-bold">JOKER</span> terbaik di indonesia
        </p>
        <div class="text-left mt-8 flex flex-wrap px-20">
            <div class="mb-3" >Nama Panggilan</div>
            <input v-model="name" type="text" class="border border-slate-800 rounded p-2 w-full">
            <div class="my-3" >PIN / Password</div>
            <input v-model="password" type="text" class="border border-slate-800 rounded p-2 w-full">

            <button @click="register" class="bg-slate-800 text-white w-full p-3 mt-8 border border-slate-800">
                Daftar
            </button>
            <NuxtLink to="/login" class="bg-white w-full p-3 mt-3 border border-slate-800 text-center">
                Masuk
            </NuxtLink>
        </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            name: '',
            password: ''
        }
    },
    methods:{
        register(){
            if(!this.name || !this.password){
                return false
            }
            axios.post('/api/register', {
                name: this.name,
                password: this.password
            }).then(({data}) => {
                localStorage.setItem('user_id', data.id)
                this.$router.push({ path: "/after-register" });
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
</script>