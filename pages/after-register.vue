<template>
    <div class="flex min-h-screen min-w-full bg-gray-100 container max-w-sm">
      <div class="m-auto text-center border-slate-800">
          <h1 class="font-bold text-4xl text-center mb-3">
              TWEET WAR
          </h1>
          <p class="text-lg p-4">
            Kami senang jika anda dapat
            membuat <br>
            <span class="font-bold">DARK JOKE</span>
            yang dapat menghibur banyak
            orang.
          </p>
          <p class="mt-3">
            <span class="font-medium">Joker ID</span> kamu :
          </p>
          <p class="text-center font-bold text-4xl my-3">
            {{  id }}
          </p>
          <p>
            simpan joker id ini untuk masuk
          </p>
          <div class="text-left mt-8 flex flex-wrap px-20">
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
              id: localStorage.getItem('user_id'),
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