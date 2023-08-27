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
              <div class="mb-3" >Joker ID</div>
              <input v-model="id" type="text" class="border border-slate-800 rounded p-2 w-full">
              <div class="my-3" >Password</div>
              <input v-model="password" type="text" class="border border-slate-800 rounded p-2 w-full">
  
              <button @click="login" class="bg-slate-800 text-white w-full p-3 mt-8 border border-slate-800">
                  Masuk
              </button>
              <NuxtLink to="/register" class="bg-white w-full p-3 mt-3 border border-slate-800 text-center">
                  Daftar
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
              id: localStorage.getItem('user_id'),
              password: ''
          }
      },
      methods:{
         login(){
              if(!this.id || !this.password){
                  return false
              }
              axios.post('/api/login', {
                  id: this.id,
                  password: this.password
              }).then(({data}) => {
                  localStorage.setItem('user_id', this.id)
                  localStorage.setItem('user_data', JSON.stringify(data))
                  location.href = '/'
              }).catch(err => {
                  console.log(err)
              })
          }
      }
  }
  </script>